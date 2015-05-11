(function() {
    var newGameControllers = angular.module('newGameControllers', []);




    newGameControllers.controller('newGameController', [function() {
        var vm = this;

        vm.playerArray = [];
        vm.speak = "Hello world!";
        console.log(vm.playerArray + "outside of function");

        vm.addPlayers = function(playerCount) {
            var playerArrayLength = vm.playerArray.length;
            console.log(playerArrayLength);
            for (var player = 0; player < (playerCount - playerArrayLength); player++) {
                vm.playerArray.push("I am a new player!!");
                console.log(vm.playerArray + "here is the loop index number" + player);
            }
        };



    }]);



})();