var gulp = require('gulp'), // Подключаем Gulp
    sass = require('gulp-sass'); // Подключаем Sass пакет

gulp.task('scss', function() { // Создаем таск "sass"
  return gulp.src(['scss/**/*.sass', 'scss/**/*.scss']) // Берем источник
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
    .pipe(gulp.dest('css')) // Выгружаем результата в папку css
  });

 gulp.task('watch', function() {
   gulp.watch(['scss/**/*.sass', 'scss/**/*.scss'], ['scss']); // Наблюдение за sass файлами в папке sass
 });

 gulp.task('default', ['watch']);