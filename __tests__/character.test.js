import Character from "./../src/character.js";

describe("Character", () => {
  test("should correctly return each of the 3 attributes", () => {
    const charCreated = new Character(9, 20, 11);
    expect(charCreated.str).toEqual(9);
    expect(charCreated.dex).toEqual(20);
    expect(charCreated.int).toEqual(11);
  });
  test("should correctly determine the character type depending on the highest attribute - here, dex is highest meaning Rogue", () => {
    const charCreated = new Character(9, 20, 11);
    expect(charCreated.determineClass()).toEqual("Rogue");
  });
  test("should correctly determine the character type depending on the highest attribute - here, int is highest meaning Caster", () => {
    const charCreated = new Character(11, 12, 15);
    expect(charCreated.determineClass()).toEqual("Caster");
  });
});
