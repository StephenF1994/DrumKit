

var gulp = require("gulp"),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import');






gulp.task('styles', function(){
return	gulp.src('./app/assets/css/styles.css')
.pipe(postcss([cssimport, nested, cssvars, autoprefixer]))
.pipe(gulp.dest('./app/temp/styles'));
})




