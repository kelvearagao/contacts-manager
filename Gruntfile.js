module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: [
					'app/vendor/jquery.min.js',
					'app/vendor/bootstrap.min.js',
					'app/vendor/angular.min.js',
					'app/vendor/angular-animate.min.js',
					'app/vendor/angular-strap.min.js',
					'app/vendor/angular-strap.tpl.min.js',
					'app/vendor/angular-route.min.js',
					'app/vendor/angular-sanitize.min.js',
					'app/module.js',
					'app/components/**/*.js',
					'app/views/**/*.js'
				],
				dest: 'assets/js/<%= pkg.name %>.js'
			}
		},
		watch: {
			files: [
				'app/vendor/*.js'
			],
			tasks: ['uglify']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['uglify']);
};