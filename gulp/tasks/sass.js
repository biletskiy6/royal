module.exports = function(){
	$.gulp.task('sass:build', function(){
		return $.gulp.src('src/static/sass/main.sass')
		.pipe($.gp.sass())
		.pipe($.gp.autoprefixer({
			browsers: ['last 15 versions'],
		}))
		.pipe($.gp.csso())
		.pipe($.gulp.dest('build/static/css/'))
	});
	$.gulp.task('sass:dev', function(){
		return $.gulp.src('src/static/sass/main.sass')
		.pipe($.gp.sourcemaps.init())
		.pipe($.gp.sass())
		.on('error', $.gp.notify.onError({
			title: 'Style'
		}))
		.pipe($.gp.sourcemaps.write())
		.pipe($.gp.autoprefixer({
			browsers: ['last 15 versions'],
		}))
		.pipe($.gulp.dest('build/static/css/'))
		.pipe($.bs.reload({
			stream:true
		}));
	});
}