function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

(function() {
  'use strict';

  angular
    .module('myChat')
    .controller('ChatController', ChatController);


  function ChatController($rootScope, $scope, $http){

    $scope.allList = function() {
      $http({
        url: '/allList',
        method: 'GET'
      })
      .success(function(data) {
        $scope.users = data;
        $('#loader').hide();
        $('#userList').show();
      });
    }

    $scope.addMsg = function(textMessage, userName) {
      var dataToAdd = {
        user: userName || 'UNKNOWN',
        msg: textMessage || 'Default msg',
        timestamp: Date.now(),
        picture: 'http://api.randomuser.me/portraits/men/54.jpg'
      }

      $rootScope.data = dataToAdd;

      $http({
        url: '/addMsg',
        method: 'GET',
        params: dataToAdd
      })
      .success(function() {
        $scope.allList();
      });

    }

    $scope.allList();

    $scope.randomDate = function() {
          var start = new Date(2016,2,1);
          var end = new Date();
          return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        } 


  }

}());