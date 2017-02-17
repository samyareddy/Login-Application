var app = angular.module('loginApp');

app.controller('registerCtrl', function($scope, $stateParams, $state) {
	$scope.save = function(){
    $state.go('login');
  }