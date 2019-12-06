var gulp = require('gulp'), // Подключаем Gulp
    sass = require('gulp-sass'); // Подключаем Sass пакет

function scss() {  // Создаем таск "scss"
  return gulp.src(['scss/**/*.sass', 'scss/**/*.scss', 'scss/*.scss']) // Берем источник
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
    .pipe(gulp.dest('css')) // Выгружаем результата в папку css
  }

  function watchFiles(){
    gulp.watch(['scss/**/*.sass', 'scss/**/*.scss', 'scss/*.scss'], scss);
  }

exports.scss = scss;
exports.watchFiles = watchFiles;