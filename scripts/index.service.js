(function () {
  'use strict';

  angular
    .module('myChat')
    .run(function($httpBackend, $rootScope) {

      var root = $rootScope
      // fake original data to change
      var users = [
        { "user": "Olga", "msg": "Hi!", "timestamp": "1456651674675", "picture":"http://api.randomuser.me/portraits/women/61.jpg"},
        { "user": "Anton", "msg": "Hi-hi!", "timestamp": "1456651692612", "picture":"http://api.randomuser.me/portraits/men/95.jpg"},
        { "user": "Olga", "msg": "How are you?", "timestamp": "1456651891409", "picture":"http://api.randomuser.me/portraits/women/61.jpg"}
      ];

      $httpBackend.whenGET('/allList').respond(function(method,url,data) {
        return [200, users, {}];
      });

      $httpBackend.when('GET', /\/addMsg(.*)/).respond(function(method, url, data, headers, params){
        users.push(root.data);
        return [200, {}, {}];
      });

    })

}());