module.exports = function(grunt) {
	
    grunt.initConfig(
	{
		pkg: '<json:package.json>',
		
		concat: {
			js : {
				src : [
					// 'src/*'
					'src/slimScroll.js',
					'src/fabric.js',
					'src/masonry.pkgd.min.js',
					'src/facebook-info.js',
					'src/preLoader.js',
					'src/list-builder.js',
					'src/scroll-manager.js',
					'src/canvas-setup.js',
					'src/overlay-builder.js',
					'src/layout-manager.js',
					'src/palette.js',
					'src/product.js',
					'src/controllers-standard.js',
					'src/init-canvas.js'
				],
				dest : 'lib/create.js'
			}
		},
		
		uglify: {
			js : {
				src : [
					'lib/create.js'
				],
				dest : 'lib/create.min.js'
			},
		},

		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: {
					'../css/screen.css':'../sass/screen.scss'
					// 'testScreen.css':'testScreen.scss'
				}
			}
		},

		watch: {
		  files: ['src/*','../sass/*'],						// , 'src/css/*'		
		  tasks: ['concat:js', 'uglify:js','sass']			// , 'concat:css', 'cssmin:css'
		}	
			
    });
	
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass')
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch:files']);
	
};	