(function() {
  'use strict';


  angular.module('app')
  .directive('projectPage', directive)

  function directive () {
    return {
      templateUrl: '/projectPage/projectPage.dir.html',
      controller,
    }

    function controller ($scope, info, $state) {
      $scope.vm = {};
      $scope.vm.project = onLoad();

      function onLoad () {
        for (var i = 0; i < info.data.length; i++) {
          if (info.data[i].title === $state.params.name) {
            return info.data[i]
          }
        }
      }
    }
  }
}());
