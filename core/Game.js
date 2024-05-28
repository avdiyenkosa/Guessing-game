class Game {
  #attempts;

  constructor(Attempts) {
    this.#attempts = Attempts;
  }

  start() {
    this.#attempts.matches().then((result) => {
      result.isRound ? this.start() : this.#stop(result);
      return;
    });
  }

  #stop(result) {
    if (result.isWinner) {
      console.log("Победа!!!");
    } else {
      console.log("Попытки закончились. Вы проиграли :(");
    }
    console.log("Для выхода из игры нажмите Ctrl + C");
  }
}

module.exports = Game;
