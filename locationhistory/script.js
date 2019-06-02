function initMap() {
    let mapBounds = 150;
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 0, lng: 0 },
        zoom: 3
    });
}

function displayText(text) {
    document.querySelector(".distance").innerText = text;
}

function update() {
    let file = document.querySelector("#files").files[0];
    let startDate = new Date(document.querySelector("#startDateInput").value);
    let endDate = new Date(document.querySelector("#endDateInput").value);

    if(file===undefined){
        alert("Location history file has not been provided");
        return;
    }

    let reader = new FileReader();
    displayText("Reading file...");
    reader.onload = () => {
        let text = reader.result;
        displayText("Parsing json...");
        let data = JSON.parse(text);
        displayText("Transforming data...");
        let geoData = data.locations.map(location => {
            return {
                lat: location.latitudeE7 / 1e7,
                lng: location.longitudeE7 / 1e7,
                date: new Date(+location.timestampMs)
            };
        }).filter(point => point.date > startDate && point.date < endDate);
        displayText("Sorting by date...");
        let sorted = geoData.sort((a, b) => a.date - b.date);
        displayLine(geoData);
    }
    reader.readAsText(file);
}

function getDistance(l1, l2) {
    return google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(l1.lat, l1.lng), new google.maps.LatLng(l2.lat, l2.lng));
}

function displayLine(path) {
    displayText("Filtering data...");

    let threshold = 1000;
    let filteredPath = path.slice(0, 1);
    let previousLocation = path[0];
    let totalDistance = 0;
    for (let location of path) {
        let distance = getDistance(location, previousLocation);
        totalDistance += distance;
        if (distance > threshold) {
            previousLocation = location;
            filteredPath.push(location);
        }
    }

    displayText("Total distance: " + Math.round(totalDistance / 100) / 10 + "km");

    let mapLine = new google.maps.Polyline({
        path: filteredPath,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });

    mapLine.setMap(map);
}