(function () {
  'use strict';

  angular
    .module('myChat')
    .service('chatService', chatService)
    .service('chatServiceMock', chatServiceMock)
    .config(function ($provide) {
      $provide.decorator('chatService', function ($delegate, chatServiceMock) {
        $delegate = chatServiceMock;
        return $delegate;
      });
    });


    function chatServiceMock($http) {
      this.getMessages = function () {
        return $http.get('mock/chat.mock.json');
      };

      this.sendMessage = function (textMessage, timeStamp, userName) {
        $http.get('/api/message/send', {
            params:  {timestamp: timeStamp, message: textMessage, user: userName}
          }
        );
      };
    }


    function chatService($http) {
      this.getMessages = function () {
        return $http.get('/api/message/list?timestamp=1456651674675');
      };

      this.sendMessage = function (textMessage) {
        $http.get('/api/message/send', {
          params:  {message: 'textMessage', timestamp: 'timeStamp'}
        });
      };
    }

}());