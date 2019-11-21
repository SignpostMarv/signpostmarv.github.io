const gulp = require('gulp');
const postcss = require('gulp-postcss');
const postcss_nested = require('postcss-nested');
const postcss_calc = require('postcss-calc');
const postcss_custom_properties = require('postcss-custom-properties');
const cssnano = require('cssnano');
const changed = require('gulp-changed');
const htmlmin = require('gulp-htmlmin');
const newer = require('gulp-newer');

gulp.task('css', () => {
	return gulp.src(
		'./src/static/css/**/*.css'
	).pipe(postcss([
        postcss_custom_properties({
            preserve: false,
        }),
		postcss_nested(),
		postcss_calc(),
		cssnano({
			cssDeclarationSorter: 'concentric-css',
        }),
    ])).pipe(
		gulp.dest(
		'./tmp/static/css/'
		)
	);
});

gulp.task('html', () => {
	return gulp.src('./src/**/*.html').pipe(
		newer('./www-root-tmp')
	).pipe(
		htmlmin({
			collapseBooleanAttributes: true,
			collapseInlineTagWhitespace: false,
			collapseWhitespace: true,
			decodeEntities: true,
			sortAttributes: true,
			maxLineLength: 79,
		})
	).pipe(gulp.dest('./tmp/'));
});

gulp.task('sync-tmp-to-store', () => {
	return gulp.src('./tmp/**/*.*').pipe(
		changed(
			'./dist/',
			{
				hasChanged: changed.compareContents,
			}
		)
	).pipe(
		gulp.dest(
			'./dist/'
		)
	);
});

gulp.task('default', gulp.series(
    gulp.parallel(
        'css',
        'html'
    ),
    'sync-tmp-to-store'
));
