(function() {
    var newGameControllers = angular.module('newGameControllers', ['playerFactories']);

    newGameControllers.controller('newGameController', ['PlayerFactory', function(PlayerFactory) {
        var vm = this;

        vm.addPlayers = function(playerCount) {
            return PlayerFactory.addPlayers(playerCount);
        }

    }]);
})();