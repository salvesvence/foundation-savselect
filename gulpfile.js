// Include gulp and our plugins
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('dist/sav-select.js')
        .pipe(concat('sav-select.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// Default Task
gulp.task('default', ['scripts']);