var gulp = require("gulp");
var autoprefixer = require("gulp-autoprefixer");
var sourcemaps = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var pug = require("gulp-pug");
var babel = require("gulp-babel");
var browserSync = require("browser-sync").create();

sass.compiler = require("node-sass");

gulp.task("css", function () {
  return gulp
    .src("./scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        grid: true,
      })
    )
    .pipe(
      sourcemaps.write("./", {
        includeContent: false,
        sourceRoot: "../../scss",
      })
    )
    .pipe(gulp.dest("./build/css"))
    .pipe(browserSync.stream());
});

gulp.task("js", function (done) {
  return gulp
    .src(["./js/**/*.js", "!js/vendors/**/*.js"])
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(gulp.dest("./build/js"))
    .pipe(browserSync.stream());
});

gulp.task("html", function (done) {
  return gulp
    .src("./pug/*.pug")
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(gulp.dest("./build/"))
    .pipe(browserSync.stream());
});

// maybe need to 壓縮
gulp.task("assets", function (done) {
  return gulp
    .src("./assets/*")
    .pipe(gulp.dest("./build/assets/"))
    .pipe(browserSync.stream());
});

gulp.task("vendors", function (done) {
  return gulp
    .src("./js/vendors/**/*")
    .pipe(gulp.dest("./build/js/vendors/"))
    .pipe(browserSync.stream());
});

gulp.task("watch", function () {
  browserSync.init({
    server: {
      baseDir: "./build",
    },
  });

  gulp.watch("./js/**/*.js", gulp.series("js", "vendors"));
  gulp.watch("./scss/**/*.scss", gulp.series("css"));
  gulp.watch("./pug/**/*.pug", gulp.series("html"));
  gulp.watch("./assets/*", gulp.series("assets"));
  gulp
    .watch(["./js/**/*.js", "./scss/**/*.scss", "./pug/**/*.pug", "./assets/*"])
    .on("change", browserSync.reload);
});

//gulp.series 用於順序執行
//gulp.parallel 用於並行執行
gulp.task(
  "default",
  gulp.series("css", "js", "html", "assets", "vendors", "watch")
);
