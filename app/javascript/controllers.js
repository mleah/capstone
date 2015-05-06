(function() {
    var licenseControllers = angular.module('licenseControllers', []);

    licenseControllers.controller('licenseListCtrl', [function() {
        var vm = this;
        //hardcode some for now
        vm.states = [{
            abbreviation: 'AL',
            fullname: 'Alabama',
        }, {
            abbreviation: 'AK',
            fullname: 'Alaska',
        }, {
            abbreviation: 'AZ',
            fullname: 'Arkansas',
        }];
    }]);

    

    licenseControllers.controller('testController', ['$scope', '$location', function($scope, $location) {
        var vm = this;

        vm.speak = "Hello world!";
        vm.location = '';
        // vm.showHomeButton = function()

        // $scope.showHomeButton = $location.path() !== '/';
        console.log($location.path());

    }]);


})();


// licenseControllers.controller('testCtrl', ['', function() {
    //   var vm = this;
    //   vm.whatisfactorydoing? = FACTORYNAME somethign here;
    // }]);