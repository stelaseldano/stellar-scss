var gulp = require('gulp');


// process css
var scss = require('gulp-sass');

gulp.task('scss', function() {
  gulp.src('source/styles/*.scss')
    .pipe(scss())
    .pipe(gulp.dest('export/styles'));
});


// process html
gulp.task('html', function() {
	gulp.src('source/*.html')
	.pipe(gulp.dest('export'));
});


// connect server
var connect = require('gulp-connect');

gulp.task('connect', function() {
	connect.server({
		root: 'export',
		port: 9000,
		livereload: true
	});
});


// what to watch for
gulp.task('watch', function() {
	gulp.watch('source/styles/*.scss', ['scss']);
	gulp.watch('source/*.html', ['html']);
});


// the default task
gulp.task('default', function() {
	gulp.start([
		'html',
		'scss',
		'connect',
		'watch'
	]);
});
