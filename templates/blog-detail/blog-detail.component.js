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

angular.
    module('blogDetail').
    component('blogDelete',{
        templateUrl: 'templates/blog-detail/blog-delete.template.html',
        controller: ['$stateParams','Blog',
            function BlogDeleteController($stateParams,Blog){
                var self = this;
                Blog.delete({blogId:$stateParams.blogId},
                    function(){
                        self.hint = "delelte success";
                },
                    function(){
                        self.hint = "delete fail";
                    } 
                );
            }
        ]
    })
