var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');

gulp.task('sass', function () {
   gulp.src('stylesheet/main.scss')
       .pipe(sass())
       .pipe(prefix())
       .pipe(gulp.dest('css'));
});

gulp.task('watch', function(){
    gulp.watch('stylesheet/*.scss', ['sass']);
})