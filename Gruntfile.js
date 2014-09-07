'use strict';

module.exports = function(grunt) {

    // Load all grunt tasks
    require('load-grunt-tasks')(grunt);

    var appConfig = {

        // Dirs
        dirs: {
            js: 'assets/js'
        },

        // Watch Task
        watch: {
            js: {
                files: '<%= jshint.all %>',
                tasks: ['jshint', 'uglify']
            }
        },

        // Linting
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= dirs.js %>/main.js'
            ]
        },

        // Minify
        uglify: {
            options: {
                mangle: false
            },
            dist: {
                files: {
                    '<%= dirs.js %>/app.min.js': [ '<%= dirs.js %>/main.js' ]
                }
            }
        }

    };

    // Init Config
    grunt.initConfig(appConfig);


    // Register tasks
    // --------------------------
    grunt.registerTask( 'default', [ 'jshint', 'uglify', 'watch' ]);
    grunt.registerTask( 'build', [ 'jshint', 'uglify' ]);

};
