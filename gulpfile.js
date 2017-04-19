var gulp = require('gulp')
var nib = require('nib')
var stylus = require('gulp-stylus')
var babel = require('babelify')
var browserify = require('browserify')
var watch = require('gulp-watch')
var source = require('vinyl-source-stream')
var watchify = require('watchify')

gulp.task('stylus', () =>{
	return gulp.src('./lib/css/*.styl')
		.pipe(stylus({
			use: nib(),
			compress: true,
			'include css': true,
		}))
		.pipe(gulp.dest('public/css/'))
})

function compile(watch){
	var bundle = browserify('./lib/js/index.js', {debug: true})

	if(watch){
		bundle = watchify(bundle)
		bundle.on('update', function(){
			console.log('Bundling...')
			rebundle()
		})
	}

	function rebundle(){
		bundle
			.transform(babel, {presets: ['es2015'], plugins: ['syntax-async-functions', 'transform-regenerator']})
			.bundle()
			.on('error', function(error){ 
				console.log(error)
				this.emit('end')
			})
			.pipe(source('index.js'))
			// .pipe(rename('app.js'))
			.pipe(gulp.dest('public/js'))		
	}

	rebundle()
}

gulp.task('build', function(){
	return compile()
})

gulp.task('watch', function(){
	return compile(true)
})

gulp.task('watching', ()=> {
	gulp.watch('./lib/css/*.styl', ['stylus'])
})

gulp.task('default', ['styles', 'assets', 'build'])