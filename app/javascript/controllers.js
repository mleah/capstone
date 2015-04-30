(function() {
  var licenseControllers = angular.module('licenseControllers', []);

  licenseControllers.controller('licenseListCtrl', ['', function() {
    var vm = this;
    vm.states = [];
  }]);

  // licenseControllers.controller('testCtrl', ['', function() {
  //   var vm = this;
  //   vm.whatisfactorydoing? = FACTORYNAME somethign here;
  // }]);

  licenseControllers.controller('testController', [function(){
    var vm = this;

    vm.speak = "Hello world!";

  }]);
 

})();