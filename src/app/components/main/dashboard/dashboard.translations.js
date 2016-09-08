angular.module('pullreviews-frontend').config([
  '$translateProvider',
  function ($translateProvider) {

    $translateProvider.translations('es', {
      DASHBOARD: {
        TITLE: 'Dashboard'
      }
    });
  }
]);
