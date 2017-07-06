module.exports = function(grunt) {

    // configure the tasks
    grunt.initConfig({
        copy: {
            clientBrowser: {
                cwd: 'source/clientBrowser',
                src: [ '**', '!**/*.scss' ],
                dest: 'build/clientBrowser',
                expand: true
            },
            server: {
                cwd: 'source/server',
                src: [ '**' ],
                dest: 'build/server',
                expand: true
            }
        },
        watch: {
            clientBrowser: {
                files: ['source/clientBrowser/**/*'],
                tasks: ['buildClientBrowser'],
                options: {
                    spawn: true
                }
            },
            server: {
                files: ['source/server/**/*'],
                tasks: ['buildServer'],
                options: {
                    spawn: true
                }
            }
        },
        sass: {// Task
            clientBrowser: {

                    options: {                       // Target options
                        style: 'expanded'
                    },
                    files: [{                         // Dictionary of files
                        'source/clientBrowser/style.css': 'source/clientBrowser/scss/main.scss'       // 'destination': 'source'
                    }]
            }
        },
        clean: {
            clientBrowser: {
                src: [ 'build/clientBrowser/*' ]
            },
            server: {
                src: [ 'build/server/*']
            }
        },
        cssmin: {
            build: {
                files: [{
                    'build/application.css': [ 'build/**/*.css' ]
                }]
            }
        },
        jshint: {
          options: {
            '-W104': true
          },
          clientBrowser: ['source/clientBrowser/scripts/*.js'],
          server: ['source/server/*.js']
        }
    });

    // load the tasks
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // define the tasks
    grunt.registerTask('buildServer',
    'Compiles server assets and copies the files to the build/server directory.',
    [ 'clean:server', 'copy:server' ]);

    grunt.registerTask('buildClientBrowser',
    'Compiles web client assets and copies the files to the build/clientBrowser directory.',
    [ 'sass:clientBrowser', 'clean:clientBrowser', 'copy:clientBrowser' ]);



    grunt.registerTask('lintServerJS','Lints server custom javascript for errors',['jshint:server']);
    grunt.registerTask('lintClientBrowserJS','Lints browser client custom javascript for errors',['jshint:clientBrowser']);
};
