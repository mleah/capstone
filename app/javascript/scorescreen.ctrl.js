(function() {
    var scoreControllers = angular.module('scoreControllers', ['playerFactories', 'plateFactories', 'gameFactories']);

    scoreControllers.controller('scoreController', ['PlayerFactory', 'PlateFactory', 'GameFactory', function(PlayerFactory, PlateFactory, GameFactory) {
        var vm = this;
        vm.lat1 = 42.3314;
        vm.lon1 = 83.0458;
        vm.unit = "mile";
        //42.3314, 83.0458 detroit lat/long

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

        vm.distanceTo = function(vm.lat1, vm.lon1, lat2, lon2, vm.unit) {
            var rlat1 = Math.PI * vm.lat1 / 180;
            var rlat2 = Math.PI * lat2 / 180;
            var rlon1 = Math.PI * vm.lon1 / 180;
            var rlon2 = Math.PI * lon2 / 180;
            var theta = vm.lon1 - lon2;
            var rtheta = Math.PI * theta / 180;
            var dist = Math.sin(rlat1) * Math.sin(rlat2) + Math.cos(rlat1) * Math.cos(rlat2) * Math.cos(rtheta);
            dist = Math.acos(dist);
            dist = dist * 180 / Math.PI;
            dist = dist * 60 * 1.1515;
            if (vm.unit == "K") {
                dist = dist * 1.609344;
            }
            if (vm.unit == "N") {
                dist = dist * 0.8684;
            }
            console.log(dist);
            return dist;
        };

        vm.findCapitalDist = function() {}



    }]);
})();