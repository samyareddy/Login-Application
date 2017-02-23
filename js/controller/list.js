var app = angular.module('loginApp');

app.controller('listCtrl', function($scope, $stateParams, $state, TaskService) {

 $scope.newtask = function(){
   $state.go('task');
 }
$scope.taskList= TaskService.taskDetails();

 
 $scope.updatetask = function(index){


 TaskService.updatetask(index);
            
$scope.taskList = TaskService.taskDetails();

        }

  


  $scope.deletetask = function(index){
  console.log("task")
  TaskService.deletetask(index);
  $scope.taskList = TaskService.taskDetails();
          };    


 $scope.Completedlist = function(){
 
  $state.go('completed'); 
        }


 $scope.todolist = function(){
 
  $state.go('list'); 
        }

  } );