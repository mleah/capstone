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
                    playerNumber++;
                }
            },

            addPoints: function(playerIndex, points) {
                var score = playersArray[playerIndex].score;
                score = score + points;
                playersArray[playerIndex].score = score;
            },

            addPlateFound: function(plate, playerIndex) {
                playersArray[playerIndex].platesFound.push(plate);
                console.log(playersArray[playerIndex].platesFound + "  does it work??");
            }
        };

        return PlayerFactory;

    }]);

})();