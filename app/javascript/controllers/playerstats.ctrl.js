(function() {
    var playerStatsController = angular.module('playerStatsCtrl', ['playerFactories', 'plateFactories', 'gameFactories']);

    playerStatsController.controller('playerStatsCtrl', ['PlayerFactory', 'PlateFactory', 'GameFactory', '$location', function(PlayerFactory, PlateFactory, GameFactory, $location) {
        var vm = this;
        vm.playerArray = PlayerFactory.showPlayers();
        vm.currentPage = 0;
        vm.pageSize = 1;

        vm.showPlayers = function() {
            return PlayerFactory.showPlayers();
        };

        vm.goToPath = function(path) {
            $location.path(path);
        };

    }]);
})();