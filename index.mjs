import Secret from "./core/Secret.js";
import Guess from "./core/Guess.js";
import Diff from "./core/Diff.js";
import DiffToString from "./core/DiffToString.js";
import Attempts from "./core/Attempts.js";
import Game from "./core/Game.js";

const numberOfAttempts = 5;

new Game(
  new Attempts(
    new DiffToString(new Diff(new Secret(), new Guess())),
    numberOfAttempts
  )
).start();
