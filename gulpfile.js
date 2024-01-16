const gulp = require("gulp");
const babel = require("gulp-babel");
const terser = require("gulp-terser");

// Define the 'compress' task
gulp.task("compress", function () {
  return gulp
    .src("src/**/*.js") // Use the glob pattern to match all nested folders and JS files
    .pipe(
      babel({
        presets: [],
        plugins: [
          [
            "@babel/plugin-transform-modules-commonjs",
            {
              strictMode: false,
              allowTopLevelThis: true,
              loose: true,
            },
          ],
          "@babel/plugin-transform-arrow-functions",
          // Add other plugins as needed
        ],
      })
    )
    .pipe(terser()) // Minify the code with gulp-terser
    .pipe(gulp.dest("lib")); // Specify the destination directory
});

// Define a default task that will run when you type 'gulp' in the terminal
gulp.task("default", gulp.series("compress"));
