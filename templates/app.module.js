var blogApp = angular.module('blogApp',[
    'navigate',
    'account',
    'blogList',
    'blogDetail',
    'core',
    'ui.router'
]);

blogApp.run(function($rootScope){
    $rootScope.login = "1";
})

