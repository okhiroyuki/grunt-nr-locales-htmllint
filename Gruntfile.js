module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                'test/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        nr_htmllint: {
            default: {
                options: {
                    force: true,
                    "indent-width": false
                },
                src: ['test/fixtures/success.html']
            },
            unclose_tag: {
                options: {
                    force: true,
                    "indent-width": false
                },
                src: ['test/fixtures/unclose-tag.html']
            }

        },
        simplemocha: {
            options: {
                timeout: 60000
            },
            all: { src: ['test/*_spec.js'] }
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks("grunt-simple-mocha");

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'simplemocha:all']);
};
