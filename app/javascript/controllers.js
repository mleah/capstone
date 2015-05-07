(function() {
    var licenseControllers = angular.module('licenseControllers', []);

    licenseControllers.controller('licenseListCtrl', [function() {
        var vm = this;
        //hardcode some for now
        //lat and long are based on capital
        
        vm.states = [{
            abbreviation: 'AL',
            fullname: 'Alabama',
            lat: 32.361538,
            long: -86.279118
        }, {
            abbreviation: 'AK',
            fullname: 'Alaska',
            lat: 58.301935,
            long: -134.419740
        }, {
            abbreviation: 'AZ',
            fullname: 'Arizona',
            lat: 33.448457,
            long: -112.073844
        }, {
            abbreviation: 'AR',
            fullname: 'Arkansas',
            lat: 34.736009,
            long: -92.331122
        }, {
            abbreviation: 'CA',
            fullname: 'California',
            lat: 38.555605,
            long: -121.468926
        }, {
            abbreviation: 'CO',
            fullname: 'Colorado',
            lat: 39.7391667,
            long: -104.984167
        }, {
            abbreviation: 'CT',
            fullname: 'Connecticut',
            lat: 41.767,
            long: -72.677
        }, {
            abbreviation: 'DE',
            fullname: 'Delaware',
            lat: 39.161921,
            long: -75.526755
        }, {
            abbreviation: 'FL',
            fullname: 'Florida',
            lat: 30.4518,
            long: -84.27277
        }, {
            abbreviation: 'GA',
            fullname: 'Georgia',
            lat: 33.76,
            long: -84.39
        }, {
            abbreviation: 'HI',
            fullname: 'Hawaii',
            lat: 21.30895,
            long: -157.826182
        }, {
            abbreviation: 'ID',
            fullname: 'Idaho',
            lat: 43.613739,
            long: -116.237651
        }, {
            abbreviation: 'IL',
            fullname: 'Illinois',
            lat: 39.783250,
            long: -89.650373
        }, {
            abbreviation: 'IN',
            fullname: 'Indiana',
            lat: 39.790942,
            long: -86.147685
        }, {
            abbreviation: 'IA',
            fullname: 'Iowa',
            lat: 41.590939,
            long: -93.620866
        }, {
            abbreviation: 'KS',
            fullname: 'Kansas',
            lat: 39.04,
            long: -95.69
        }, {
            abbreviation: 'KY',
            fullname: 'Kentucky',
            lat: 38.197274,
            long: -84.86311
        }, {
            abbreviation: 'LA',
            fullname: 'Louisiana',
            lat: 30.45809,
            long: -91.140229
        }, {
            abbreviation: 'ME',
            fullname: 'Maine',
            lat: 44.323535,
            long: -69.765261
        }, {
            abbreviation: 'MD',
            fullname: 'Maryland',
            lat: 38.972945,
            long: -76.501157
        }, {
            abbreviation: 'MA',
            fullname: 'Massachusetts',
            lat: 42.2352,
            long: -71.0275
        }, {
            abbreviation: 'MI',
            fullname: 'Michigan',
            lat: 42.7335,
            long: -84.5467
        }, {
            abbreviation: 'MN',
            fullname: 'Minnesota',
            lat: 44.95,
            long: -93.094
        }, {
            abbreviation: 'MS',
            fullname: 'Mississippi',
            lat: 32.320,
            long: -90.207
        }, {
            abbreviation: 'MO',
            fullname: 'Missouri',
            lat: 38.572954,
            long: -92.189283
        }, {
            abbreviation: 'MT',
            fullname: 'Montana',
            lat: 46.595805,
            long: -112.027031
        }, {
            abbreviation: 'NE',
            fullname: 'Nebraska',
            lat: 40.809868,
            long: -96.675345
        }, {
            abbreviation: 'NV',
            fullname: 'Nevada',
            lat: 39.160949,
            long: -119.753877
        }, {
            abbreviation: 'NH',
            fullname: 'New Hampshire',
            lat: 43.220093,
            long: -71.549127
        }, {
            abbreviation: 'NJ',
            fullname: 'New Jersey',
            lat: 40.221741,
            long: -74.756138
        }, {
            abbreviation: 'NM',
            fullname: 'New Mexico',
            lat: 35.667231,
            long: -105.964575
        }, {
            abbreviation: 'NY',
            fullname: 'New York',
            lat: 42.659829,
            long: -73.781339
        }, {
            abbreviation: 'NC',
            fullname: 'North Carolina',
            lat: 35.771,
            long: -78.638
        }, {
            abbreviation: 'ND',
            fullname: 'North Dakota',
            lat: 48.813343,
            long: -100.779004
        }, {
            abbreviation: 'OH',
            fullname: 'Ohio',
            lat: 39.962245,
            long: -83.000647
        }, {
            abbreviation: 'OK',
            fullname: 'Oklahoma',
            lat: 35.482309,
            long: -97.534994
        }, {
            abbreviation: 'OR',
            fullname: 'Oregon',
            lat: 44.931109,
            long: -123.029159
        }, {
            abbreviation: 'PA',
            fullname: 'Pennsylvania',
            lat: 40.269789,
            long: -76.875613
        }, {
            abbreviation: 'RI',
            fullname: 'Rhode Island',
            lat: 41.82355,
            long: -71.422132
        }, {
            abbreviation: 'SC',
            fullname: 'South Carolina',
            lat: 34.000,
            long: -81.035
        }, {
            abbreviation: 'SD',
            fullname: 'South Dakota',
            lat: 44.367966,
            long: -100.336378
        }, {
            abbreviation: 'TN',
            fullname: 'Tennessee',
            lat: 36.165,
            long: -86.784
        }, {
            abbreviation: 'TX',
            fullname: 'Texas',
            lat: 30.266667,
            long: -97.75
        }, {
            abbreviation: 'UT',
            fullname: 'Utah',
            lat: 40.7547,
            long: -111.892622
        }, {
            abbreviation: 'VT',
            fullname: 'Vermont',
            lat: 44.26639,
            long: -72.57194
        }, {
            abbreviation: 'VA',
            fullname: 'Virginia',
            lat: 37.54,
            long: -77.46
        }, {
            abbreviation: 'WA',
            fullname: 'Washington',
            lat: 47.042418,
            long: -122.893077
        }, {
            abbreviation: 'WV',
            fullname: 'West Virginia',
            lat: 38.349497,
            long: -81.633294
        }, {
            abbreviation: 'WI',
            fullname: 'Wisconsin',
            lat: 43.074722,
            long: -89.384444
        }, {
            abbreviation: 'WY',
            fullname: 'Wyoming',
            lat: 41.145548,
            long: -104.802042
        }];
    }]);



    licenseControllers.controller('testController', ['$scope', '$location', function($scope, $location) {
        var vm = this;

        vm.speak = "Hello world!";
        vm.location = '';
        // vm.showHomeButton = function()

        // $scope.showHomeButton = $location.path() !== '/';
        console.log($location.path());



    }]);


})();


// licenseControllers.controller('testCtrl', ['', function() {
//   var vm = this;
//   vm.whatisfactorydoing? = FACTORYNAME somethign here;
// }]);