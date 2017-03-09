'use strict';

const gulp = require('gulp');
const csso = require('gulp-csso');
const gulpIf = require('gulp-if');
const concat = require('gulp-concat');

module.exports = function(options) {
  return function() {
    return gulp.src(options.path)
      .pipe(concat('vendors.css'))
      .pipe(gulpIf(options.args.production, csso()))
      .pipe(gulp.dest(options.dest))
  }
};
