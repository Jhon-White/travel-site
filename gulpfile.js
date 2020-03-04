var gulp = require("gulp");
var watch = require("gulp-watch");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssvars = require("postcss-simple-vars");
var nested = require("postcss-nested");
var cssImport = require("postcss-import");
var browserSync = require("browser-sync").create();
var mixins = require("postcss-mixins");

gulp.task("default", function() {
  console.log("Hooray - you creates a Gulp task.");
});

gulp.task("html", function() {
  console.log("html task");
});

gulp.task("new", function() {
  console.log("new task");
});

gulp.task("styles", function() {
  return gulp
    .src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest("./app/temp/styles"));
});

gulp.task("watch", function() {
  browserSync.init({
    server: {
      baseDir: "app"
    }
  });

  gulp.watch("./app/index.html", function() {
    browserSync.reload();
  });

  gulp.watch("./app/assets/styles/**/*.css", gulp.series("styles"));
});

// gulp.watch("./app/index.html", gulp.series("default"));
