const Diff = require("./Diff");
const Secret = require("./Secret");
const Guess = require("./Guess");

describe("Diff", () => {
  let diff;
  let secret;
  let guess;

  beforeEach(() => {
    secret = new Secret();
    guess = new Guess();
    diff = new Diff(secret, guess);
  });

  it("Класс создается", () => {
    expect(diff).toBeDefined();
  });

  it("Метод result возвращает разницу между секретным числом и числом пользователя", async () => {
    const userNumber = 50;
    guess.userNumber = jest.fn().mockResolvedValue(userNumber);
    secret.secretNumber = jest.fn().mockReturnValue(75);

    const result = await diff.result();

    expect(result).toBe(75 - userNumber);
    expect(guess.userNumber).toHaveBeenCalled();
    expect(secret.secretNumber).toHaveBeenCalled();
  });
});
