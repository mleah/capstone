(function() {
    var newGameControllers = angular.module('newGameControllers', ['playerFactories']);

    newGameControllers.controller('newGameController', ['PlayerFactory', function(PlayerFactory) {
        var vm = this;
        vm.speak = "Hello world!";

        vm.addPlayers = function(playerCount) {
            var getPLayers = PlayerFactory.addPlayers(playerCount);
            var players = PlayerFactory.showPlayers();
            console.log(players);
            return PlayerFactory.addPlayers(playerCount);
        }

    }]);
})();