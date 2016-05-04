

var mozjpeg = require('imagemin-mozjpeg');

module.exports = function(grunt) {
 
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

  imagemin: {                          
    dynamic: {       
      options: {    
        optimizationLevel: 1,
      },                    
      files: [
      {
        expand: true,                   
        cwd: 'src/views/images/',        
        src: ['**/*.{png,jpg,gif}'],   
        dest: 'dist/views/images/'             
      },
      {
        expand: true,                  
        cwd: 'src/img/',                   
        src: ['**/*.{png,jpg,gif}'],   
        dest: 'dist/img/'              

      }]
    }
  },

  uglify: {
    options: {
      mangle: false
    },
    my_target: {
      files:[
      {
      src: 'src/js/perfmatters.js',
      dest: 'dist/js/perfmatters.js'
      },
      {
      src: 'src/views/js/main.js',
      dest: 'dist/views/js/main.js'        
      }
      ]
    }
  },

  cssmin: {
    my_target: {
      files: [
      {
        expand: true,
        cwd: 'src/css',
        src: '*.css',
        dest: 'dist/css',
        ext: '.css'
      },
      {
        expand: true,
        cwd: 'src/views/css',
        src: '*.css',
        dest: 'dist/views/css',
        ext: '.css'        
      }
      ]
    }
  },

  compress: {
    main: {
      options: {
        mode: 'gzip'
      },
      files: [
        {
          expand: true,
          cwd: 'dist/css/',  
          src: ['*.css', '!*.gz.css'], 
          dest:'dist/css/',
          ext: '.gz.css'
        },
        {
          expand: true, 
          cwd: 'dist/js/',
          src: ['*.js', '!*.gz.js'], 
          dest: 'dist/js/',
          ext: '.gz.js'
        },
        {
          expand: true, 
          cwd: 'dist/',
          src: ['*.html', '!*.gz.html'], 
          dest: 'dist/',
          ext: '.gz.html'
        }
      ]
    }
  },
  htmlmin: {                                   
    dist: {                                     
      options: {                                 
        removeComments: true,
        collapseWhitespace: true
      },
      files: [
      { 
        expand: true,
        cwd: 'src/',  
        src: ['*.html'], 
        dest: 'dist/',
        ext: '.html'                                  
      },
      { 
        expand: true,
        cwd: 'src/views',  
        src: ['*.html'], 
        dest: 'dist/views',
        ext: '.html'                                  
      }
      ]
    }
  }



  });
 
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-compress');
grunt.loadNpmTasks('grunt-contrib-htmlmin');
grunt.registerTask('default', ['imagemin', 'uglify', 'cssmin','compress', 'htmlmin']);
}