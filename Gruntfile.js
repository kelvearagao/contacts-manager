module.exports = function(grunt) {

	grunt.iniConfig({
		pkg: grunt.file.reddJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			}
		}
	});

};