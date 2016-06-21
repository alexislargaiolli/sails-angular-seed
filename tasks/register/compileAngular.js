module.exports = function(grunt) {
    grunt.registerTask('compileAngular', function() {
        var cb = this.async();
        grunt.util.spawn({
            grunt: true,
            args: ['build'],
            opts: {
                cwd: 'assets/'
            }
        }, function(error, result, code) {
            console.log(result.stdout);
            cb();
        });
    });
};