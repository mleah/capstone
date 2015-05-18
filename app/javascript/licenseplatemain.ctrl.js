(function() {
    var licensePlateControllers = angular.module('plateControllers', ['playerFactories', 'plateFactories', 'gameFactories']);

    licensePlateControllers.controller('plateController', ['PlayerFactory', 'PlateFactory', 'GameFactory', function(PlayerFactory, PlateFactory, GameFactory) {
        var vm = this;
        vm.plateArray = PlateFactory.showPlates();

        vm.showPlayers = function() {
            var players = PlayerFactory.showPlayers();
            return players;
        };

        vm.showPlates = function(){
        	var plates = PlateFactory.showPlates();
        	console.log(plates);
        	vm.plateArray = plates;
        	return plates;
        };

        vm.getPlate = function(indexNumber){
        	//get index of plate clicked on
        	var plate = PlateFactory.getPlate(indexNumber);
        	console.log("set the plate " + plate.fullname  );
        	GameFactory.setCurrentPlate(plate);
        	var isPlateFound = GameFactory.getCurrentPlate();
        	console.log("which plate stored? " + isPlateFound.fullname);
        	return plate;
        }

        // vm.players = vm.showPlayers();

    }]);
})();