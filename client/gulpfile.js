

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');

gulp.task('browser', function(){
  var files = [
      'app/views/*.html',
      'app/styles/*.css',
      'app/scripts/**/*.js'
   ];

   browserSync.init(files, {
      server: {
         baseDir: './app'
      }
   });
});

gulp.task('connectDev', function () {
  $.connect.server({
    root: './app',
    port: 9000,
    livereload: true,
    
  });
});

gulp.task('injector', function(){
  var target = gulp.src('app/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['bower_components/**/*.js', 'bower_components/**/*.css', 'app/styles/*.css']);
  target.pipe($.inject(sources))
    .pipe(gulp.dest('app'));
});

gulp.task('jasmineTest', function() {
    var testFiles = ['test/spec/jasmine/*.js'];
    gulp.src(testFiles)
    .pipe($.karma({
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
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'));
});

gulp.task('factoring', function(){
  gulp.src('app/scripts/**/*.js')
  .pipe($.concat('allFiles.js'))
  .pipe($.uglify())
  .pipe(gulp.dest('min'));
});


gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe($.connect.reload());
});

gulp.task('scripts', function(){
  gulp.watch('app/scripts/**/*.js', ['lint']);
});

gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
});


gulp.task('default', ['connectDev', 'watch']);
