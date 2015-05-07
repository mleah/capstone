//testing of Haversine formula-used for determining distance between two lat/long pairs
//between montgomery, alabama and juneau, alaska

// 32.361538;
        // vm.lon1 = -86.279118;
        // vm.lat2 = 58.301935;
        // vm.lon2 = -134.419740;

function distanceTo(lat1, lon1, lat2, lon2, unit) {
    var rlat1 = Math.PI * lat1 / 180;
    var rlat2 = Math.PI * lat2 / 180;
    var rlon1 = Math.PI * lon1 / 180;
    var rlon2 = Math.PI * lon2 / 180;
    var theta = lon1 - lon2;
    var rtheta = Math.PI * theta / 180;
    var dist = Math.sin(rlat1) * Math.sin(rlat2) + Math.cos(rlat1) * Math.cos(rlat2) * Math.cos(rtheta);
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == "K") {
        dist = dist * 1.609344;
    }
    if (unit == "N") {
        dist = dist * 0.8684;
    }
    console.log(dist);
    return dist;
};

distanceTo(32.361538, -86.279118, 58.301935, -134.419740);