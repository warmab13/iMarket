// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'LoginModule', 'ionic-material', 'TabsModule'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('login', {
      url:'/login',
      templateUrl: 'templates/login/login.html',
      controller: 'LoginController'
    })

    .state('register', {
      url:'/register',
      templateUrl: 'templates/login/register.html',
      controller: 'RegisterController'
    })

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlist.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })

  /*Tabs states*/
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs/tabs.html',
      controller: 'TabsController'
    })
    .state('tab.task', {
      url: '/task',
      views: {
        'tab-task': {
          templateUrl: 'templates/tabs/tasks.html',
          controller: 'TaskController'
        }
      }
    })
    .state('tab.event', {
      url: '/event',
      views: {
        'tab-event': {
          templateUrl: 'templates/tabs/events.html',
          controller: 'EventController'
        }
      }
    })
    .state('tab.market', {
      url: '/market',
      views: {
        'tab-market': {
          templateUrl: 'templates/tabs/market.html',
          controller: 'MarketController'
        }
      }
    })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
