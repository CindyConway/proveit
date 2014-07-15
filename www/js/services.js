angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Challenge', function($resource) {

  return $resource('http://localhost:8080/challenges')

  // Some fake testing data
  // var friends = [
  //   { id: 0, name: 'Scruff McGruff' },
  //   { id: 1, name: 'G.I. Joe' },
  //   { id: 2, name: 'Miss Frizzle' },
  //   { id: 3, name: 'Ash Ketchum' },
  //   { id: 4, name: 'Darleen Larin' }
  // ];

  // return {
  //   all: function() {
  //     return friends;
  //   },
  //   get: function(friendId) {
  //     // Simple index lookup
  //     return friends[friendId];
  //   }
  // }
});
