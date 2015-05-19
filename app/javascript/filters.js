(function() {
   angular
       .module('licensePlates')
       .filter('startFrom', function() {
            return function(input, start) {
                console.log(input);
                console.log(start);
                start = +start; //parse to int
                return input.slice(start);
            }
        });
})();