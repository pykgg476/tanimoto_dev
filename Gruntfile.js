// 開発メモ
// 作業する時はbinをルートフォルダにして開くとプレビューが正しくできる。

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
                    src: ['imageFile/**','common/js/**','common/font/fonts/**','common/css/**','**/*.html','rookie_diary/**','projects/**'],
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
        },
        // パスの置換
        replace: {
            html: {
                options: {
                    patterns: [
                        {
                            match: /href="\/(.*?)"/g,
                            replacement: 'href="/tanimoto_dev/$1"'
                        },
                        {
                            match: /src="\/(.*?)"/g,
                            replacement: 'src="/tanimoto_dev/$1"'
                        }
                    ]
                },
                files: [
                    {expand: true, cwd: '<%= dir.bin %>', src: ['**/*.html'], dest: '<%= dir.release %>'}
                ]
            },
            css: {
                options: {
                    patterns: [
                        {
                            match: /url\("\/(.*?)"\)/g,
                            replacement: 'url("/tanimoto_dev/$1")'
                        }
                    ]
                },
                files: [
                    {expand: true, cwd: '<%= dir.bin %>/common/css', src: ['**/*.css'], dest: '<%= dir.release %>/common/css'}
                ]
            }
        }
    });
    
    // pakage.jsonに記載されているパッケージを自動読み込み
    for(taskName in pkg.devDependencies) {
        if(taskName.substring(0, 6) == 'grunt-') {
            grunt.loadNpmTasks(taskName);
        }
    }
    
    //画像圧縮を伴わないビルド
    grunt.registerTask("default", ['clean','copy','replace','uglify']);
    //開発サーバーのためのビルド
    grunt.registerTask("dev", ['clean','copy','replace','uglify','image']);
    //本番サーバーのためのビルド
    grunt.registerTask("deploy", ['clean','copy','uglify','image']);
    
    };
    