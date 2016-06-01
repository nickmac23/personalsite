(function() {
  'use strict';


  angular.module('app')
  .directive('landing', directive)

  function directive () {
    return {
      scope: {},
      templateUrl: '/introBar/introBar.dir.html',
      controller,
    }

    function controller ($scope, info) {
      $scope.vm = {};
      $scope.vm.projects = info.data
    }
  }



}());
