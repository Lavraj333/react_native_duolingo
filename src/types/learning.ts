export type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export type DifficultyLevel = "beginner" | "intermediate" | "advanced";

export type ActivityType =
  | "multiple_choice"
  | "translation"
  | "listening"
  | "speaking"
  | "match_pairs"
  | "fill_blank"
  | "reorder_words"
  | "voice_conversation";

export type LessonStatus = "locked" | "available" | "in_progress" | "completed";

// --- Core Domain Models ---

export interface Language {
  id: string;
  name: string;
  nativeName: string;
  code: string; // ISO 639-1
  flag: string; // emoji
  levels: CEFRLevel[];
  description: string;
}

export interface Unit {
  id: string;
  languageId: string;
  title: string;
  description: string;
  order: number;
  requiredCompletedLessons: number; // min lessons from prev unit to unlock
  color: string; // theme color key
}

export interface LessonGoal {
  id: string;
  description: string;
  type: "vocabulary" | "grammar" | "culture" | "conversation";
}

export interface Vocabulary {
  id: string;
  word: string;
  translation: string;
  pronunciation: string; // IPA or phonetic guide
  audioUri?: string;
  imageUri?: string;
  examples: string[];
}

export interface Phrase {
  id: string;
  text: string;
  translation: string;
  pronunciation: string;
  context: "greeting" | "farewell" | "polite" | "question" | "casual" | "restaurant" | "travel";
}

export interface Activity {
  id: string;
  type: ActivityType;
  instruction: string;
  /** The source word/phrase to work with */
  sourceText: string;
  /** Correct answer */
  correctAnswer: string;
  /** Distractors for multiple choice / matching */
  options?: string[];
  /** Pairs for match_pairs activity */
  pairs?: { left: string; right: string }[];
  /** Word bank for reorder_words activity */
  wordBank?: string[];
  /** For fill_blank, the sentence with a blank marked by ___ */
  sentenceWithBlank?: string;
  /** Points awarded on correct answer */
  points: number;
}

export interface AITeacherPrompt {
  id: string;
  /** The scenario or role-play context */
  scenario: string;
  /** System prompt for the Vision/Audio Agent */
  systemPrompt: string;
  /** Opening line the AI teacher says */
  openingLine: string;
  /** Expected vocabulary / phrases the student should use */
  expectedResponses: string[];
  /** Difficulty of the conversation */
  difficulty: DifficultyLevel;
  /** Topics covered in this conversation */
  topics: string[];
}

export interface Lesson {
  id: string;
  unitId: string;
  languageId: string;
  title: string;
  order: number;
  level: CEFRLevel;
  difficulty: DifficultyLevel;
  goals: LessonGoal[];
  vocabulary: Vocabulary[];
  phrases: Phrase[];
  activities: Activity[];
  /** Total points possible in this lesson */
  totalPoints: number;
  /** Estimated duration in minutes */
  estimatedMinutes: number;
  /** AI conversation prompt for audio-based lesson (optional) */
  aiPrompt?: AITeacherPrompt;
}

export interface UserLessonProgress {
  lessonId: string;
  status: LessonStatus;
  score: number; // 0-100
  completedActivities: string[]; // activity IDs
  bestScore: number;
  attempts: number;
}

export interface UserUnitProgress {
  unitId: string;
  completedLessons: number;
  totalLessons: number;
  isUnlocked: boolean;
}
