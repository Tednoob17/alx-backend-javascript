import Currency from './3-currency';


  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof (amount) !== 'number') throw new TypeError('Amount must be a number');
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (!(currency instanceof Currency)) throw new TypeError('Currency must be a Currency');
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, converstionRate) {
    return amount * converstionRate;
  }
}
