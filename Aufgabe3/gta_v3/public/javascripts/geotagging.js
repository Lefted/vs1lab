// File origin: VS1LAB A2
/* eslint-disable no-unused-vars */
// This script is executed when the browser loads index.html.

// "console.log" writes to the browser's console.
// The console window must be opened explicitly in the browser.
// Try to find this output in the browser...
console.log("The geoTagging script is going to start...");

/**
 * TODO: 'updateLocation'
 * A function to retrieve the current location and update the page.
 * It is called once the page has been fully loaded.
 */

function updateLocation() {
  const latitudeInput = document.getElementById("latitude");
  const longitudeInput = document.getElementById("longitude");
  const latitudeDiscoveryInput = document.getElementById("latitudeDiscovery");
  const longitudeDiscoveryInput = document.getElementById("longitudeDiscovery");

  const mapManager = new MapManager("mcn0x3RJP1bDTLFbHvPWRRmlu0FFltLr");
  if (
    latitudeInput.value &&
    longitudeInput.value &&
    latitudeInput.value &&
    longitudeDiscoveryInput.value
  ) {
    console.log("Skipping location retrieval.");
    const mapQuestUrl = mapManager.getMapUrl(
      latitudeInput.value,
      longitudeInput.value
    );
    document.getElementById("mapView").src = mapQuestUrl;
    return;
  }

  LocationHelper.findLocation(({ latitude, longitude }) => {
    latitudeInput.value = latitude;
    longitudeInput.value = longitude;
    latitudeDiscoveryInput.value = latitude;
    longitudeDiscoveryInput.value = longitude;

    const mapQuestUrl = mapManager.getMapUrl(latitude, longitude);
    document.getElementById("mapView").src = mapQuestUrl;
  });
}

// Wait for the page to fully load its DOM content, then call updateLocation
document.addEventListener("DOMContentLoaded", () => {
  updateLocation();
});
