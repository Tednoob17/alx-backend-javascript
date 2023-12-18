
  get brand() {
    return this._brand;
  }

  set brand(brand) {
    this._brand = brand;
  }

  get motor() {
    return this._motor;
  }

  set motor(motor) {
    this._motor = motor;
  }

  get color() {
    return this._color;
  }

  set color(color) {
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const NewCar = this.constructor[Symbol.species] || this.constructor;
    return new NewCar();
  }
}
