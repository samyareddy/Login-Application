
var app = angular.module('loginApp');

app.controller('loginCtrl', function($scope, $stateParams, $state) {
  $scope.name = 'Hello';
  
  $scope.myuser={username:'',password:''};
  
  $scope.register = function(){
    $state.go('register');
  }
  $scope.submit=function()
  {
  
      $state.go('list');
     }
 });