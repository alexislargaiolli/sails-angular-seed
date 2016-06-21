/**
 * `watch`
 *
 * ---------------------------------------------------------------
 *
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * Watch for changes on:
 * - files in the `assets` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-watch
 *
 */
module.exports = function(grunt) {

  grunt.config.set('watch', {
    assets: {

      // Assets to watch:
      files: ['assets/app/**/*', 'assets/.tmp/**/*', 'tasks/pipeline.js', '!**/node_modules/**'],

      // When assets are changed:
      tasks: ['syncAssets']
    },
    livereload: {
        options: {
          livereload: 35728
        },
        files: [
          'assets/app/**/*.html',
          'assets/.tmp/styles/**/*.css',
          'assets/app/scripts/**/*.js',
          'assets/app/assets/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
  });
  grunt.event.on('watch', function(action, filepath, target) {
    console.log(target + ': ' + filepath + ' has ' + action);
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
};
