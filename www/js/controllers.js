angular.module('starter.controllers', [])

.controller('ChallengeCtrl', function($scope, Challenge) {
  // $scope.viewable = [
  // { text: "Yes", value: "Yes" },
  // { text: "No", value: "No" },
  // { text: "Just people I invite", value: "Just people I invite" }
  // ];

  // $scope.data = {
  //   viewable: 'Yes'
  // };

  //$scope.challenges = Challenge.query();

  $scope.challengeData={};
  $scope.newChallenge = function(){
    var challenge = new Challenge($scope.challengeData)
    challenge.$save();
  }

})

.controller('JoinTrackCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('InviteCtrl', function($scope) {
});
