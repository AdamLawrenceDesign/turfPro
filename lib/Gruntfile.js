module.exports = function(grunt) {
	
    grunt.initConfig(
	{
		pkg: '<json:package.json>',
		
		concat: {
			js : {
				src : [
					// 'src/*'
					'src/js/preLoader.js',
					'src/js/menuLge.js',
					'src/js/list-builder.js',
					'src/js/event-manager.js',
					'src/js/content-builder.js',
					'src/js/project-init.js'
				],
				dest : 'prod/project.js'
			}
		},
		
		uglify: {
			js : {
				src : [
					'prod/project.js'
				],
				dest : 'prod/project.min.js'
			},
		},

		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: {
					'prod/screen.css':'src/sass/screen.scss'
				}
			}
		},

		watch: {
		  	// files: ['src/js/*','src/sass/*'],						// , 'src/css/*'		
		  	files: ['src/js/*'],						// , 'src/css/*'		
		  	tasks: ['concat:js', 'uglify:js']			// , 'concat:css', 'cssmin:css'
		 // files: ['src/js/*'],						// , 'src/css/*'		
		 // tasks: ['concat:js', 'uglify:js']			// , 'concat:css', 'cssmin:css'
		}	
		
    });
	
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch:files']);
	
};	