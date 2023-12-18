import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  cloneCar() {
    const NewCar = super.constructor[Symbol.species];
    return new NewCar();
  }
}
