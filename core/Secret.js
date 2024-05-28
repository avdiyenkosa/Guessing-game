class Secret {
  #num;
  constructor() {
    this.#num = Math.round(Math.random() * 100);
  }
  secretNumber() {
    return this.#num;
  }
}

module.exports = Secret
