module.exports = function(grunt) {
  
  grunt.initConfig({
    lint: {
      files: ['public/js/app.js', 'grunt.js']
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        // undef: true
        boss: true,
        eqnull: true
      }
    },
    stylus: {
      compile : {
        files : {
          'public/css/layout.css' : 'public/styles/*.styl'
        }
      }
    },
    cssmin : {
      dist : {
        src: [
          'public/css/font-awesome.css',
          'public/css/engineering.css',
          'public/css/prettify.css'
        ],
        dest: 'public/css/site.css'
      }
    },
    concat: {
      dist: {
        src: [
          'public/js/prettify.js',
          'public/js/ga.js',
          'public/js/app.js'
        ],
        dest: 'public/js/site.js'
      }
    },
    min : {
      dist : {
        src : 'public/js/site.js',
        dest : 'public/js/site.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-css');

  grunt.registerTask('default', 'lint stylus cssmin concat min');

};
