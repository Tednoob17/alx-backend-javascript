export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(size) {
    this._size = size;
  }

  }

  toString() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }
}
