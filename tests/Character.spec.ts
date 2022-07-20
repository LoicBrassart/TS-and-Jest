import { Character } from "../src/classes";

/*TODO
  - rolls avec avantage/desavantage
  - SkillsDefaultStats st une liste de paires Skill:Stat valides
  */

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
    expect(drizzt.baseDex).toBe(20);
    expect(drizzt.dex).toBe(5);
    try {
      drizzt.dex = 200;
    } catch (err) {
      expect((err as Error).message).toBe("The new dexterity is invalid");
      expect(drizzt.baseDex).toBe(20);
      expect(drizzt.dex).toBe(5);
    }
    try {
      drizzt.wis = 18.5;
    } catch (err) {
      expect((err as Error).message).toBe("The new wisdom is invalid");
      expect(drizzt.baseWis).toBe(10);
      expect(drizzt.wis).toBe(0);
    }
  });

  it("allows for get skill mods", () => {
    const drizzt = new Character(10, 10, 10);
    expect(drizzt.mod("acrobatics")).toBe(0);
    drizzt.dex = 20;
    expect(drizzt.mod("acrobatics")).toBe(5);
  });

  it("allows for roll basic skill checks", () => {
    const drizzt = new Character(10, 10, 10);

    jest.spyOn(global.Math, "random").mockReturnValue(0);
    expect(drizzt.roll("acrobatics")).toBe(false);

    jest.spyOn(global.Math, "random").mockReturnValue(0.99);
    expect(drizzt.roll("acrobatics")).toBe(true);

    jest.spyOn(global.Math, "random").mockReturnValue(0.1246832);
    expect(drizzt.roll("acrobatics")).toBe(3);

    jest.clearAllMocks();
  });

  it("allows for roll advanced skill checks", () => {
    const drizzt = new Character(10, 10, 10);

    jest
      .spyOn(global.Math, "random")
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(0);
    expect(drizzt.rollAdv("acrobatics")).toBe(false);

    jest
      .spyOn(global.Math, "random")
      .mockReturnValueOnce(0.99)
      .mockReturnValueOnce(0.99);
    expect(drizzt.rollAdv("acrobatics")).toBe(true);

    jest
      .spyOn(global.Math, "random")
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(0.99);
    expect(drizzt.rollAdv("acrobatics")).toBe(true);

    jest
      .spyOn(global.Math, "random")
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(0.5);
    expect(drizzt.rollAdv("acrobatics")).toBe(11);

    jest
      .spyOn(global.Math, "random")
      .mockReturnValueOnce(0.5)
      .mockReturnValueOnce(0.15);
    expect(drizzt.rollAdv("acrobatics")).toBe(11);

    jest
      .spyOn(global.Math, "random")
      .mockReturnValueOnce(0.89)
      .mockReturnValueOnce(0);
    expect(drizzt.rollAdv("acrobatics")).toBe(18);

    jest
      .spyOn(global.Math, "random")
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(0);
    expect(drizzt.rollDisadv("acrobatics")).toBe(false);

    jest
      .spyOn(global.Math, "random")
      .mockReturnValueOnce(0.99)
      .mockReturnValueOnce(0.99);
    expect(drizzt.rollDisadv("acrobatics")).toBe(true);

    jest
      .spyOn(global.Math, "random")
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(0.99);
    expect(drizzt.rollDisadv("acrobatics")).toBe(false);

    jest
      .spyOn(global.Math, "random")
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(0.5);
    expect(drizzt.rollDisadv("acrobatics")).toBe(false);

    jest
      .spyOn(global.Math, "random")
      .mockReturnValueOnce(0.5)
      .mockReturnValueOnce(0.15);
    expect(drizzt.rollDisadv("acrobatics")).toBe(4);

    jest
      .spyOn(global.Math, "random")
      .mockReturnValueOnce(0.89)
      .mockReturnValueOnce(0);
    expect(drizzt.rollDisadv("acrobatics")).toBe(false);

    jest.clearAllMocks();
  });
});
