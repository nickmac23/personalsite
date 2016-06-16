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
          content: "Thank you for your interest in Asteroid Field, my very first project. This game is a remake of Atari's Asteroids, an arcade style game in which a spaceship fights for survival in an asteroid field. Gameplay was made entirely using the HTML5 canvas element and JavaScript. Additionally I used CSS, SASS and Jquery for styling the site. The game includes four different ships, three asteroid types with different behaviors and an updating score tally. User’s high scores  are saved and compared in a Firebase database which I utilize for creating a high score leader board. Currently I am working with sockets to create a multiplayer version, check it out on at <a href='https://github.com/nickmac23/pongsock'> github </a>  Click below to visit the site and see if you can get the new high score. I hope you enjoy the game.",
          url: 'https://astroidz.firebaseapp.com',
          git: 'https://github.com/nickmac23/astroid',

        },
        {
          title: 'SocketChat',
          short: 'An instant messaging site created in a hackaton.',
          skills: ['HTML/CSS', 'Socket.io', 'Handlebars.js', 'Node.js', 'Knex.js', 'SQL', 'Express', 'cookieParser', 'bcrypt'],
          img: 'images/Screen Shot 2016-06-02 at 4.46.29 PM.png',
          imgBig: 'images/socketLong.png',
          content: "SocketChat was created in a day as part of a hackathon. In this project I worked with one other person to create an instant messaging CRUD app with the intent of learning socket.io. Users can create new chat rooms and message each other in real time. All messages are then saved and displayed only in the chat room in which they were created. Additional features include Google OAuth and Cookie based authentication.",
          url: 'https://hackathon-socket-express.herokuapp.com/',
          git: 'https://github.com/nickmac23/socketExpress',
        },
        {
          title: 'WhereAbouts',
          short: 'A site that displays places of intrerest near you!',
          skills: ['HTML/CSS', 'SASS', 'Socket.io', 'Handlebars.js', 'Google Maps API', 'Node.js', 'Knex.js', 'SQL', 'Express', 'cookieParser', 'bcrypt', 'OAuth'],
          img: 'images/Screen Shot 2016-06-02 at 4.47.18 PM.png',
          imgBig: 'images/whereaboutslong.png',
          content: "Whereabouts is a community-powered map for overlooked points-of-interest that was created as part of a week long group project. It captures hidden gems that only a true local would know, giving the user a more authentic experience than what other travel sites can offer. To create an entry a user can simply whip out their phone, and use Google maps API to lock onto their location. All posts are saved in a postgresql database which can be filtered and viewed by location and distance. Popular posts are upvoted allowing for community reliability and more exciting points of interest to be displayed to the user quicker. \nI created this project prior to me learning Angular. With the goal to seamlessly render new information to the page without a refresh I utilized socket.io and jQuery. Whereabouts gets its charm from its content and is in desperate need of more. Please visit the site and add your own. For more information about where I have been visit <a href='https://where-a-bouts.herokuapp.com/users/13'>my user page.</a>",
          url: 'http://where-a-bouts.herokuapp.com/',
          git: 'https://github.com/blakeface/whereabouts',


        },
        {
          title: 'RedditClone',
          short: 'An Angular crud app that acts just like Reddit!',
          skills: ['HTML/CSS', 'Bootstrap', 'Angular.js', 'UI-Router', 'Ng-Animate', 'Node.js', 'Knex.js', 'SQL', 'Express', 'JSON Web Tokens', 'bcrypt'],
          img: 'images/Screen Shot 2016-06-02 at 4.52.26 PM.png',
          imgBig: 'images/Screen Shot 2016-06-02 at 4.52.43 PM.png',
          content: "Reddit clone was created as a way to hone my Angular skills. I designed the site to look and feel like Reddit in order to give this unassuming CRUD app more flare. Security was a big interest of mine and as a result Reddit clone utilizes JSON Web Tokens and HTTP interceptors to check for user validity. ",
          url: 'https://redditclonenick.firebaseapp.com',
          git: 'https://github.com/nickmac23/reddit_clone_new',


        },
        {
          title: 'Grasp',
          short: 'An app that tracks how much students understand.',
          skills: ['HTML/CSS', 'Bootstrap', 'SASS', 'Angular.js', 'UI-Router', 'Ng-Animate', 'Ionic', 'Socket.io', 'Gulp', 'Node.js', 'Knex.js', 'SQL', 'Express', 'JSON Web Tokens', 'bcrypt', 'Google Charts API'],
          img: 'images/Screen Shot 2016-06-02 at 4.48.17 PM.png',
          imgBig: 'images/Screen Shot 2016-06-02 at 4.49.23 PM.png',
          content: 'Grasp is an educational app. It utilizes socket.io and google charts api inorder to give teachers a realtime look at how much their class understands the lecture. By utilizing the web or phone app, students can indicate whether they understand the lecture or not. Every time a student changes state the graph is updated. ',
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
