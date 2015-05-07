(function() {
    var plateControllers = angular.module('plateControllers', []);




    plateControllers.controller('testControllerOne', ['$scope', '$location', function($scope, $location) {
        var vm = this;

        vm.speak = "Hello world!";
        // vm.location = '';
        // vm.showHomeButton = function()

        // $scope.showHomeButton = $location.path() !== '/';
        // console.log($location.path());



    }]);


    plateControllers.controller('plateProfileList', ['plateProfiles', function(plateProfiles) {
        var self = this;
        
    }]);


})();