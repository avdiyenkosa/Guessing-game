import Secret from "./Secret";

describe("Secret", () => {
  it("Класс создается", () => {
    const secret = new Secret();
    expect(secret).toBeDefined();
  });
  it("Класс возвращает рандомное число от 0 до 99", () => {
    const secret = new Secret();
    expect(secret.secretNumber()).toBeGreaterThanOrEqual(0);
    expect(secret.secretNumber()).toBeLessThanOrEqual(99);
  });
});
