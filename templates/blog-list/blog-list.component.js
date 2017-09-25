'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('blogList').
  component('blogList', {
    templateUrl: 'templates/blog-list/blog-list.template.html',
    controller: ['Blog',
      function PhoneListController(Blog) {
        this.blogs= Blog.query();
      }
    ]
  });
