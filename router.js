(function() {
  'use strict';
  var dependencies = [
    'ui.router',
    'ngAnimate'
  ];


  angular.module('app', dependencies)
    .config(setupRoutes)

  setupRoutes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

  function setupRoutes($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider){
    // $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('home', {
        url: "/",
        template: "<landing></landing>"
      })
    $stateProvider
      .state('projectPage', {
        url: "/",
        template: "<project-page></project-page>",
        controller: function ($scope) {
          $scope.vm = {}
          $scope.vm.title = 'Asteroid'
        }
      })

  }






}());
