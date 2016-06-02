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
          img: 'images/Screen Shot 2016-06-02 at 4.40.55 PM.png',
          skills: ['HTML Canvas', 'CSS', 'JavaScript', 'JQuery', 'FireBase'],
          imgBig: 'images/Screen Shot 2016-06-02 at 5.03.00 PM.png',
          content: 'Lorem Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          url: 'https://astroidz.firebaseapp.com',
          git: 'https://github.com/nickmac23/astroid',

        },
        {
          title: 'SocketChat',
          short: 'An instant messaging site created in a hackaton.',
          skills: ['HTML/CSS', 'Socket.io', 'Handlebars.js', 'Node.js', 'Knex.js', 'SQL', 'Express', 'cookieParser', 'bcrypt'],
          img: 'images/Screen Shot 2016-06-02 at 4.46.29 PM.png',
          imgBig: 'images/socketLong.png',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          url: 'https://hackathon-socket-express.herokuapp.com/',
          git: 'https://github.com/nickmac23/socketExpress',
        },
        {
          title: 'WhereAbouts',
          short: 'A site that displays places of intrerest near you!',
          skills: ['HTML/CSS', 'SASS', 'Socket.io', 'Handlebars.js', 'Google Maps API', 'Node.js', 'Knex.js', 'SQL', 'Express', 'cookieParser', 'bcrypt', 'OAuth'],
          img: 'images/Screen Shot 2016-06-02 at 4.47.18 PM.png',
          imgBig: 'images/whereaboutslong.png',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          url: 'http://where-a-bouts.herokuapp.com/',
          git: 'https://github.com/blakeface/whereabouts',


        },
        {
          title: 'RedditClone',
          short: 'An Angular crud app that acts just like Reddit!',
          skills: ['HTML/CSS', 'Bootstrap', 'Angular.js', 'UI-Router', 'Ng-Animate', 'Node.js', 'Knex.js', 'SQL', 'Express', 'JSON Web Tokens', 'bcrypt'],
          img: 'images/Screen Shot 2016-06-02 at 4.52.26 PM.png',
          imgBig: 'images/Screen Shot 2016-06-02 at 4.52.43 PM.png',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          url: 'https://redditclonenick.firebaseapp.com',
          git: 'https://github.com/nickmac23/reddit_clone_new',


        },
        {
          title: 'Grasp',
          short: 'An app that tracks how much students understand.',
          skills: ['HTML/CSS', 'Bootstrap', 'SASS', 'Angular.js', 'UI-Router', 'Ng-Animate', 'Ionic', 'Socket.io', 'Gulp', 'Node.js', 'Knex.js', 'SQL', 'Express', 'JSON Web Tokens', 'bcrypt', 'Google Charts API'],
          img: 'images/Screen Shot 2016-06-02 at 4.48.17 PM.png',
          imgBig: 'images/Screen Shot 2016-06-02 at 4.49.23 PM.png',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          url: 'https://panic-button-c784e.firebaseapp.com/',
          git: 'https://github.com/slytton/panic-button',


        },
        {
          title: 'Portfolio',
          short: 'This site! How did I make it?',
          skills: ['HTML/CSS', 'Bootstrap', 'Angular.js', 'UI-Router', 'Ng-Animate'],
          img: 'http://fillmurray.com/350/220',
          imgBig: 'http://fillmurray.com/880/220',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          url: '',
          git: 'https://github.com/nickmac23/personalsite',


        }
      ],
    }
  }
}());
