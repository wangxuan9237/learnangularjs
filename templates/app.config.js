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

        $urlRouterProvider.otherwise('/blogs');
        $stateProvider.state(blogList);
        $stateProvider.state(blogDetail);
        $stateProvider.state(blogMgm);
});
