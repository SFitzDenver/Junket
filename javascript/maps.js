// Clickable - Geo Location - Map // 
var map, infoWindow;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
  	center: {lat: -34.397, lng: 150.644},
  	zoom: 5
});
infoWindow = new google.maps.InfoWindow;
	var geocoder = new google.maps.Geocoder;
	geocoder.geocode({'address': mapCountry}, function(results, status) {
		if (status === 'OK') {
			map.setCenter(results[0].geometry.location);
			new google.maps.Marker({
				map: map,
				position: results[0].geometry.location
	        });
	    } else {
			window.alert('Geocode was not successful for the following reason: ' + status);
	}
	});
	// Pin added click event
	map.addListener('click', function(e) {
  		placeMarkerAndPanTo(e.latLng, map);
  		console.log(infoWindow);
	});
	infoWindow = new google.maps.InfoWindow;
}

// Pan to location funtion
function placeMarkerAndPanTo(latLng, map) {
	var marker = new google.maps.Marker({
  	position: latLng,
  	map: map
});
map.panTo(latLng);
}
console.log(map);

// HTML5 geolocation.
if (navigator.geolocation) {
  	navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };	
    // pos = Users current location - userLocation		
    console.log(pos); 
    infoWindow.setPosition(pos);
    infoWindow.setContent('Location found.');
    infoWindow.open(map);
    map.setCenter(pos);
  }, function() {
    handleLocationError(true, infoWindow, map.getCenter());
  });
} else {
  // Browser doesn't support Geolocation
  handleLocationError(false, infoWindow, map.getCenter());
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
infoWindow.setPosition(pos);
infoWindow.setContent(browserHasGeolocation ?
                      'Error: The Geolocation service failed.' :
                      'Error: Your browser doesn\'t support geolocation.');
infoWindow.open(map);
}


// In the following example, markers appear when the user clicks on the map.
// The markers are stored in an array.
// The user can then click an option to hide, show or delete the markers.
// var map;
// var markers = [];

// function initMap() {
// var haightAshbury = {lat: 37.769, lng: -122.446};

// map = new google.maps.Map(document.getElementById('map'), {
//   zoom: 12,
//   center: haightAshbury,
//   mapTypeId: 'terrain'
// });

// This event listener will call addMarker() when the map is clicked.
// map.addListener('click', function(event) {
//   addMarker(event.latLng);
// });

// Adds a marker at the center of the map.
// addMarker(haightAshbury);


// // Adds a marker to the map and push to the array.
// function addMarker(location) {
// var marker = new google.maps.Marker({
//   position: location,
//   map: map
// });
// markers.push(marker);
// }

// Sets the map on all markers in the array.
// function setMapOnAll(map) {
// for (var i = 0; i < markers.length; i++) {
//   markers[i].setMap(map);
// }
// }

// // Removes the markers from the map, but keeps them in the array.
// function clearMarkers() {
// setMapOnAll(null);
// }

// // Shows any markers currently in the array.
// function showMarkers() {
// setMapOnAll(map);
// }

// // Deletes all markers in the array by removing references to them.
// function deleteMarkers() {
// clearMarkers();
// markers = [];
// }

// //-------------------------------------
// // Basic Map // Please leave for reference
// function initMap() {
// 	var map = new google.maps.Map(document.getElementById('map'), {zoom: 5});
// 	var geocoder = new google.maps.Geocoder;
// 	geocoder.geocode({'address': mapCountry}, function(results, status) {
// 		if (status === 'OK') {
// 			map.setCenter(results[0].geometry.location);
// 			new google.maps.Marker({
// 				map: map,
// 				position: results[0].geometry.location
// 	        });
// 	    } else {
// 			window.alert('Geocode was not successful for the following reason: ' + status);
// 	}
// 	});
// }
// //--------------------------------------