(function() {
    var newGameControllers = angular.module('newGameControllers', []);




    newGameControllers.controller('newGameController', [function() {
        var vm = this;

        vm.playerArray = [];
        vm.speak = "Hello world!";
        console.log(vm.playerArray + "outside of function");

        vm.addPlayers = function(playerCount) {
            var playerArrayLength = vm.playerArray.length;
            var playerNumber = 1;
            for (var player = 0; player < (playerCount - playerArrayLength); player++) {
                vm.playerArray.push(new vm.playerConstructor(playerNumber, player));
                console.log(playerNumber + " " + vm.playerArray[player] + " " + vm.playerArray[player].playerNumber + " " + vm.playerArray[player].playerIndex + " " + vm.playerArray[player].score + "  here is the loop index number" + player);
                playerNumber++;
            }

        };

        vm.playerConstructor = function(playerNumber, playerIndex) {
            console.log(playerNumber);
            var playerNumber = playerNumber;
            var playerIndex = playerIndex;
            var platesFound = [];
            var score = "i am the score!!";
        };



    }]);



})();