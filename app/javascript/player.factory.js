(function() {
    var PlayerFactory = angular.module('playerFactories', []);


    PlayerFactory.factory('PlayerFactory', [function() {

        var PlayerFactory = function(playerNumber, currentIndex) {
            this.playerNumber = playerNumber;
            this.playerIndex = currentIndex;
            this.platesFound = [];
            this.score = "i am the score!!";
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