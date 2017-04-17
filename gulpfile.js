var gulp = require('gulp'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync').create();

gulp.task('vendors-js', function () {
    gulp
        .src([
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js'
        ])
        .pipe(concat('vendors.js'))
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('vendors-css', function () {
    gulp
        .src('node_modules/bootstrap/dist/css/bootstrap.min.css')
        .pipe(concat('vendors.css'))
        .pipe(gulp.dest('dist/css/'))
});

gulp.task('copy-staticfiles', function () {
    gulp
        .src([
            'src/index.html',
            'service-worker.js'
        ])
        .pipe(gulp.dest('dist/'));
});

gulp.task('copy-css', function () {
    gulp
        .src('src/css/style.css')
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('copy-js', function () {
    gulp
        .src('src/js/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/js/'))
});

gulp.task('copy', ['copy-staticfiles', 'copy-css', 'copy-js']);

gulp.task('vendors', ['vendors-js', 'vendors-css']);

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "dist/"
        },
        files: ["src/css/style.css", "src/js/*.js", "src/*.html"]
    });

    gulp.watch("src/js/*.js", ['copy-js']).on('change', browserSync.reload);
    gulp.watch("src/css/*.css", ['copy-css']).on('change', browserSync.reload);
    gulp.watch("src/*.html", ['copy-staticfiles']).on('change', browserSync.reload);
});

gulp.task('default', ['vendors', 'copy', 'browser-sync']);