(function() {
    var app = angular.module('licensePlates', ['ngRoute',
        'gameFactories',
        'plateFactories',
        'playerFactories',
        'plateControllers',
        'newGameControllers',
        'scoreControllers'
    ]);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'partials/landingscreen.html'
        }).
        when('/newgamewelcome', {
            templateUrl: 'partials/newgamewelcomescreen.html'
        }).
        when('/about', {
            templateUrl: 'partials/about.html'
        }).
        when('/maingamescreen', {
            templateUrl: 'partials/licenseplatemain.html'
        }).
        when('/continuegamewelcome', {
            templateUrl: 'partials/continuegamewelcomescreen.html'
        }).
        when('/newgameoverwrite', {
            templateUrl: 'partials/newgameoverwriteoldgame.html'
        }).
        when('/leaderboard', {
            templateUrl: 'partials/leaderboard.html'
        }).
        when('/scorescreen', {
            templateUrl: 'partials/scorescreen.html'
        }).
        when('/win', {
            templateUrl: 'partials/coupon.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }]);

})();