import Attempts from "./Attempts";

describe("Attempts", () => {
  let diffToStringMock;

  beforeEach(() => {
    diffToStringMock = {
      toString: jest.fn(),
    };
  });

  it("Класс создается", () => {
    const attempts = new Attempts(diffToStringMock, 3);
    expect(attempts).toBeDefined();
  });

  it("Должен возвращать выигрыш, когда разница равна 0", async () => {
    diffToStringMock.toString.mockResolvedValue(0);
    const attempts = new Attempts(diffToStringMock, 3);

    const result = await attempts.matches();

    expect(result).toEqual({
      isWinner: true,
      isRound: true,
    });
    expect(diffToStringMock.toString).toHaveBeenCalled();
  });

  it("Должен продолжать игру когда разница не равна 0 и не является последним раундом", async () => {
    diffToStringMock.toString.mockResolvedValue(1);
    const attempts = new Attempts(diffToStringMock, 3);

    const result = await attempts.matches();

    expect(result).toEqual({
      isWinner: false,
      isRound: true,
    });
    expect(diffToStringMock.toString).toHaveBeenCalled();
  });

  it("Должен возращать проигрыш когда количество попыток исчерпано и разница не равна 0", async () => {
    diffToStringMock.toString.mockResolvedValue(1);
    const attempts = new Attempts(diffToStringMock, 1);

    const result = await attempts.matches();

    expect(result).toEqual({
      isWinner: false,
      isRound: false,
    });
    expect(diffToStringMock.toString).toHaveBeenCalled();
  });

  it("Должен увеличивать счетчик попыток, если не последний раунд и если нет выигрыша", async () => {
    diffToStringMock.toString.mockResolvedValue(1);
    const attempts = new Attempts(diffToStringMock, 3);

    const result = await attempts.matches();
    expect(result).toEqual(
      expect.objectContaining({ isWinner: false, isRound: true })
    );
  });
});
