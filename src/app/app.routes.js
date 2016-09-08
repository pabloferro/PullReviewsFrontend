angular.module('pullreviews-frontend').config([
  '$stateProvider', '$urlRouterProvider', '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {

    // For any unmatched urls
    $urlRouterProvider.otherwise(($injector) => {
      $injector.get('$state').go('main.dashboard');
    });

    // Now set up the states
    $stateProvider
      .state('main', {
        abstract: true,
        views: {
          main: {
            templateUrl: '../app/components/main/main.html'
          }
        }
      })
      .state('main.dashboard', {
        url: '/',
        views: {
          content: {
            templateUrl: '../app/components/main/dashboard/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'dashboardCtrl'
          }
        }
      });

    $locationProvider.html5Mode(true);
  }
]);
