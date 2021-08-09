const { src, dest, task } = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const path = require('path');

task('default', function (done) {
	src('./src/*.less')
		.pipe(less())
		.pipe(autoprefixer())
		.pipe(cssmin())
		.pipe(dest('../../lib/theme-chalk'));
	done();
});
