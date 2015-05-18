(function() {
    var scoreControllers = angular.module('scoreControllers', ['playerFactories', 'plateFactories', 'gameFactories']);

    scoreControllers.controller('scoreController', ['PlayerFactory', 'PlateFactory', 'GameFactory', function(PlayerFactory, PlateFactory, GameFactory) {
        var vm = this;

        vm.addPoints = function(playerIndex, points) {
            console.log("Player index is " + playerIndex + " player score is " + points);
            var players = PlayerFactory.showPlayers();
            console.log("player object before function call, playernumber " + players[playerIndex].playerNumber + "  player score " + players[playerIndex].score);
            var score = PlayerFactory.addPoints(playerIndex, points);
            console.log("player object after addPoints function call, playernumber " + players[playerIndex].playerNumber + "  player score " + players[playerIndex].score);
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