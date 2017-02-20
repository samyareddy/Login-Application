var app = angular.module('loginApp');

app.controller('listCtrl', function($scope, $stateParams, $state, TaskService) {

 $scope.newtask = function(){
   $state.go('task');
 }
  
    

 $scope.taskList= TaskService.taskDetails();




  
     
      
     } );