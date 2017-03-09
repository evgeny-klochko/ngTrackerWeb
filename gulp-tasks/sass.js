'use strict';

const gulp = require('gulp');
const csso = require('gulp-csso');
const gulpIf = require('gulp-if');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

const autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

module.exports = function(options, bs) {
  return function() {
    return gulp.src(options.path)
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer(autoprefixerOptions))
      .pipe(gulpIf(options.args.production, csso()))
      .pipe(gulp.dest(options.dest))
      .pipe(bs.reload({ stream: true }));
  }
};
