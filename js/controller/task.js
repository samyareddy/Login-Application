var app = angular.module('loginApp');

app.controller('taskCtrl', function($scope, $stateParams, TaskService, $state) {
   
    $scope.savetTask = function(task) {
    	

     task.is_complete = false;
     TaskService.saveTask(task);

       $state.go('list');
     }
   });
