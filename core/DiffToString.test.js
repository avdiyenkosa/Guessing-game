import DiffToString from "./DiffToString";

describe("DiffToString", () => {
  let diffMock;

  beforeEach(() => {
    diffMock = {
      result: jest.fn(),
    };
  });

  it("Класс создается", () => {
    const diffToString = new DiffToString(diffMock);
    expect(diffToString).toBeDefined();
  });

  it('Должен вывести в консоль "Загаданное число меньше" когда результат отрицательный', async () => {
    diffMock.result.mockResolvedValue(-1);
    const diffToString = new DiffToString(diffMock);
    console.log = jest.fn();

    const result = await diffToString.toString();

    expect(result).toBe(-1);
    expect(console.log).toHaveBeenCalledWith("Загаданное число меньше");
  });

  it('Должен вывести в консоль "Загаданное число больше" когда результат положительный', async () => {
    diffMock.result.mockResolvedValue(1);
    const diffToString = new DiffToString(diffMock);
    console.log = jest.fn();

    const result = await diffToString.toString();

    expect(result).toBe(1);
    expect(console.log).toHaveBeenCalledWith("Загаданное число больше");
  });

  it('Должен вывести в консоль "Победа!!!" когда результат равен 0', async () => {
    diffMock.result.mockResolvedValue(0);
    const diffToString = new DiffToString(diffMock);
    console.log = jest.fn();

    const result = await diffToString.toString();

    expect(result).toBe(0);
    expect(console.log).toHaveBeenCalledWith("Победа!!!");
  });
});
