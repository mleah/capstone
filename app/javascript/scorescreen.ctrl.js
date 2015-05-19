(function() {
    var scoreControllers = angular.module('scoreControllers', ['playerFactories', 'plateFactories', 'gameFactories']);

    scoreControllers.controller('scoreController', ['PlayerFactory', 'PlateFactory', 'GameFactory', function(PlayerFactory, PlateFactory, GameFactory) {
        var vm = this;

        vm.addPoints = function(playerIndex, points) {
            console.log("Player index is " + playerIndex + " player score is " + points);
            var players = PlayerFactory.showPlayers();
            console.log(players);
            console.log("player object before function call, playernumber " + players[playerIndex].playerNumber + "  player score " + players[playerIndex].score);
            var score = PlayerFactory.addPoints(playerIndex, points);
            console.log("player object after addPoints function call, playernumber " + players[playerIndex].playerNumber + "  player score " + players[playerIndex].score);
        };

        vm.addPlateFound = function(plate, playerIndex, plateIndex) {
            var player = PlayerFactory.showPlayers()[playerIndex];
            console.log("player before function call:  " + player)
            var plateFound = PlayerFactory.addPlateFound(plate, playerIndex);
            console.log("after function call, before changing value: " + plateFound + "  " + player.platesFound[0].abbreviation);
            return plateFound;
        };

        vm.changePlateFound = function(plateIndex){
            var plate = PlateFactory.showPlates();
            console.log("get the plates " + plate  );
            console.log("before changing value:  " + plate[plateIndex].isFound);
            var changeFoundValue = PlateFactory.plateIsFound(plateIndex);
            plate = PlateFactory.showPlates();
            console.log("get the plates again " + plate  );
            console.log("after changing value " + plate[plateIndex].isFound);
            return changeFoundValue;
        };


        vm.getCurrentPlate = function() {
            var plate = GameFactory.getCurrentPlate();
            console.log("plate/state name should be.... " + plate.fullname);
            return plate;
        };

        vm.getScore = function(lat1, lon1, lat2, lon2, unit) {
            var score = GameFactory.calculateCurrentPlateScore(lat1, lon1, lat2, lon2, unit);
            console.log(score);
            return score;
        };




    }]);
})();