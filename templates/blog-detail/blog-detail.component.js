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

angular.
    module('blogDetail').
    component('blogAdd',{
        templateUrl: 'templates/blog-detail/blog-add.template.html',
        controller: ['$stateParams','Blog',
            function BlogAddController($stateParams,Blog){
                var self = this;
                //double data binding
                self.addBlog = function BlogAdd(title,body){
                    console.log(title);
                    console.log(body);
                    Blog.save({},{title:title,body:body},
                            function(){
                                $("#tip").modal();  
                                self.hint = "add success";
                            },
                            function(){
                                $("#tip").modal();  
                                self.hint = "add fail";
                            }
                        );
                }
            }
        ]
    })

angular.
    module('blogDetail').
    component('blogEdit',{
        templateUrl: 'templates/blog-detail/blog-edit.template.html',
        controller: ['$stateParams','Blog',
            function BlogEditController($stateParams,Blog){
                var self = this;
                self.blog = Blog.get({blogId:$stateParams.blogId});
                this.title = self.blog.title;
                this.body = self.blog.body;
                self.editBlog = function BlogEdit(title,body){
                    console.log(title);
                    console.log(body);
                    Blog.update({blogId:$stateParams.blogId},{title:title,body:body},
                            function(){
                                $("#tip").modal();  
                                self.hint = "edit success";
                            },
                            function(){
                                $("#tip").modal();  
                                self.hint = "edit fail";
                            });
                }
            }
        ]
    })
