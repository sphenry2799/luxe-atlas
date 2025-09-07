let map, marker, autocomplete, geocoder;

function initMap() {
  // Initialize map
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 51.5074, lng: -0.1278 },
    zoom: 12,
    mapTypeId: "roadmap",
  });

  marker = new google.maps.AdvancedMarkerElement({ map });
  geocoder = new google.maps.Geocoder();

  // Autocomplete setup
  autocomplete = new google.maps.places.PlaceAutocompleteElement(
    document.getElementById("address"),
    {
      fields: ["place_id", "geometry", "formatted_address", "name"],
    }
  );

  autocomplete.addListener("place_changed", () => {
    const place = autocomplete.getPlace();
    if (!place.geometry || !place.geometry.location) {
      geocodeByText(document.getElementById("address").value);
      return;
    }
    setLocation(place.geometry.location, place.formatted_address || place.name);
  });

  // Enter key fallback
  document.getElementById("address").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      geocodeByText(e.target.value);
    }
  });
}

function geocodeByText(text) {
  if (!text.trim()) return;
  geocoder.geocode({ address: text }, (results, status) => {
    if (status === "OK" && results[0]) {
      setLocation(results[0].geometry.location, results[0].formatted_address);
    } else if (status === "ZERO_RESULTS") {
      alert("Address not found. Try a broader query.");
    } else {
      console.error("Geocode failed:", status);
      alert("Couldn’t look up that address (" + status + ")");
    }
  });
}

function setLocation(latlng, label) {
  marker.setPosition(latlng);
  map.panTo(latlng);
  map.setZoom(16);
  marker.setTitle(label || "");
}
