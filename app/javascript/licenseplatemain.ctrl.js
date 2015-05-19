(function() {
    var licensePlateControllers = angular.module('plateControllers', ['playerFactories', 'plateFactories', 'gameFactories']);

    licensePlateControllers.controller('plateController', ['PlayerFactory', 'PlateFactory', 'GameFactory', function(PlayerFactory, PlateFactory, GameFactory) {
        var vm = this;
        vm.plateArray = PlateFactory.showPlates();
        vm.currentPage = 0;
        vm.pageSize = 5;
        // vm.numberOfPages = vm.numberOfPagesCall();

        vm.showPlayers = function() {
            var players = PlayerFactory.showPlayers();
            return players;
        };

        vm.showPlates = function() {
            var plates = PlateFactory.showPlates();
            console.log(plates);
            vm.plateArray = plates;
            return plates;
        };

        vm.getPlate = function(indexNumber) {
            var plate = PlateFactory.getPlate(indexNumber);
            console.log("set the plate " + plate.fullname);
            GameFactory.setCurrentPlate(plate);
            var isPlateFound = GameFactory.getCurrentPlate();
            console.log("which plate stored? " + isPlateFound.fullname);
            return plate;
        };

        // vm.numberOfPagesCall = function() {
        //     console.log(vm.plateArray.length);
        //     return Math.ceil(vm.plateArray.length / vm.pageSize);
        // };

    }]);
})();