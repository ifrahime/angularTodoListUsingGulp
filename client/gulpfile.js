/*
  25/04/2015
*/

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('injector', function(){
  var target = gulp.src('app/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['bower_components/**/*.js', 'bower_components/**/*.css', 'app/styles/*.css']);
  target.pipe(plugins.inject(sources))
    .pipe(gulp.dest('app'));
});

gulp.task('jasmineTest', function() {
    var testFiles = ['test/spec/jasmine/*.js'];
    gulp.src(testFiles)
    .pipe(plugins.karma({
      configFile: 'test/karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});

gulp.task('lint', function(){
    gulp.src('app/scripts/**/*.js')
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'));
});

gulp.task('factoring', function(){
  gulp.src('app/scripts/**/*.js')
  .pipe(plugins.concat('allFiles.js'))
  .pipe(plugins.uglify())
  .pipe(gulp.dest('min'));
});

gulp.task('watch', function(){
  gulp.watch('app/scripts/**/*.js', ['lint']);
});

gulp.task('default', ['watch']);
