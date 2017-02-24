'use strict';

  var app = angular.module('loginApp');
  app.factory('TaskService', function() {

    var factory = {};
   

    factory.saveTask = function(task){

      var List =  JSON.parse(localStorage.getItem('List'));
      console.log(angular.copy(task));
      if(List == null){
        List = [];
      }

      task.id = Math.floor((Math.random() * 100000) + 1);
      List.push(task);
      console.log(angular.copy(List));
      localStorage.setItem('List', JSON.stringify(List));
      return List;
    }

    factory.taskDetails = function(){
      var List =  JSON.parse(localStorage.getItem('List'));
      console.log(angular.copy(List));
      return List;
    }
    
  
    factory.updateTask = function(task){
      var List =  JSON.parse(localStorage.getItem('List'));
      console.log(task);
      for(var i= 0; i< List.length; i++){
        if(List[i].id == task.id){
          List[i].is_complete = true;
        }
      }
      localStorage.setItem('List', JSON.stringify(List));
      return List;
    }

    factory.deleteTask = function(task){
      var List =  JSON.parse(localStorage.getItem('List'));
      console.log(angular.copy(List));
      var index = 0;
      for(var i= 0; i< List.length; i++){
        if(List[i].id == task.id){
          index = i;
        }
      }
      List.splice(index, 1);
      console.log(angular.copy(List));
      localStorage.setItem('List', JSON.stringify(List));
      return List;
    }

    return factory;
  });