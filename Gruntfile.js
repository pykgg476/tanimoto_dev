module.exports = function(grunt){
'use strict';
var pkg, taskName;
pkg = grunt.file.readJSON('package.json');

grunt.initConfig({
    pkg: pkg,
    dir: {
            bin:'bin',
            release:'docs',
            js: 'common/js',
            css: 'common/css',
            img:'imageFile',
    },
    // 不要なファイルを削除する
    clean: {
        // releaseフォルダ内を削除する
        deleteReleaseFolder: {
            src: '<%= dir.release %>/'
        }
    },
    // ファイルをコピー
    copy: {
        dist: {
            files: [{
                expand: true, 
                cwd: '<%= dir.bin %>', 
                src: ['imageFile/**','common/js/**','common/font/fonts/**','common/css/**','**.html','rookie_diary/**'],
                dest: '<%= dir.release %>',
                dot: false
            }]
        }
    },
    // JSの圧縮
    uglify: {
        min: {
            expand: true,
            cwd: '<%= dir.release %>/<%= dir.js %>/',
            src: ['*.js'],
            dest: '<%= dir.release %>/<%= dir.js %>/'
        }
    },
    // 画像の圧縮
    image: {
    dynamic: {
    files: [{
    expand: true,
    cwd: '<%= dir.release %>/<%= dir.img %>/',
    src: ['**/*.{png,jpg,gif}'],
    dest: '<%= dir.release %>/<%= dir.img %>/'
    }]
    }
    }
});

// pakage.jsonに記載されているパッケージを自動読み込み
for(taskName in pkg.devDependencies) {
    if(taskName.substring(0, 6) == 'grunt-') {
        grunt.loadNpmTasks(taskName);
    }
}

grunt.registerTask("default", ['clean','copy','uglify']);
grunt.registerTask("build", ['clean','copy','uglify','image']);

};