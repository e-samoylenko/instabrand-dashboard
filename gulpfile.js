var gulp = require('gulp');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var uncss = require('gulp-uncss');

gulp.task('connect', function() {
  connect.server({
    root: './dist',
    livereload: true
  });
});

gulp.task('css', function () {
    gulp.src('./app/css/*.scss')
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(connect.reload());
});
 
gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(gulp.dest('./dist/'))
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./app/scss/*.scss'], ['css']);
});
 
gulp.task('default', ['connect', 'html', 'css', 'watch']);