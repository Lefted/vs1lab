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
  _name = "";
  _latitude = 0.0;
  _longitude = 0.0;
  _hashtag = "";

  constructor(name, latitude, longitude, hashtag) {
    this._name = name;
    this._latitude = latitude;
    this._longitude = longitude;
    this._hashtag = hashtag;
  }

  getLatitude() {
    return this._latitude;
  }

  getLongitude() {
    return this._longitude;
  }

  getName() {
    return this._name;
  }

  getHashtag() {
    return this._hashtag;
  }

  getDistanceTo(longitude, latitude) {
    const x1 = this._longitude;
    const y1 = this._latitude;
    const x2 = longitude;
    const y2 = latitude;
    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distance;
  }
}

module.exports = GeoTag;
