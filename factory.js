(function() {
  'use strict';


  angular.module('app')
  .factory('info', service)

  function service ($state) {
    return {
      data: [
        {
          title: 'Asteroids',
          short: 'My first project. A HTML5 canvas game.',
          img: 'http://fillmurray.com/350/220',
          skills: ['HTML Canvas', 'CSS', 'JavaScript', 'JQuery', 'FireBase'],
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

        },
        {
          title: 'SocketChat',
          short: 'An instant messaging site created in a hackaton.',
          img: 'http://fillmurray.com/350/220',
        },
        {
          title: 'WhereAbouts',
          short: 'A site that displays places of intrerest near you!',
          img: 'http://fillmurray.com/350/220',
        },
        {
          title: 'RedditClone',
          short: 'An Angular crud app that acts just like Reddit!',
          img: 'http://fillmurray.com/350/220',
        },
        {
          title: 'Grasp',
          short: 'An app that tracks how much students understand.',
          img: 'http://fillmurray.com/350/220',
        },
        {
          title: 'Portfolio',
          short: 'This site! How did I make it?',
          img: 'http://fillmurray.com/350/220',
        }
      ],
    }
  }
}());
