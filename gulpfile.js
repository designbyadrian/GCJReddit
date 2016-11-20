'use strict';

var autoprefixer = require('autoprefixer'),
    csswring     = require('csswring'),
    gulp         = require('gulp'),
    postcss      = require('gulp-postcss'),
    sass         = require('gulp-sass'),
    reporter     = require('postcss-reporter'),
    stylelint    = require('stylelint');

function decharset(css) {
  css.walkAtRules('charset', function(atRule) {
    atRule.remove();
  });
}

gulp.task('build', function () {
  var processors = [
    autoprefixer,
    csswring,
    decharset
  ];

  gulp.src('src/stylesheets/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest('dist'));
});

gulp.task('lint', function() {
  var processors = [
    stylelint,
    reporter({ clearMessages: true })
  ];

  gulp.src('src/stylesheets/**/*.scss')
   .pipe(postcss(processors, {syntax: require('postcss-scss')}));
});

gulp.task('watch', function () {
  gulp.watch('src/stylesheets/**/*.scss', ['lint', 'build']);
});

gulp.task('default', ['lint', 'build']);