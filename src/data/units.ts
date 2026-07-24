import type { Unit } from "../types/learning";

export const units: Unit[] = [
  // ── Spanish ──
  {
    id: "spanish_basics",
    languageId: "spanish",
    title: "Basics 1",
    description: "Learn essential Spanish words and simple sentences.",
    order: 1,
    requiredCompletedLessons: 0,
    color: "green",
  },
  {
    id: "spanish_greetings",
    languageId: "spanish",
    title: "Greetings",
    description: "Say hello, goodbye, and introduce yourself.",
    order: 2,
    requiredCompletedLessons: 1,
    color: "blue",
  },
  {
    id: "spanish_food",
    languageId: "spanish",
    title: "Food",
    description: "Order food and talk about your favorite meals.",
    order: 3,
    requiredCompletedLessons: 2,
    color: "orange",
  },

  // ── French ──
  {
    id: "french_basics",
    languageId: "french",
    title: "Basics 1",
    description: "Learn essential French words and pronunciation.",
    order: 1,
    requiredCompletedLessons: 0,
    color: "green",
  },
  {
    id: "french_greetings",
    languageId: "french",
    title: "Greetings",
    description: "Master French greetings and polite expressions.",
    order: 2,
    requiredCompletedLessons: 1,
    color: "blue",
  },

  // ── Japanese ──
  {
    id: "japanese_basics",
    languageId: "japanese",
    title: "Basics 1",
    description: "Learn hiragana and basic Japanese vocabulary.",
    order: 1,
    requiredCompletedLessons: 0,
    color: "green",
  },
  {
    id: "japanese_greetings",
    languageId: "japanese",
    title: "Greetings",
    description: "Say hello and goodbye in Japanese.",
    order: 2,
    requiredCompletedLessons: 1,
    color: "blue",
  },
] as const;

export const getUnitsByLanguage = (languageId: string): Unit[] =>
  units.filter((u) => u.languageId === languageId);

export const getUnitById = (id: string): Unit | undefined =>
  units.find((u) => u.id === id);
