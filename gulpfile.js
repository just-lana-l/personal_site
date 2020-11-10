var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task ('style', function() {
    return gulp.src ('sass/**/*.scss', gulp.parallel('style'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    gulp.watch('sass/**/*.+scss', gulp.parallel('style'));
    
  });

gulp.task('default', gulp.parallel('watch', 'browser-sync', 'style' ));