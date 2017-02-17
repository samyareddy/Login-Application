
var app = angular.module('loginApp');

app.controller('loginCtrl', function($scope, $stateParams, $state) {
  $scope.name = 'Hello';
  
  $scope.myuser={username:'',password:''};
  
  $scope.register = function(){
    $state.go('register');
  }
  $scope.submit=function()
  {
     if($scope.username && $scope.password)
     {
    var user=$scope.username;
    var pass=$scope.password;
    
   
    $scope.myuser.push({username:user,password:pass});
     }else{
       alert("Invalid Login");
     }
  }
});