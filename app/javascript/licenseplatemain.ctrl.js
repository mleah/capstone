(function() {
    var licensePlateControllers = angular.module('plateControllers', ['playerFactories', 'plateFactories']);

    licensePlateControllers.controller('plateController', ['PlayerFactory', 'PlateFactory', function(PlayerFactory, PlateFactory) {
        var vm = this;

        vm.showPlayers = function() {
            var players = PlayerFactory.showPlayers();
            return players;
        };

        vm.showPlates = function(){
        	var plates = PlateFactory.showPlates();
        	console.log(plates);
        	return plates;
        }

    }]);
})();