(function() {
  'use strict';


  angular.module('app')
  .directive('projectPage', directive)

  function directive () {
    return {
      templateUrl: '/projectPage/projectPage.dir.html'
    }
  }
}());
