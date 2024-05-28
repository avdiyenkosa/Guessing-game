class Attempts {
  #diff;
  #max;
  #count = 1;

  constructor(DiffToString, numberOfAttempts) {
    this.#diff = DiffToString;
    this.#max = numberOfAttempts;
  }

  async matches() {
    return this.#diff.toString().then((diff) => {
      const result = {
        isWinner: diff == 0,
        isRaund: this.#count < this.#max,
      };
      if (!result.isWinner && result.isRaund) {
        this.#count++;
      }
      return result;
    });
  }
}

module.exports = Attempts;
