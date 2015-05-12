(function() {
    var licensePlateControllers = angular.module('plateControllers', ['playerFactories']);

    licensePlateControllers.controller('plateController', ['PlayerFactory', function(PlayerFactory) {
        var vm = this;

        vm.showPlayers = function() {
        	console.log("Hello world!");
            var players = PlayerFactory.showPlayers();
    		console.log(players);
            return players;
        };

    }]);
})();