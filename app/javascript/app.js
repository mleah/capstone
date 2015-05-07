(function() {
    var app = angular.module('licensePlates', ['ngRoute',
        'plateControllers',
        'gameControllers',
        'playerControllers',
        'plateFactories',
        'gameFactories',
        'playerFactories'
    ]);


    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
        when('/', {
            controller: 'testControllerOne',
            templateUrl: 'partials/landingscreen.html'
        }).
        when('/newgamewelcome', {
            controller: '',
            templateUrl: 'partials/newgamewelcomescreen.html'
        }).
        when('/about', {
            controller: '',
            templateUrl: 'partials/about.html'
        }).
        when('/maingamescreen', {
            controller: '',
            templateUrl: 'partials/licenseplatemain.html'
        }).
        when('/continuegamewelcome', {
            controller: '',
            templateUrl: 'partials/continuegamewelcomescreen.html'
        }).
        when('/newgameoverwrite', {
            controller: '',
            templateUrl: 'partials/newgameoverwriteoldgame.html'
        }).
        when('/leaderboard', {
            controller: '',
            templateUrl: 'partials/leaderboard.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }]);

})();