angular.
    module('account').
    component('accountLogin',{
        templateUrl: 'templates/newaccount/account.template.html',
        controller: ['$http','$state','$scope','$rootScope',
            function LoginController($http,$state,$scope,$rootScope) {
                var self = this;
                this.login = function(username,password){
                    $http({
                        method:"POST",
                        url:"/account/login",
                        data:{"username":username,"password":password}
                    }).then(function successCallback(response){
                        if(response.data.login == "0"){
                            $rootScope.login = "0";
                            $rootScope.$broadcast('user.login.success',{
                                "user":username
                            });
                            console.log($rootScope.login);
                            console.log("login success");
                            $state.go('/blogs/mgm');
                        }else{
                            console.log("login fail");
                        }
                        self.hint = "post success";
                    },function errorCallback(response){
                        self.hint = "post fail";
                    });
                }

                this.go = function(){
                    console.log("gostart");
                    $state.go("blogMgm");
                    console.log("goend");
                }

                this.logout = function(){
                    $http({
                        method:"POST",
                        url:"/account/logout"
                    }).then(function successCallback(response){
                        console.log(response.data);
                        if(response.data.logout == "0"){
                            console.log("logout success");
                            $state.go('/blogs');
                         }else{
                            console.log("logout fail");
                         }
                    },function errorCallback(response){
                        console.log("post fail") 
                    }) 
                }
            }
        ]
    })
