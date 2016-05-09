// Include gulp and our plugins
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('sav-select.js'))
        .pipe(gulp.dest('dist'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['scripts']);