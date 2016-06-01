(function() {
  'use strict';


  angular.module('app')
  .directive('portfolio', directive)

  function directive () {
    return {
      scope: {},
      templateUrl: '/portfolio/portfolio.dir.html',
      controller,
    }

    function controller () {
      console.log('port!');
    }
  }
}());
