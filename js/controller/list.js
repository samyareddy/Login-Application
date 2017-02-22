var app = angular.module('loginApp');

app.controller('listCtrl', function($scope, $stateParams, $state, TaskService) {

 $scope.newtask = function(){
   $state.go('task');
 }


 $scope.taskList= TaskService.taskDetails();

  
 
$scope.updatetask = function(req){

     console.log("cl")
   
    $state.go('completed'); 
       

         }






   $scope.deletetask = function(index){
        console.log("task")
             TaskService.deletetask(index);
             $scope.taskList = TaskService.taskDetails();
          };    

  } );