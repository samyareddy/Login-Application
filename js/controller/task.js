var app = angular.module('loginApp');

app.controller('taskCtrl', function($scope, $stateParams, TaskService, $state) {
   
    $scope.savetask = function(task){
	
     TaskService.savetask(task);
  
    
       $state.go('list');
     }
    
    // $scope.List = TaskService.taskDetails();
    
    //    if($stateParams && $stateParams.id){
    //        $scope.task= TaskService.getTask($stateParams.id);
    //         $scope.task.date = new Date( $scope.task.date)
    //    }










});
