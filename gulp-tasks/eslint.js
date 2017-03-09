'use strict';

const gulp = require('gulp');
const cache = require('gulp-cached');
const eslint = require('gulp-eslint');
const gulpIf = require('gulp-if');
const through2 = require('through2');

function hasLintErrors(file) {
  return file.eslint && (file.eslint.warningCount > 0 || file.eslint.errorCount > 0);
}

function uncache(cacheName) {
  return through2.obj(function (file, enc, done) {
    if (cache.caches[cacheName]) {
        delete cache.caches[cacheName][file.path];
    }
    done(null, file);
  });
}

module.exports = function(options) {
  var failAfterError = options && options.args && options.args.failAfterError;

  return function() {
    return gulp.src(options.path)
      .pipe(cache('lint-cache'))
      .pipe(eslint({ configFile: '.eslintrc' }))
      .pipe(eslint.format())
      .pipe(gulpIf(hasLintErrors, uncache('lint-cache')))
      .pipe(gulpIf(failAfterError, eslint.failAfterError()));
  }
};
