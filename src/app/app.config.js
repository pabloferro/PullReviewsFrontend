angular.module('pullreviews-frontend').config([
  'localStorageServiceProvider',
  function (localStorageServiceProvider) {

    // Local Storage Setup
    localStorageServiceProvider.setPrefix(window.btoa('pullreviews-frontend-/* @echo environment */'));
  }
]);
