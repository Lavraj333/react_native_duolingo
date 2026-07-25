import type { Language } from "../types/learning";

export const languages: Language[] = [
  {
    id: "spanish",
    name: "Spanish",
    nativeName: "Espanol",
    code: "es",
    flag: "\uD83C\uDDEA\uD83C\uDDF8",
    levels: ["A1", "A2", "B1"],
    description:
      "Learn Spanish from scratch. Master greetings, everyday phrases, and basic conversations.",
  },
  {
    id: "french",
    name: "French",
    nativeName: "Francais",
    code: "fr",
    flag: "\uD83C\uDDEB\uD83C\uDDF7",
    levels: ["A1", "A2", "B1"],
    description:
      "Start your French journey with pronunciation, common expressions, and polite conversation.",
  },
  {
    id: "japanese",
    name: "Japanese",
    nativeName: "\u65E5\u672C\u8A9E",
    code: "ja",
    flag: "\uD83C\uDDEF\uD83C\uDDF5",
    levels: ["A1", "A2"],
    description:
      "Learn Japanese fundamentals including hiragana, basic kanji, and everyday expressions.",
  },
  {
    id: "korean",
    name: "Korean",
    nativeName: "\uD55C\uAD6D\uC5B4",
    code: "ko",
    flag: "\uD83C\uDDF0\uD83C\uDDF7",
    levels: ["A1", "A2"],
    description:
      "Discover Korean with Hangul, K-pop vocabulary, and everyday conversation skills.",
  },
  {
    id: "german",
    name: "German",
    nativeName: "Deutsch",
    code: "de",
    flag: "\uD83C\uDDE9\uD83C\uDDEA",
    levels: ["A1", "A2", "B1"],
    description:
      "Learn German from basics to fluency. Master grammar, compound words, and culture.",
  },
  {
    id: "chinese",
    name: "Chinese",
    nativeName: "\u4E2D\u6587",
    code: "zh",
    flag: "\uD83C\uDDE8\uD83C\uDDF3",
    levels: ["A1", "A2"],
    description:
      "Start learning Mandarin Chinese with pinyin, tones, and essential characters.",
  },
] as const;

export const learnerCounts: Record<string, string> = {
  spanish: "28.4M learners",
  french: "19.4M learners",
  japanese: "12.7M learners",
  korean: "9.3M learners",
  german: "8.1M learners",
  chinese: "7.4M learners",
};

export const getLanguageById = (id: string): Language | undefined =>
  languages.find((l) => l.id === id);

export const languageIds = languages.map((l) => l.id) as string[];
