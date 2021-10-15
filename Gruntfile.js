/*
 * Copyright (c) 2021, Castcle and/or its affiliates. All rights reserved.
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * This code is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 3 only, as
 * published by the Free Software Foundation.
 *
 * This code is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License
 * version 3 for more details (a copy is included in the LICENSE file that
 * accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version
 * 3 along with this work; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * Please contact Castcle, 22 Phet Kasem 47/2 Alley, Bang Khae, Bangkok,
 * Thailand 10160, or visit www.castcle.com if you need additional information
 * or have any questions.
 */

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['dist', 'build'],
    watch: {
      html: {
        // Watch html & js files in `src` folder.
        files: ['src/**/*.html', 'src/**/*.js'],
        tasks: ['copy'],
        options: {
          spawn: false,
        },
      },
    },
    copy: {
      main: {
        files: [
          // Includes html & js files within path and its sub-directories.
          {
            expand: true,
            cwd: 'src',
            src: ['**/*.html', '**/*.js', '**/*.pdf'],
            dest: 'build/'
          },
        ]
      }
    },
    htmlmin: {
      dist: { // Target
        options: { // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
          expand: true,
          cwd: 'src',
          src: ['**/*.html'],
          dest: 'dist/'
        }]
      }
    },
    uglify: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/js',
          src: '**/*.js',
          dest: 'dist/js'
        }]
      }
    }
  });

  // Load the plugin that provides the "watch" and "copy" task.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  // Copy src files to dist for the first time, then, still watching for file changes.
  grunt.registerTask('serv', ['copy', 'watch']);
  grunt.registerTask('dist', ['htmlmin', 'uglify']);
  grunt.registerTask('default', ['serv']);

};
