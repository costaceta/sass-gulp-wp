
var gulp = require('gulp');
var sass = require('gulp-sass');

/**
 * Task to compile SASS files
 */
gulp.task('sass', function () {
	
	gulp.src('./sass/*.scss')

	.pipe(sass())

	.pipe(gulp.dest('./css'))

});

/**
 * Task to Watch all tasks
 */
gulp.task('watch', function() {
 
  gulp.watch('./sass/*.scss', ['sass']);
 
});

gulp.task('default', ['sass', 'watch']);