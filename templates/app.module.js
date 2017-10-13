var blogApp = angular.module('blogApp',[
    'blogList',
    'blogDetail',
    'core',
    'ui.router'
]);

blogApp.config(function($stateProvider,$urlRouterProvider){
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

    $urlRouterProvider.otherwise('/blogs');
    $stateProvider.state(blogList);
    $stateProvider.state(blogDetail);

});
