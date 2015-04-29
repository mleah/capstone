angular.module('licensePlates', []);
angular.module('licensePlates').config(Configuration);


function Configuration($routeProvider) {
    var home = '/';
    $routeProvider
        .when(home, {
            templateUrl: '',
        })
        .when('/:', {
            templateUrl: '',
        })
        .otherwise({
            redirectTo: home,
        });
}