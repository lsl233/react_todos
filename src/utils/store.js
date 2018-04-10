class Store {
  constructor (key) {
    this.store = window.localStorage;
    this.key = key;
  }

  add (value) {
    return this.store.setItem(this.key, JSON.stringify(value));
  }

  get () {
    return JSON.parse(this.store.getItem(this.key));
  }

  remove (key) {
    return this.store.removeItem(key);
  }
}

export default Store;