(function() {
  'use strict';

  angular.module('app')
  .directive('footy', directive)

  function directive () {
    return {
      scope: {},
      templateUrl: '/footer/footer.dir.html',
    }
  }
}());
