var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var handlebars = require('gulp-handlebars');
var wrap = require ('gulp-wrap');
var gdeclare = require ('gulp-declare');
var concat = require ('gulp-concat');

gulp.task('less', function(){
	gulp.src('style.less')
	.pipe(less())
	.pipe(gulp.dest('public'));
});

gulp.task('browser-sync', function(){
	browserSync.init({
		port: 2727,
		proxy: 'localhost:4444'
	});
	
	gulp.watch('style.less', ['less']);	
	gulp.watch(['index.html', 'style.less']).on('change', browserSync.reload);
});

gulp.task('templates', function(){
	gulp.src('templates/*.hbs')
	.pipe(handlebars())
	.pipe(wrap('Handlebars.template(<%= contents %>)'))
	.pipe(gdeclare({
		namespace: 'hullaHop.templates',
		noRedeclare: true, 
	}))
	.pipe(concat('templates.js'))
	.pipe(gulp.dest('public'));
});
gulp.task('default', ['less','templates', 'browser-sync']);
