$(document).ready(function () {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 51.5072 lng: 0.1276 }, // Coordinates of Seattle
    zoom: 8,
    mapTypeId: "roadmap",
  });
});
