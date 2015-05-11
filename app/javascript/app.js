(function() {
    var app = angular.module('licensePlates', ['ngRoute',
        'plateControllers',
        'gameControllers',
        'newGameControllers',
        'plateFactories',
        'gameFactories',
        'playerFactories'
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
        otherwise({
            redirectTo: '/'
        });
    }]);

})();