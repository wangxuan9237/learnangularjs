angular.module('blogApp').
        config(function($stateProvider,$urlRouterProvider){
        
        var blogList = {
            name: 'bloglist',
            url: '/blogs',
            component: 'blogList'
        }

        var blogDetail = {
            name: 'blogdetail',
            url: '/blogs/{blogId}',
            component: 'blogDetail'
        }

        var blogMgm = {
            name: 'blogmgm',
            url: '/blogs/mgm',
            component: 'blogMgm'
        }

        var blogDelete = {
            name: 'blogmgm.blogdelete',
            url: '/{blogId}',
            component: 'blogDelete'
        }

        var blogAdd = {
            name: 'blogadd',
            url: '/blogs/add',
            component: 'blogAdd'
        }

        $urlRouterProvider.otherwise('/blogs');
        $stateProvider.state(blogList);
        $stateProvider.state(blogDetail);
        $stateProvider.state(blogMgm);
        $stateProvider.state(blogDelete);
        $stateProvider.state(blogAdd);
});
