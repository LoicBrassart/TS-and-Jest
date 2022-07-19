import { Character } from "../src/classes";

describe("The Character class", () => {
  it("can instantiate", () => {
    const drizzt = new Character(12, 20, 15, 8, 17, 7);
    expect(drizzt).toBeInstanceOf(Character);
    expect(drizzt.dex).toBe(5);
    expect(drizzt.cha).toBe(-2);

    const bruenor = new Character(20, 11, 20);
    expect(bruenor).toBeInstanceOf(Character);
    expect(bruenor.cha).toBe(0);

    try {
      new Character(61, -1, 12);
    } catch (err) {
      expect((err as Error).message).toBe("The new strength is invalid");
    }

    // try {
    //   new Character();
    // } catch (err) {
    //   expect(err).not.toBeInstanceOf(Character);
    // }
  });

  it("allows to get/set caracteristics", () => {
    const drizzt = new Character(10, 10, 10);
    expect(drizzt.str).toBe(0);
    expect(drizzt.dex).toBe(0);
    drizzt.dex = 20;
    expect(drizzt.str).toBe(0);
    expect(drizzt.dex).toBe(5);
    try {
      drizzt.dex = 200;
    } catch (err) {
      expect((err as Error).message).toBe("The new dexterity is invalid");
      expect(drizzt.dex).toBe(5);
    }
    try {
      drizzt.dex = 18.5;
    } catch (err) {
      expect((err as Error).message).toBe("The new dexterity is invalid");
      expect(drizzt.dex).toBe(5);
    }
  });
});
