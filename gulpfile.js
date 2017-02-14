var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify')

gulp.task('scripts', function() {
    gulp.src([
        'src/js/*.js'
    ])
        .pipe(concat('centry.js'))
        .pipe(gulp.dest('dist'))
})

gulp.task('styles', function() {
    gulp.src('src/sass/centry.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist'))
})

gulp.task('dist', function() {
    gulp.src([
        'src/js/*.js'
    ])
        .pipe(concat('centry.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
})

gulp.task('watch', ['scripts', 'styles'], function() {
    gulp.watch('src/js/*.js', ['scripts'])
    gulp.watch('src/sass/*.scss', ['styles'])
})
