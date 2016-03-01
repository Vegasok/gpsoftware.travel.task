function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

(function() {
  'use strict';

  angular
    .module('myChat')
    .controller('ChatController', ChatController);


  function ChatController(chatService, $scope, $http){

    chatService.getMessages().then(function(response){
        $scope.users = response.data;
        $('#loader').hide();
        $('#userList').show();      
    });      

    $scope.doPost = function(textMessage, userName) {      
      console.log(textMessage);
      chatService.sendMessage(textMessage, Date.now(), userName);      
    }    
    
  /*$scope.doPost = function() {
  
    $http.get('login.mock.json').success(function(response) {
      
      var newUser = response.data[0];
      newUser.msg = $('#inputText').val();
      newUser.timestamp = new Date();
      $scope.users.push(newUser);
   
    }).error(function(data, status) {
      
      alert('get data error!');
      
    });
    
  }*/

	$scope.time = Date.now();

    $scope.randomDate = function() {
      var start = new Date(2016,2,1);
      var end = new Date();
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }      
   
  } 




}());