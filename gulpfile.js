'use strict';

require('dotenv').config();
const gulp = require('gulp');
const args = require('yargs').argv;
const requireDir = require('require-dir');
const tasks = requireDir('./gulp-tasks');
const browserSync = require('browser-sync').create();
const historyApiFallback = require('connect-history-api-fallback');

const dirs = {
  src: './src',
  dist: './dist',
  modules: './node_modules'
};

if (!process.env.MODE || !process.env.BASE_API_URL) {
  throw new Error('Please specify all .env variables, for more info check README.md and .env_example!');
}

const port = process.env.BROWSER_SYNC_PORT || 8081;

const paths = {
  scripts: {
    app: ['./src/app/**/module.js', './src/app/**/*.js', '!./src/app/**/*.spec.js'],
    angular: [
      dirs.modules + '/angular/angular.js',
      dirs.modules + '/angular-ui-router/release/angular-ui-router.js',
      dirs.modules + '/angular-loading-bar/build/loading-bar.js',
      dirs.modules + '/angular-modal-service/src/angular-modal-service.js',
      dirs.modules + '/angular-messages/angular-messages.js',
      dirs.modules + '/angular-toastr/dist/angular-toastr.tpls.js',
      dirs.modules + '/angular-local-storage/dist/angular-local-storage.js',
      dirs.modules + '/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
      dirs.modules + '/angular-recaptcha/release/angular-recaptcha.js'
    ],
    vendors: [
      dirs.modules + '/jquery/dist/jquery.js',
      dirs.modules + '/moment/moment.js',
      dirs.modules + '/lodash/lodash.js',
      dirs.modules + '/bootstrap/dist/js/bootstrap.js'
    ]
  },
  sass: dirs.src + '/assets/sass/style.sass',
  styles: {
    vendors: [
      dirs.modules + '/angular-loading-bar/build/loading-bar.css',
      dirs.modules + '/angular-toastr/dist/angular-toastr.css',
      dirs.modules + '/bootstrap/dist/css/bootstrap.css'
    ],
    app: dirs.src + '/assets/sass/**/*.sass'
  },
  templates: [dirs.src + '/app/**/*.html'],
  assets: [
    dirs.modules + '/bootstrap/fonts/*',
    dirs.src + '/assets/fonts/**/*',
    dirs.src + '/assets/images/**/*'
  ],
  clean: ['!' + dirs.dist + '/.gitignore', dirs.dist + '/**/*.*']
};

gulp.task('clean', tasks.clean({ path: paths.clean }));
gulp.task('eslint', tasks.eslint({ path: paths.scripts.app, args: args }));
gulp.task('assets', tasks.assets({ path: paths.assets, dest: dirs.dist + '/assets' }));
gulp.task('styles', tasks.styles({ path: paths.styles.vendors, dest: dirs.dist + '/assets', args: args }));
gulp.task('sass', tasks.sass({ path: paths.sass, dest: dirs.dist + '/assets', args: args }, browserSync));
gulp.task('templates', tasks.templates({ path: paths.templates, dest: dirs.dist, args: args }, browserSync));
gulp.task('js-app', tasks.jsapp({ path: paths.scripts.app, dest: dirs.dist, args: args}, browserSync));
gulp.task('js-angular', tasks.jsangular({ path: paths.scripts.angular, dest: dirs.dist, args: args }));
gulp.task('js-vendors', tasks.jsvendors({ path: paths.scripts.vendors, dest: dirs.dist, args: args }));

gulp.task('watch', function (callback) {
  browserSync.init({ server: { baseDir: 'dist', middleware: [ historyApiFallback() ] }, port: port }, callback);

  gulp.watch(paths.scripts.app, gulp.parallel('eslint', 'js-app'));
  gulp.watch(paths.templates, gulp.series('templates'));
  gulp.watch(paths.styles.app, gulp.series('sass'));
});

gulp.task('build', gulp.series(
  'clean',
  gulp.parallel('templates', 'assets', 'styles', 'sass', 'eslint', 'js-app', 'js-angular', 'js-vendors')
));

gulp.task('default', gulp.series(
  'clean',
  gulp.parallel('templates', 'assets', 'styles', 'sass', 'eslint', 'js-app', 'js-angular', 'js-vendors'),
  'watch'
));
