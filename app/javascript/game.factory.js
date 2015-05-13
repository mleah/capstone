(function() {
    var gameFactories = angular.module('gameFactories', ['playerFactories', 'plateFactories']);

    gameFactories.factory('GameFactory', [ 'PlayerFactory', 'PlateFactory', function(PlayerFactory, PlateFactory) {

        var currentPlate;

        return{
        	setCurrentPlate: function(newPlate){
        		currentPlate = newPlate;
        		return currentPlate;

        	}, 
        	getCurrentPlate: function() {
                    return currentPlate;
                },

        }
        

        

        return GameFactory;

    }]);

})();