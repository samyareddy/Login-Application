var app = angular.module('loginApp');

app.controller('listCtrl', function($scope, $stateParams, $state, TaskService) {


  $scope.go_new_task = function(){
    $state.go('task');
  }

  $scope.taskList = TaskService.taskDetails();

  $scope.updateTask = function(task){
    $scope.taskList = TaskService.updateTask(task);
  }

  $scope.deleteTask = function(task){
    $scope.taskList = TaskService.deleteTask(task);
  }    

  $scope.go_completed_list = function(){
    $state.go('completed'); 
  }

  $scope.go_todo_list = function(){
    $state.go('list'); 
  }

  });