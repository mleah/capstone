(function() {
    var scoreControllers = angular.module('scoreControllers', ['playerFactories', 'plateFactories', 'gameFactories']);

    scoreControllers.controller('scoreController', ['PlayerFactory', 'PlateFactory', 'GameFactory', function(PlayerFactory, PlateFactory, GameFactory) {
        var vm = this;

        vm.addPoints = function(playerIndex, points) {
            var players = PlayerFactory.showPlayers();
            var score = PlayerFactory.addPoints(playerIndex, points);
        };

        vm.addPlateFound = function(plate, playerIndex, plateIndex) {
            var plateFound = PlayerFactory.addPlateFound(plate, playerIndex);
            return plateFound;
        };

        vm.changePlateFound = function(plateIndex){
            var changeFoundValue = PlateFactory.plateIsFound(plateIndex);
            return changeFoundValue;
        };

        vm.getCurrentPlate = function() {
            var plate = GameFactory.getCurrentPlate();
            return plate;
        };

        vm.getScore = function(lat1, lon1, lat2, lon2, unit) {
            var score = GameFactory.calculateCurrentPlateScore(lat1, lon1, lat2, lon2, unit);
            return score;
        };

    }]);
})();