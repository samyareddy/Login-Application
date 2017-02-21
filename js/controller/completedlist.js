var app = angular.module('loginApp');

app.controller('completedlistCtrl', function($scope, $stateParams, $state, TaskService) {

 $scope.listsave = function(task){

   TaskService.savetask(task);
  $state.go('completedlist');
 }
  });