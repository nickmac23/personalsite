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

  function controller () {
    console.log('here');
  }

  }
}());
