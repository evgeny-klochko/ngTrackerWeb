'use strict';

const gulp = require('gulp');

module.exports = function(options) {
  return function() {
    return gulp.src(options.path)
      .pipe(gulp.dest(function(file) {
        if (file.base.indexOf('fonts') !== -1) {
          return options.dest + '/fonts';
        } else if (file.base.indexOf('images') !== -1) {
          return options.dest + '/images';
        } else {
          return options.dest;
        }
      }));
  }
};
