module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
	sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'scss/style.scss'
        }
      }
    },
	
	imagemin: {
		dynamic: {
			files: [{
				expand: true,
				cwd: 'images/',
				src: ['**/*.{png,jpg,gif}'],
				dest: 'images/build/'
			}]
		}
	},

	browserSync: {
		bsFiles: {
			src : [
        'css/*.css',
        './*.html'
      ]
		},
		options: {
			server: {
				baseDir: "./"
			}
		}
	},
	
	watch: {
		scripts: {
			files: ['scss/*.scss'],
			tasks: ['sass'],
			options: {
				spawn: false,
			},
		}
	}
  });
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'imagemin', 'watch']);
};