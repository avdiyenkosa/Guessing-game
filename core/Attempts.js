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
        isRound: this.#count < this.#max,
      };
      if (!result.isWinner && result.isRound) {
        this.#count++;
      }
      return result;
    });
  }
}

module.exports = Attempts;
