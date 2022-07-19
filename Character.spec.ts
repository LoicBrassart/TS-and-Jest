import { Character } from "./src/classes";

describe("The Character class", () => {
  it("can instantiate", () => {
    const drizzt = new Character(18, 18, 18);
    expect(drizzt).toBeInstanceOf(Character);
  });
});
