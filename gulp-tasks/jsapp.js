'use strict';

const gulp = require('gulp');
const cache = require('gulp-cached');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const remember = require('gulp-remember');
const ngAnnotate = require('gulp-ng-annotate');
const through2 = require('through2').obj;

const CONFIGS_TO_PROCESS = [
  'api.js',
  'app.js'
];

const ENV_VARIABLES = [
  'BASE_API_URL',
  'MODE'
];

module.exports = function(options, bs) {
  return function() {
    return gulp.src(options.path)
      .pipe(through2((file, enc, callback) => {
        if (file.relative.includes('configs') && CONFIGS_TO_PROCESS.includes(file.basename)) {
          var fileContent = file.contents.toString();

          ENV_VARIABLES.forEach((variable) => {
            fileContent = fileContent.replace(new RegExp('ENV_' + variable, 'g'), process.env[variable]);
          });

          file.contents = new Buffer(fileContent);
        }
        callback(null, file);
      }))
      .pipe(cache('scrips-app'))
      .pipe(ngAnnotate())
      .pipe(remember('scrips-app'))
      .pipe(concat('app.js'))
      .pipe(gulpIf(options.args.production, uglify()))
      .pipe(gulp.dest(options.dest))
      .pipe(bs.reload({ stream: true }));
  }
};
