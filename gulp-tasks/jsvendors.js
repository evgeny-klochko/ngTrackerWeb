'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');

module.exports = function (options) {
  return function () {
    return gulp.src(options.path)
      .pipe(concat('vendors.js'))
      .pipe(gulpIf(options.args.production, uglify()))
      .pipe(gulp.dest(options.dest))
  }
};
