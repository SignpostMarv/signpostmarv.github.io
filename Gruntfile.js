/*global module:false*/
module.exports = function(grunt) {
module.require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        globals: {
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      design: {
        options: {
          browser: true,
          globals: {
            FontFaceObserver: true,
            Prism: true,
          },
        },
        src: [
          'design/js/*.js',
          '!design/js/*.min.js',
        ],
      },
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      design: {
        files: [
          'design/css/*.css',
          '!design/css/style.build.css',
          '!design/css/style.min.css',
          'design/css/*/*.css',
          '<%= jshint.design.src %>',
        ],
        tasks: [
          'jshint:design',
          'uglify:loaders',
          'concat:loaders',
          'css:design',
        ],
      },
    },
    postcss: {
      options: {
        map: true,
        processors: [
          module.require('postcss-import')({
          }),
          module.require('postcss-mixins')({
          }),
          module.require('postcss-nested')({
          }),
          module.require('cssnext')({
            features: {
              rem: {
                rootvalue: '14px',
              },
            },
          }),
          module.require('postcss-color-rgba-fallback')({
          }),
          module.require('cssnano')({
          }),
        ],
      },
      design: {
        files: [{
          'design/css/style.min.css': 'design/css/style.css',
        }]
      }
    },
    cssmin: {
      design: {
        files: [{
          'css/style.min.css': 'design/css/style.min.css',
        }],
      },
    },
    modernizr: {
      design: {
        devFile: 'bower_components/modernizr/modernizr.js',
        outputFile: 'libs/modernizr/modernizr.js',
        extra: {
          shiv: true,
          load: false,
        },
        tests: [
          'flexbox',
          'boxshadow',
        ],
      },
    },
    copy: {
      design: {
        files: [
          {
            flatten: true,
            src: 'bower_components/fontfaceobserver/fontfaceobserver.js',
            dest: 'libs/fontfaceobserver/fontfaceobserver.js',
          },
        ],
      },
    },
    uglify: {
      loaders: {
        options: {
          mangle: {
            except: [
              'Prism',
            ],
          },
          screwIE8: true,
        },
        files: {
          'design/js/prism.min.js': 'design/js/prism.js',
          'design/js/fontfaceobserver.min.js': 'design/js/fontfaceobserver.js',
          'design/js/disqus.min.js': 'design/js/disqus.js',
        },
      },
    },
    concat: {
      designPrismLangs: {
        src: [
          'bower_components/prism/components/prism-core.min.js',
    			'bower_components/prism/components/prism-clike.min.js',
    			'bower_components/prism/components/prism-javascript.min.js',
          'bower_components/prism/components/prism-bash.min.js',
          'bower_components/prism/components/prism-ini.min.js',
          'bower_components/prism/components/prism-sql.min.js',
        ],
        dest: 'libs/prism/prism.js',
      },
      loaders: {
        src: [
          'design/js/*.min.js',
        ],
        dest: 'js/loaders.js',
      },
    },
  });

  // Default task.
  grunt.registerTask('default', [
    'jshint',
    'postcss',
    'cssmin',
    'modernizr',
    'copy',
    'css:design',
    'uglify:loaders',
    'concat:designPrismLangs',
    'concat:loaders',
  ]);

  grunt.registerTask('css:design', [
    'postcss:design',
    'cssmin:design'
  ]);
};
