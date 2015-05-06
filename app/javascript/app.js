(function() {
    var app = angular.module('licensePlates', ['ngRoute', 'licenseControllers', 'licenseFactories']);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
        when('/', {
            controller: 'testController',
            templateUrl: 'partials/landingscreen.html'
        }).
        when('/newgamewelcome', {
            controller: 'testController',
            templateUrl: 'partials/newgamewelcomescreen.html'
        }).
        when('/about', {
            controller: 'testController',
            templateUrl: 'partials/about.html'
        }).
        when('/maingamescreen', {
            controller: 'testController',
            templateUrl: 'partials/licenseplatemain.html'
        }).
        when('/continuegamewelcome', {
            controller: 'testController',
            templateUrl: 'partials/continuegamewelcomescreen.html'
        }).
        when('/newgameoverwrite', {
            controller: 'testController',
            templateUrl: 'partials/newgameoverwriteoldgame.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }]);

})();