'use strict';
 
module.exports = function(grunt) {
    var pkg, taskName;
    pkg = grunt.file.readJSON('package.json');
 
    grunt.initConfig({
        pkg: pkg,
        dir: {
            src:'src',
            bin:'bin',
            release:'release',
            js: 'js'
            img:'images'
        },
        // ファイルをコピーする
        copy: {
            html: {
                expand: true,
                // コピー元のディレクトリ
                cwd: '<%= dir.bin %>/',
                src: ['**/*.html'],
                // コピー先のディレクトリ
                dest: '<%= dir.release %>/'
            },
            css: {
                expand: true,
                cwd: '<%= dir.bin %>/',
                src: ['css/**'],
                dest: '<%= dir.release %>/'
            },
            images: {
                expand: true,
                cwd: '<%= dir.bin %>/',
                src: ['images/**'],
                dest: '<%= dir.release %>/'
            },
            js: {
                expand: true,
                cwd: '<%= dir.bin %>/',
                src: ['js/**'],
                dest: '<%= dir.release %>/'
            }
        },
        // HTMLを圧縮する
        htmlmin: {
            all: {
                options: {
                    removeComments: true,
                    removeCommentsFromCDATA: true,
                    removeCDATASectionsFromCDATA: true,
                    collapseWhitespace: true,
                    removeRedundantAttributes: true,
                    removeOptionalTags: true
                },
                expand: true,
                cwd: '<%= dir.bin %>/',
                src: ['**/*.html'],
                dest: '<%= dir.release %>/'
            }
        },
        // JSを圧縮する
        uglify: {
            min: {
                expand: true,
                cwd: '<%= dir.release %>/<%= dir.js %>/',
                src: ['sample.js'],
                dest: '<%= dir.release %>/<%= dir.js %>/'
            }
        },
        // 画像を圧縮する
        imageoptim: {
            files: ['bin/'],
            options: {
                jpegMini: true,
                quitAfter: true
            }
        }
    });
 
    // pakage.jsonに記載されているパッケージを自動読み込み
    for(taskName in pkg.devDependencies) {
        if(taskName.substring(0, 6) == 'grunt-') {
            grunt.loadNpmTasks(taskName);
        }
    }
 
    // 画像を圧縮するためのgruntコマンド
    grunt.registerTask('imgmin', ['imageoptim']);
 
    // 納品用のファイルを作るためのgruntコマンド
    grunt.registerTask('release', ['clean:deleteReleaseFolder', 'copy:images', 'copy:js', 'htmlmin', 'cssmin', 'uglify', 'clean:deleteReleaseFile']);
 
    grunt.registerTask('eatwarnings', function() {
        grunt.warn = grunt.fail.warn = function(warning) {
            grunt.log.error(warning);
        };
    });
};