class DiffToString {
  #diff;

  constructor(Diff) {
    this.#diff = Diff;
  }

  toString() {
    return this.#diff.result().then((result) => {
      if (result < 0) {
        console.log("Загаданное число меньше");
      } else if (result > 0) {
        console.log("Загаданное число больше");
      } else {
        console.log("Победа!!!");
      }
      return result;
    });
  }
}

module.exports = DiffToString;
