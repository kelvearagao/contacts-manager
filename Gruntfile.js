module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: [
					'assets/js/jquery.min.js',
					'assets/js/bootstrap.min.js',
					'assets/js/angular.min.js',
					'assets/js/angular-animate.min.js',
					'assets/js/angular-strap.min.js',
					'assets/js/angular-strap.tpl.min.js',
					'assets/js/angular-route.min.js',
					'assets/js/angular-sanitize.min.js',
					'assets/js/controller.js'
				],
				dest: 'assets/js/build/<%= pkg.name %>.js'
			}
		},
		watch: {
			files: [
				'assets/js/*.js'
			],
			tasks: ['uglify']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['uglify']);
};