(function() {
    var app = angular.module('licensePlates', ['ngRoute', 'licenseControllers', 'licenseFactories']);

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
        otherwise({
            redirectTo: '/'
        });
    }]);

})();