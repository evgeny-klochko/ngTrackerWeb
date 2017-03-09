'use strict';

const gulp = require('gulp');
const cache = require('gulp-cached');

module.exports = function(options, bs) {
  return function() {
    return gulp.src(options.path)
      .pipe(cache('templates'))
      .pipe(gulp.dest(options.dest))
      .pipe(bs.reload({ stream: true }));
  }
};
