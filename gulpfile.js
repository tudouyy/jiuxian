var gulp = require("gulp");
var sass = require("gulp-sass");


gulp.task("copy-html",function(){
	gulp.src("*.html")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\jiuxian"));
});
gulp.task("sassfile",function(){
	gulp.src("sass/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("D:\\jiuxian\\css"))
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\jiuxian\\css"));
});
gulp.task("copy-jpg",function(){
	gulp.src("img/**/*")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\jiuxian\\img"));
});
gulp.task("copy-js",function(){
	gulp.src("js/**/*")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\jiuxian\\js")); 
});
gulp.task("copy-php",function(){
	gulp.src("php/**/*")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\jiuxian\\php"));
});
gulp.task("watchall",function(){
	gulp.watch("*.html",["copy-html"]);
	gulp.watch("sass/*.scss",["sassfile"]);
	gulp.watch("img/**/*",["copy-jpg"]);
	gulp.watch("js/**/*",["copy-js"]);
	gulp.watch("php/**/*",["copy-php"]);
});