(function() {
    var app = angular.module('licensePlates', []);

    // app.config(['$routeProvider', function($routeProvider) {
    //     $routeProvider.
    //     when('/', {
    //         templateUrl: ''
    //     }).
    //     when('/form', {
    //         templateUrl: ''
    //     }).
    //     when('/dash', {
    //         templateUrl: ''
    //     }).
    //     otherwise({
    //         redirectTo: '/'
    //     });
    // }]);

	app.controller('testController', function(){
		var vm = this;

		vm.speak = "Hello world!";

	});

})();