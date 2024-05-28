const Game = require("./Game");

describe("Game", () => {
  let attemptsMock;
  let consoleLogSpy;

  beforeEach(() => {
    attemptsMock = {
      matches: jest.fn(),
    };

    consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("Класс создается", () => {
    const game = new Game(attemptsMock);
    expect(game).toBeDefined();
  });

  it("Kогда значение isWinner равно true объявляется Победа", async () => {
    attemptsMock.matches.mockResolvedValue({ isWinner: true, isRound: false });
    const game = new Game(attemptsMock);

    await game.start();

    expect(attemptsMock.matches).toHaveBeenCalled();
    expect(consoleLogSpy).toHaveBeenCalledWith("Победа!!!");
  });

  it('Когда занчение isWinner и isRound равно false Сообщаем "Попытки закончились. Вы проиграли :("', async () => {
    attemptsMock.matches.mockResolvedValue({ isWinner: false, isRound: false });
    const game = new Game(attemptsMock);

    await game.start();

    expect(attemptsMock.matches).toHaveBeenCalled();
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "Попытки закончились. Вы проиграли :("
    );
  });
});
