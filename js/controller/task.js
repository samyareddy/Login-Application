var app = angular.module('loginApp');

app.controller('taskCtrl', function($scope, $stateParams, TaskService, $state) {
   
    $scope.savetask = function(task) {
    
     TaskService.savetask(task);

       $state.go('list');
     }
   

   












  

 });
