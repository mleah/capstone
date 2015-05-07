(function() {
    var gameControllers = angular.module('gameControllers', []);

   


    gameControllers.controller('testControllerTwo', ['$scope', '$location', function($scope, $location) {
        var vm = this;

        vm.speak = "Hello world!";
        // vm.location = '';
        // vm.showHomeButton = function()

        // $scope.showHomeButton = $location.path() !== '/';
        // console.log($location.path());



    }]);


})();