(function() {
    var scoreControllers = angular.module('scoreControllers', ['playerFactories', 'plateFactories']);

    scoreControllers.controller('scoreController', ['PlayerFactory', 'PlateFactory', function(PlayerFactory, PlateFactory) {
        var vm = this;

        vm.addPoints = function(playerIndex, points) {
            console.log(playerIndex + "  " + points);
            var players = PlayerFactory.showPlayers();
            console.log(players[playerIndex]);
            var score = PlayerFactory.addPoints(playerIndex, points);
            console.log(players[playerIndex]);
        };

    }]);
})();