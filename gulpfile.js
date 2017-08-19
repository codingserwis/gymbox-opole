var gulp = require('gulp'),
	sass = require('gulp-sass'),
	sourceMaps = require('gulp-sourcemaps'),
	autoPrefixer = require('gulp-autoprefixer'),
	imgMin = require('gulp-imagemin'),
	browserSync = require('browser-sync'),
	gulpif = require('gulp-if'),
	uglify = require('gulp-uglify'),
	babel = require('gulp-babel'),
	uncss = require('gulp-uncss');


// sass compilation
gulp.task('sass', function() {
	return gulp.src('prod/sass/**/*.scss')
		.pipe(sourceMaps.init())
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(autoPrefixer({browsers: ['last 2 versions']}))
		.pipe(sourceMaps.write('./maps'))
		.pipe(gulp.dest('dist/assets/css'))
		.pipe(browserSync.stream());
});

// run after all finished tu delete unused css
gulp.task('uncss', function() {
	return gulp.src('prod/sass/**/*.scss')
		.pipe(sourceMaps.init())
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(uncss({
			html: ['dist/*.html']
		}))
		.pipe(autoPrefixer({browsers: ['last 2 versions']}))
		.pipe(sourceMaps.write('./maps'))
		.pipe(gulp.dest('dist/assets/css'))
		.pipe(browserSync.stream());
});

// copying files and uglify js 
gulp.task('copy', function() {
	return gulp.src('prod/**/*.+(html|js)')
		.pipe(gulpif('*.js', sourceMaps.init()))
		.pipe(gulpif('*.js', babel({presets: ['es2015']})))
		.pipe(gulpif('*.js', uglify()))
		.pipe(gulpif('*.js', sourceMaps.write('.')))
		.pipe(gulpif('*.js', gulp.dest('dist/assets/')))
		.pipe(gulpif('*.html', gulp.dest('dist')))
		.pipe(browserSync.stream());
});

// images optimalisation
gulp.task('images', function() {
	return gulp.src('prod/img/*')
		.pipe(imgMin())
		.pipe(gulp.dest('dist/assets/img'));
});

// browser-sync
gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: 'dist'
		}
	});
});

// watch for files
gulp.task('watch', ['browser-sync', 'sass', 'images'], function() {
	gulp.watch('prod/sass/**/*.scss', ['sass']);
	gulp.watch('prod/**/*.+(html|js)', ['copy']);
	gulp.watch('prod/img/**/*.+(jpg|png|svg)', ['images']);
});

// gulp default task
gulp.task('default', ['watch']);






