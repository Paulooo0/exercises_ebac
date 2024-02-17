const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const obfuscate = require("gulp-obfuscate");
const uglify = require("gulp-uglify");
const sourcemaps = require("gulp-sourcemaps");

function compressJS() {
  return gulp.src("./source/scripts/*.js")
  .pipe(uglify())
  .pipe(obfuscate())
  .pipe(gulp.dest("./build/scripts"))
}

function compileSass() {
  return gulp.src("./source/styles/main.scss")
  .pipe(sourcemaps.init())
  .pipe(sass({
    outputStyle: "compressed"
  }))
  .pipe(sourcemaps.write("./maps"))
  .pipe(gulp.dest("./build/styles"))
}

function compressImages() {
  return gulp.src("./source/images/*")
  .pipe(imagemin())
  .pipe(gulp.dest("./build/images"))
}

exports.default = function() {
  gulp.watch("./source/scripts/*.js", {ignoreInitial: false}, gulp.series(compressJS))
  gulp.watch("./source/styles/main.scss", {ignoreInitial: false}, gulp.series(compileSass))
  gulp.watch("./source/images/*", {ignoreInitial: false}, gulp.series(compressImages))
}