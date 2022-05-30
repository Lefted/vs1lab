// File origin: VS1LAB A3

/**
 * This script is a template for exercise VS1lab/Aufgabe3
 * Complete all TODOs in the code documentation.
 */

/**
 * A class for in-memory-storage of geotags
 *
 * Use an array to store a multiset of geotags.
 * - The array must not be accessible from outside the store.
 *
 * Provide a method 'addGeoTag' to add a geotag to the store.
 *
 * Provide a method 'removeGeoTag' to delete geo-tags from the store by name.
 *
 * Provide a method 'getNearbyGeoTags' that returns all geotags in the proximity of a location.
 * - The location is given as a parameter.
 * - The proximity is computed by means of a radius around the location.
 *
 * Provide a method 'searchNearbyGeoTags' that returns all geotags in the proximity of a location that match a keyword.
 * - The proximity constrained is the same as for 'getNearbyGeoTags'.
 * - Keyword matching should include partial matches from name or hashtag fields.
 */
const GeoTagExamples = require("../models/geotag-examples");
const GeoTag = require("../models/geotag");

class InMemoryGeoTagStore {
  _geoTags = [];

  constructor() {
    GeoTagExamples.tagList.forEach((geoTag) => {
      this._geoTags.push(new GeoTag(...geoTag));
    });
  }

  addGeoTag(geoTag) {
    this._geoTags.push(geoTag);
  }

  removeGeoTag(name) {
    this._geoTags = this._geoTags.filter((geoTag) => geoTag.name !== name);
  }

  getNearbyGeoTags(longitude, latitude, radius) {
    return this._geoTags.filter((geoTag) => {
      const distance = geoTag.getDistanceTo(longitude, latitude);
      return distance <= radius;
    });
  }

  searchNearbyGeoTags(longitude, latitude, radius, keyword) {
    return this.getNearbyGeoTags(longitude, latitude, radius).filter(
      (geoTag) => geoTag.name.includes(keyword) || geoTag.name.includes(keyword)
    );
  }
}

module.exports = InMemoryGeoTagStore;
