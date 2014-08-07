angular.module('ionicApp', ['ionic'])

    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('entry', {
                url : '/entry',
                templateUrl : 'entry.html',
                controller : 'EntryPageController'
            })

            .state('main', {
                url : '/main',
                templateUrl : 'mainContainer.html',
                abstract : true,
                controller : 'MainController'
            })

            .state('main.home', {
                url: '/home',
                views: {
                    'main': {
                        templateUrl: 'home.html',
                        controller : 'HomePageController'
                    }
                }
            })

            .state('main.info', {
                url: '/info',
                views: {
                    'main': {
                        templateUrl: 'info.html',
                        controller : 'InfoPageController'
                    }
                }
            })

            .state('main.tabs', {
                 url: '/tabs',
                 views: {
                     'main': {
                         templateUrl: 'tabs.html',
                         controller : 'TabsPageController'
                     }
                 }
            })

        $urlRouterProvider.otherwise('/entry');
    }])

    .controller('MainController', [ '$scope', function($scope) {
        $scope.toggleMenu = function() {
            $scope.sideMenuController.toggleLeft();
        }
    }])

    .controller('EntryPageController', [ '$scope', '$state', function($scope, $state) {
        $scope.navTitle = 'Entry Page';

        $scope.signIn = function() {
            $state.go('main.home');
        }
    }])

    .controller('HomePageController', [ '$scope', '$state', function($scope, $state) {
        $scope.navTitle = 'Home Page';

        $scope.leftButtons = [{
            type: 'button-icon icon ion-navicon',
            tap: function(e) {
                $scope.toggleMenu();
            }
        }];
    }])

    .controller('InfoPageController', [ '$scope', '$state', function($scope, $state) {
        $scope.navTitle = 'Info Page';

        $scope.leftButtons = [{
            type: 'button-icon icon ion-navicon',
            tap: function(e) {
                $scope.toggleMenu();
            }
        }];
    }])

    .controller('TabsPageController', [ '$scope', '$state', function($scope, $state) {
        $scope.navTitle = 'Tab Page';

        $scope.leftButtons = [{
            type: 'button-icon icon ion-navicon',
            tap: function(e) {
                $scope.toggleMenu();
            }
        }];
    }])

    function ContentController($scope, $ionicSideMenuDelegate) {
        $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
}
