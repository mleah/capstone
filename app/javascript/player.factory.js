(function() {
    var PlayerFactory = angular.module('playerFactories', []);


    PlayerFactory.factory('PlayerFactory', [function() {

        var playersArray = [];
        var PlayerFactory = function(playerNumber, currentIndex) {
            this.playerNumber = playerNumber;
            this.playerIndex = currentIndex;
            this.platesFound = [];
            this.score = 0;
        };

        return {
            showPlayers: function() {
                return playersArray;
            },

            addPlayers: function(playerCount) {
                var playerArrayLength = playersArray.length;
                var playerNumber = 1;
                for (var i = 0; i < (playerCount - playerArrayLength); i++) {
                    playersArray.push(new PlayerFactory(playerNumber, i));
                    console.log(playerNumber + " " + playersArray[i] + " " + playersArray[i].playerNumber + " " + playersArray[i].playerIndex + " " + playersArray[i].score + "  here is the loop index number" + i);
                    playerNumber++;
                }
            }
        };



        // PlayerFactory.prototype.incrementIndex = function() {
        //   if( this.currentIndex < 25) {
        //     this.currentIndex++;
        //   }
        // };

        // PlayerFactory.prototype.decrimentIndex = function() {
        //   if( this.currentIndex >0) {
        //     this.currentIndex--;
        //   }
        // };

        // PlayerFactory.prototype.resetIndex = function() {
        //   this.currentIndex = 0;
        // };

        // PlayerFactory.prototype.displayCurrentLetter = function() {
        //   return this.alphabet[this.currentIndex];
        // };



        return PlayerFactory;

    }]);

})();

// var PlayerService = angular.module('playerServices', []);


//     PlayerService.service('PlayerServices', function () {
//         var players = [];

//         return {
//             getProperty: function () {
//                 return players;
//             },
//             setProperty: function(value) {
//                 players = value;
//             }
//         };