(function() {
    var plateFactories = angular.module('plateFactories', []);

    //put this in JSON eventually
    plateFactories.factory('PlateFactory', [
        function() {

            var plateArray = [{
                abbreviation: 'AL',
                fullname: 'Alabama',
                lat: 32.361538,
                long: -86.279118,
                isFound: false,
                index: 0,
                capital: 'Montgomery'
            }, {
                abbreviation: 'AK',
                fullname: 'Alaska',
                lat: 58.301935,
                long: -134.419740,
                isFound: false,
                index: 1,
                capital: 'Juneau'
            }, {
                abbreviation: 'AZ',
                fullname: 'Arizona',
                lat: 33.448457,
                long: -112.073844,
                isFound: false,
                index: 2,
                capital: 'Phoenix'
            }, {
                abbreviation: 'AR',
                fullname: 'Arkansas',
                lat: 34.736009,
                long: -92.331122,
                isFound: false,
                index: 3,
                capital: 'Little Rock'
            }, {
                abbreviation: 'CA',
                fullname: 'California',
                lat: 38.555605,
                long: -121.468926,
                isFound: false,
                index: 4,
                capital: 'Sacramento'
            }, {
                abbreviation: 'CO',
                fullname: 'Colorado',
                lat: 39.7391667,
                long: -104.984167,
                isFound: false,
                index: 5,
                capital: 'Denver'
            }, {
                abbreviation: 'CT',
                fullname: 'Connecticut',
                lat: 41.767,
                long: -72.677,
                isFound: false,
                index: 6,
                capital: 'Hartford'
            }, {
                abbreviation: 'DE',
                fullname: 'Delaware',
                lat: 39.161921,
                long: -75.526755,
                isFound: false,
                index: 7,
                capital: 'Dover'
            }, {
                abbreviation: 'FL',
                fullname: 'Florida',
                lat: 30.4518,
                long: -84.27277,
                isFound: false,
                index: 8,
                capital: 'Tallahassee'
            }, {
                abbreviation: 'GA',
                fullname: 'Georgia',
                lat: 33.76,
                long: -84.39,
                isFound: false,
                index: 9,
                capital: 'Atlanta'
            }, {
                abbreviation: 'HI',
                fullname: 'Hawaii',
                lat: 21.30895,
                long: -157.826182,
                isFound: false,
                index: 10,
                capital: 'Honolulu'
            }, {
                abbreviation: 'ID',
                fullname: 'Idaho',
                lat: 43.613739,
                long: -116.237651,
                isFound: false,
                index: 11,
                capital: 'Boise'
            }, {
                abbreviation: 'IL',
                fullname: 'Illinois',
                lat: 39.783250,
                long: -89.650373,
                isFound: false,
                index: 12,
                capital: 'Springfield'
            }, {
                abbreviation: 'IN',
                fullname: 'Indiana',
                lat: 39.790942,
                long: -86.147685,
                isFound: false,
                index: 13,
                capital: 'Indianapolis'
            }, {
                abbreviation: 'IA',
                fullname: 'Iowa',
                lat: 41.590939,
                long: -93.620866,
                isFound: false,
                index: 14,
                capital: 'Des Moines'
            }, {
                abbreviation: 'KS',
                fullname: 'Kansas',
                lat: 39.04,
                long: -95.69,
                isFound: false,
                index: 15,
                capital: 'Topeka'
            }, {
                abbreviation: 'KY',
                fullname: 'Kentucky',
                lat: 38.197274,
                long: -84.86311,
                isFound: false,
                index: 16,
                capital: 'Frankfort'
            }, {
                abbreviation: 'LA',
                fullname: 'Louisiana',
                lat: 30.45809,
                long: -91.140229,
                isFound: false,
                index: 17,
                capital: 'Baton Rouge'
            }, {
                abbreviation: 'ME',
                fullname: 'Maine',
                lat: 44.323535,
                long: -69.765261,
                isFound: false,
                index: 18,
                capital: 'Augusta'
            }, {
                abbreviation: 'MD',
                fullname: 'Maryland',
                lat: 38.972945,
                long: -76.501157,
                isFound: false,
                index: 19,
                capital: 'Annapolis'
            }, {
                abbreviation: 'MA',
                fullname: 'Massachusetts',
                lat: 42.2352,
                long: -71.0275,
                isFound: false,
                index: 20,
                capital: 'Boston'
            }, {
                abbreviation: 'MI',
                fullname: 'Michigan',
                lat: 42.7335,
                long: -84.5467,
                isFound: false,
                index: 21,
                capital: 'Lansing'
            }, {
                abbreviation: 'MN',
                fullname: 'Minnesota',
                lat: 44.95,
                long: -93.094,
                isFound: false,
                index: 22,
                capital: 'Saint Paul'
            }, {
                abbreviation: 'MS',
                fullname: 'Mississippi',
                lat: 32.320,
                long: -90.207,
                isFound: false,
                index: 23,
                capital: 'Jackson'
            }, {
                abbreviation: 'MO',
                fullname: 'Missouri',
                lat: 38.572954,
                long: -92.189283,
                isFound: false,
                index: 24,
                capital: 'Jefferson City'
            }, {
                abbreviation: 'MT',
                fullname: 'Montana',
                lat: 46.595805,
                long: -112.027031,
                isFound: false,
                index: 25,
                capital: 'Helena'
            }, {
                abbreviation: 'NE',
                fullname: 'Nebraska',
                lat: 40.809868,
                long: -96.675345,
                isFound: false,
                index: 26,
                capital: 'Lincoln'
            }, {
                abbreviation: 'NV',
                fullname: 'Nevada',
                lat: 39.160949,
                long: -119.753877,
                isFound: false,
                index: 27,
                capital: 'Carson City'
            }, {
                abbreviation: 'NH',
                fullname: 'New Hampshire',
                lat: 43.220093,
                long: -71.549127,
                isFound: false,
                index: 28,
                capital: 'Concord'
            }, {
                abbreviation: 'NJ',
                fullname: 'New Jersey',
                lat: 40.221741,
                long: -74.756138,
                isFound: false,
                index: 29,
                capital: 'Trenton'
            }, {
                abbreviation: 'NM',
                fullname: 'New Mexico',
                lat: 35.667231,
                long: -105.964575,
                isFound: false,
                index: 30,
                capital: 'Santa Fe'
            }, {
                abbreviation: 'NY',
                fullname: 'New York',
                lat: 42.659829,
                long: -73.781339,
                isFound: false,
                index: 31,
                capital: 'Albany'
            }, {
                abbreviation: 'NC',
                fullname: 'North Carolina',
                lat: 35.771,
                long: -78.638,
                isFound: false,
                index: 32,
                capital: 'Raleigh'
            }, {
                abbreviation: 'ND',
                fullname: 'North Dakota',
                lat: 48.813343,
                long: -100.779004,
                isFound: false,
                index: 33,
                capital: 'Bismarck'
            }, {
                abbreviation: 'OH',
                fullname: 'Ohio',
                lat: 39.962245,
                long: -83.000647,
                isFound: false,
                index: 34,
                capital: 'Columbus'
            }, {
                abbreviation: 'OK',
                fullname: 'Oklahoma',
                lat: 35.482309,
                long: -97.534994,
                isFound: false,
                index: 35,
                capital: 'Oklahoma City'
            }, {
                abbreviation: 'OR',
                fullname: 'Oregon',
                lat: 44.931109,
                long: -123.029159,
                isFound: false,
                index: 36,
                capital: 'Salem'
            }, {
                abbreviation: 'PA',
                fullname: 'Pennsylvania',
                lat: 40.269789,
                long: -76.875613,
                isFound: false,
                index: 37,
                capital: 'Harrisburg'
            }, {
                abbreviation: 'RI',
                fullname: 'Rhode Island',
                lat: 41.82355,
                long: -71.422132,
                isFound: false,
                index: 38,
                capital: 'Providence'
            }, {
                abbreviation: 'SC',
                fullname: 'South Carolina',
                lat: 34.000,
                long: -81.035,
                isFound: false,
                index: 39,
                capital: 'Columbia'
            }, {
                abbreviation: 'SD',
                fullname: 'South Dakota',
                lat: 44.367966,
                long: -100.336378,
                isFound: false,
                index: 40,
                capital: 'Pierre'
            }, {
                abbreviation: 'TN',
                fullname: 'Tennessee',
                lat: 36.165,
                long: -86.784,
                isFound: false,
                index: 41,
                capital: 'Nashville'
            }, {
                abbreviation: 'TX',
                fullname: 'Texas',
                lat: 30.266667,
                long: -97.75,
                isFound: false,
                index: 42,
                capital: 'Austin'
            }, {
                abbreviation: 'UT',
                fullname: 'Utah',
                lat: 40.7547,
                long: -111.892622,
                isFound: false,
                index: 43,
                capital: 'Salt Lake City'
            }, {
                abbreviation: 'VT',
                fullname: 'Vermont',
                lat: 44.26639,
                long: -72.57194,
                isFound: false,
                index: 44,
                capital: 'Montpelier'
            }, {
                abbreviation: 'VA',
                fullname: 'Virginia',
                lat: 37.54,
                long: -77.46,
                isFound: false,
                index: 45,
                capital: 'Richmond'
            }, {
                abbreviation: 'WA',
                fullname: 'Washington',
                lat: 47.042418,
                long: -122.893077,
                isFound: false,
                index: 46,
                capital: 'Olympia'
            }, {
                abbreviation: 'WV',
                fullname: 'West Virginia',
                lat: 38.349497,
                long: -81.633294,
                isFound: false,
                index: 47,
                capital: 'Charleston'
            }, {
                abbreviation: 'WI',
                fullname: 'Wisconsin',
                lat: 43.074722,
                long: -89.384444,
                isFound: false,
                index: 48,
                capital: 'Madison'
            }, {
                abbreviation: 'WY',
                fullname: 'Wyoming',
                lat: 41.145548,
                long: -104.802042,
                isFound: false,
                index: 49,
                capital: 'Cheyenne'
            }];

            return {
                showPlates: function() {
                    return plateArray;
                },

                getPlate: function(indexNumber) {
                    return plateArray[indexNumber];

                },

                plateIsFound: function(indexNumber) {
                    plateArray[indexNumber].isFound = true;
                }

            };

        }
    ]);

})();