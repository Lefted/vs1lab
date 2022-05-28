// File origin: VS1LAB A3

/**
 * This script is a template for exercise VS1lab/Aufgabe3
 * Complete all TODOs in the code documentation.
 */

/** *
 * A class representing geotags.
 * GeoTag objects should contain at least all fields of the tagging form.
 */
class GeoTag {
  name = "";
  latitude = 0.0;
  longitude = 0.0;
  hashtag = "";

  constructor(name, latitude, longitude, hashtag) {
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
    this.hashtag = hashtag;
  }

  getDistanceTo(longitude, latitude) {
    const x1 = this.longitude;
    const y1 = this.latitude;
    const x2 = longitude;
    const y2 = latitude;
    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distance;
  }
}

module.exports = GeoTag;
