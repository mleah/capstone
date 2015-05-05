(function() {
    var app = angular.module('licensePlates', ['ngRoute', 'licenseControllers', 'licenseFactories']);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'partials/landingscreen.html'
    //     }).
    //     when('/form', {
    //         templateUrl: ''
    //     }).
    //     when('/dash', {
    //         templateUrl: ''
    //     }).
    //     otherwise({
    //         redirectTo: '/'
        });
    }]);

})();