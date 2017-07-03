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
        sass: {// Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: [{                         // Dictionary of files
                    'build/main.css': 'src/main.scss',       // 'destination': 'source'
                    'widgets.css': 'widgets.scss'
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
            all: ["source/**/*.js"]
        }
    });

    // load the tasks
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // define the tasks
    grunt.registerTask('buildServer',
    'Compiles server assets and copies the files to the build/server directory.',
    [ 'clean:server', 'copy:server' ]);

    grunt.registerTask('buildClientBrowser',
    'Compiles web client assets and copies the files to the build/clientBrowser directory.',
    [ 'clean:clientBrowser', 'copy:clientBrowser' ]);



    grunt.registerTask('lintjs','Lints javascript for errors',['jshint']);
};
