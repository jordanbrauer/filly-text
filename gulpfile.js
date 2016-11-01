// plugins
const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del');

// clean
gulp.task('clean', () => {
  const stream = del('./dist/**/*.js');

  return stream;
});

// babel es2015
gulp.task('babel', ['clean'], () => {
  const stream = gulp.src('./js/**/*.js')
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest('./dist'));

  return stream;
});

// build
gulp.task('build', ['babel']);

// watch task
gulp.task('watch', ['build'], () => {
  gulp.watch('./js/*', ['build']);
});

// default
gulp.task('default', () => {
  console.log('See readme or gulpfile for commands!');
});
