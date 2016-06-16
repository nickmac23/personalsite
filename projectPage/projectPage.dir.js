(function() {
  'use strict';


  angular.module('app')
  .directive('projectPage', directive)

  function directive () {
    return {
      templateUrl: '/projectPage/projectPage.dir.html',
      controller,
    }

    function controller ($scope, info, $state, $sce) {
      $scope.vm = {};
      $scope.vm.project = onLoad();

      $scope.trustHtml = function (src){
          return $sce.trustAsHtml(src)
      }

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
