(function() {
    var gameFactories = angular.module('gameFactories', ['playerFactories', 'plateFactories']);

    gameFactories.factory('GameFactory', [ 'PlayerFactory', 'PlateFactory', function(PlayerFactory, PlateFactory) {

        var currentPlate;

        return{

        }
        

        

        return GameFactory;

    }]);

})();