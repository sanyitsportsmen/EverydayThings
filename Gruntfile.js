module.exports = function(grunt) {
    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
        less: {
            style: {
                files: {
                    'build/css/style.css' : ['source/less/style.less']
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ["last 2 version", "ie 9"]
            },
            style: {
                src: "build/css/style.css"
            }
        },
        cssmin: {
            target: {
                files: {
                    'build/css/style.min.css': ['build/css/style.css']
                }
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'source/img/', src: ['**'], dest: 'build/img/'},
                ],
            },
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'index.html': 'index_src.html'
                }
            }
        },
        watch: {
            options: {
                livereload: true,
                spawn:false
            },
            style: {
                files: ['source/less/**/*.less'],
                tasks: ['less', 'autoprefixer', 'cssmin']
            },
            html: {
                files: ['*.html']
            }
        }
    });
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build:production', ['less', 'autoprefixer', 'cssmin', 'copy', 'htmlmin']);
}
