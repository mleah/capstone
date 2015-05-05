(function() {
    var app = angular.module('licensePlates', ['ngRoute', 'licenseControllers', 'licenseFactories']);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'partials/landingscreen.html'
        }).
        when('/newgamewelcome', {
            templateUrl: 'partials/newgamewelcomescreen.html'
    //     }).
    //     when('/dash', {
    //         templateUrl: ''
    //     }).
    //     otherwise({
    //         redirectTo: '/'
        });
    }]);

})();