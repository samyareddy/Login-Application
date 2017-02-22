var app = angular.module('loginApp');

app.factory('TaskService', function() {

   var factory = {};
   var List = [];

   factory.savetask = function(task){

    List =  JSON.parse(localStorage.getItem('List'));
    console.log(angular.copy(task));
    if(List == null){
     List = [];
    }

        List.push(task);
      console.log(angular.copy(List));
     localStorage.setItem('List', JSON.stringify(List));
   }
      factory.taskDetails = function(){
      var List =  JSON.parse(localStorage.getItem('List'));
      console.log(angular.copy(List));
       return List;
       }
    
     factory.getTask = function(index){
    var completedList =  JSON.parse(localStorage.getItem('completedList'));
    console.log(angular.copy(completedList));
     return completedList[index];
    }
      

    factory.updateTask = function(index){
     
   var completedList =  JSON.parse(localStorage.getItem('completedList'));
    console.log(angular.copy(completedList));
    completedList[index] = Task; 
   localStorage.setItem('completedList', JSON.stringify(completedList));

   
    }


      factory.deletetask = function(index){
      var List =  JSON.parse(localStorage.getItem('List'));
        console.log(angular.copy(List));
        List.splice(index, 1);
        console.log(angular.copy(List));
         localStorage.setItem('List', JSON.stringify(List));
        return List;
    }
       return factory;
     });