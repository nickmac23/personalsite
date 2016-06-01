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

    function controller ($scope) {
      $scope.vm = {};
      $scope.vm.projects = [
        {
          title: 'Asteroids',
          content: 'My first project. A HTML5 canvas game.',
          url: 'projectPage',
          img: 'http://fillmurray.com/350/220',
        },
        {
          title: 'ScoketChat',
          content: 'An instant messaging site created in a hackaton.',
          url: 'projectPage',
          img: 'http://fillmurray.com/350/220',
        },
        {
          title: 'WhereAbouts',
          content: 'A site that displays places of intrerest near you!',
          url: 'projectPage',
          img: 'http://fillmurray.com/350/220',
        },
        {
          title: 'RedditClone',
          content: 'An Angular crud app that acts just like Reddit!',
          url: 'projectPage',
          img: 'http://fillmurray.com/350/220',
        },
        {
          title: 'Grasp',
          content: 'An app that tracks how much students understand.',
          url: 'projectPage',
          img: 'http://fillmurray.com/350/220',
        },
        {
          title: 'Portfolio',
          content: 'This site! How did I make it?',
          url: 'projectPage',
          img: 'http://fillmurray.com/350/220',
        }
      ];
    }
  }



}());
