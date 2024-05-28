const readline = require("node:readline");
import Guess from "./Guess";

describe("Guess", () => {
  let fakeCreateInterface;
  let questionMock;

  beforeEach(() => {
    questionMock = jest.fn((query, callback) => callback("42")); // Мокируем метод question, чтобы он сразу же возвращал "42"

    fakeCreateInterface = jest
      .spyOn(readline, "createInterface")
      .mockImplementation(() => {
        return {
          question: questionMock,
          close: jest.fn(),
        };
      });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("Класс создается", () => {
    const guess = new Guess();
    expect(guess).toBeDefined();
  });
  it("Метод userNumber возвращает Promise", () => {
    const guess = new Guess();
    const result = guess.userNumber();
    expect(result).toBeInstanceOf(Promise);
  });
  test("Метод возвращает введенное пользователем число", async () => {
    const guess = new Guess();
    const result = await guess.userNumber();

    expect(result).toBe("42");
    expect(fakeCreateInterface).toHaveBeenCalled();
    expect(questionMock).toHaveBeenCalledWith(
      "Угадайте число от 0 до 99: ",
      expect.any(Function)
    );
  });
});
