angular.module('starter.controllers', [])

.controller('ChallengeCtrl', function($scope) {
})

.controller('JoinTrackCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('InviteCtrl', function($scope) {
});
