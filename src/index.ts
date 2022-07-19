import { Character } from "./classes";

const drizzt = new Character(14, 19, 13, 9, 14, 8);

console.log(drizzt.str);
console.log(drizzt.mod("athletism"));
console.log(drizzt.mod("athletism", "INT"));
console.log(drizzt.roll("athletism"));
console.log(drizzt.roll("athletism", "INT"));
console.log(drizzt.rollAdv("medicine"));
console.log(drizzt.rollDisadv("sleight", "CHA"));
