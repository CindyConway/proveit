// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url         : "/app",
      abstract    : true,
      templateUrl : "templates/menu.html",
      controller  : 'AppCtrl'
    })

    .state('app.search', {
      url             : "/search",
      views: {
        'menuContent' :{
          templateUrl : "templates/search.html"
        }
      }
    })

    .state('app.notificatons', {
      url: "/notifications",
      views :{
        'menuContent' :{
          templateUrl : "templates/notifications.html"
        }
      }
    })

    .state('app.profile', {
      url: "/profile",
      views: {
        'menuContent' :{
          templateUrl: "templates/profile.html"
        }
      }
    })

    .state('app.security', {
      url: "/security",
      views: {
        'menuContent' :{
          templateUrl: "templates/security.html",
        }
      }
    })

    .state('app.about', {
      url: "/about",
      views: {
        'menuContent' :{
          templateUrl: "templates/about.html"
        }
      }
    })

    .state('app.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "templates/home.html",
          controller: 'HomeCtrl'
        }
      }
    })

    .state('app.home.feed',{
      url:"",
      views: {
        'completed-count':{
          template: '<div ui-view class="viewContainer" autoscroll="false" />'
        }
      }
    })

    .state('tabs', {
      url: "/tab",
      abstract: true,
      // templateUrl: "templates/tabs/tabs.html"
    })

    .state('tabs.myFeed', {
      url: "/my-feeds",
      views: {
        'my-feed-tab': {
          templateUrl: "templates/tabs/my-feed.html",
        }
      }
    })

    .state('tabs.fresh', {
      url: "/fresh",
      views: {
        'fresh-tab': {
          templateUrl: "templates/tabs/fresh.html"
        }
      }


    })

    .state('tabs.atta', {
      url: "/atta",
      views: {
        'atta-tab': {
          templateUrl: "atta.html"
        }
      }
    });

  $urlRouterProvider.otherwise('/app/home');
});

