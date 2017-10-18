'use strict';

angular.
    module('blogDetail').
    component('blogDetail',{
        templateUrl: 'templates/blog-detail/blog-detail.template.html', 
        controller: ['$stateParams','Blog',
            function BlogDetailController($stateParams,Blog){
                var self = this;
                self.blog = Blog.get({blogId:$stateParams.blogId});
            }
        ]
    })

angular.
    module('blogDetail').
    component('blogMgm',{
        templateUrl: 'templates/blog-detail/blog-mgm.template.html',
        controller: ['Blog',
            function BlogMgmController(Blog) {
                this.blogs = Blog.query() ;
            }
        ]
    })
