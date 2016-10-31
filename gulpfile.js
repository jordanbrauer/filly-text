'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');

// babel es2015
gulp.task('babel', () => {
  return gulp.src('./js/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./dist'));
});

// build
gulp.task('build', ['babel']);

// watch task
gulp.task('watch', ['build'], () => {
  gulp.watch('./js/*', ['babel']);
});

gulp.task('default', () => {
  // ...
});
