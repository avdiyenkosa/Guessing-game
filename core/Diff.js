class Diff {
  #secret;
  #guess;

  constructor(Secret, Guess) {
    this.#secret = Secret;
    this.#guess = Guess;
  }

  result() {
    return this.#guess
      .userNumber()
      .then((number) => this.#secret.secretNumber() - number);
  }
}

module.exports = Diff;
