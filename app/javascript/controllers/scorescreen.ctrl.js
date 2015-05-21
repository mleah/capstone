(function() {
    var scoreControllers = angular.module('scoreControllers', ['playerFactories', 'plateFactories', 'gameFactories']);

    scoreControllers.controller('scoreController', ['PlayerFactory', 'PlateFactory', 'GameFactory', function(PlayerFactory, PlateFactory, GameFactory) {
        var vm = this;

        vm.addPoints = function(playerIndex, points) {
            var players = PlayerFactory.showPlayers();
            var score = PlayerFactory.addPoints(playerIndex, points);
        };

        vm.addPlateFound = function(plate, playerIndex, plateIndex) {
            var player = PlayerFactory.showPlayers()[playerIndex];
            var plateFound = PlayerFactory.addPlateFound(plate, playerIndex);
            return plateFound;
        };

        vm.changePlateFound = function(plateIndex){
            var plate = PlateFactory.showPlates();
            console.log("before changing value:  " + plate[plateIndex].isFound);
            var changeFoundValue = PlateFactory.plateIsFound(plateIndex);
            plate = PlateFactory.showPlates();
            console.log("after changing value " + plate[plateIndex].isFound);
            return changeFoundValue;
        };

        vm.getCurrentPlate = function() {
            var plate = GameFactory.getCurrentPlate();
            return plate;
        };

        vm.getScore = function(lat1, lon1, lat2, lon2, unit) {
            var score = GameFactory.calculateCurrentPlateScore(lat1, lon1, lat2, lon2, unit);
            console.log(score);
            return score;
        };

    }]);
})();