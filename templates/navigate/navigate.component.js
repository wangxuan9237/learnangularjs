angular.
    module('navigate').
    component('navigate',{
        templateUrl: 'templates/navigate/navigate.template.html',
        controller: ['$http','$rootScope','$scope',
            function navigateController($http,$rootScope,$scope){
                console.log("navigate");
                console.log($rootScope.login);
                var self = this;
                $scope.$on('user.login.success',function(handle,data){
                    self.user = "欢迎" + data.user;
                    self.login = true; 
                })

                this.logout = function(){
                    $http({
                        method:"POST",
                        url:"/account/logout"
                    }).then(function successCallback(response){
                        console.log(response.data);
                        if(response.data.logout == "0"){
                            self.user = "";
                            self.login = false;
                            console.log("logout success");
//                            $state.go('/blogs');
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
