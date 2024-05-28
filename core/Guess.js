const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

class Guess {
  #rl = readline.createInterface({ input, output });

  userNumber() {
    return new Promise((resolve, reject) => {
      this.#rl.question("Угадайте число от 0 до 99: ", (number) => {
        resolve(number);
      });
    });
  }
}

module.exports = Guess;
