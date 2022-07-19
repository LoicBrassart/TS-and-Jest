/* ---------- Types  ---------- */
export type Stat = "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA";
export type Skill =
  | "athletism"
  | "acrobatics"
  | "stealth"
  | "sleight"
  | "arcana"
  | "history"
  | "investigation"
  | "nature"
  | "religion"
  | "taming"
  | "medicine"
  | "perception"
  | "insight"
  | "survival"
  | "intimidation"
  | "persuasion"
  | "representation"
  | "dupery";

/* ---------- Default data ---------- */

export const SkillsDefaultStats = {
  athletism: "STR",
  acrobatics: "DEX",
  stealth: "DEX",
  sleight: "DEX",
  arcana: "INT",
  history: "INT",
  investigation: "INT",
  nature: "INT",
  religion: "INT",
  taming: "WIS",
  medicine: "WIS",
  perception: "WIS",
  insight: "WIS",
  survival: "WIS",
  intimidation: "CHA",
  persuasion: "CHA",
  representation: "CHA",
  dupery: "CHA",
};
