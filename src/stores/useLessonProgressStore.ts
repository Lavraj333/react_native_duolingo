import { create } from "zustand";
import type { LessonStatus, UserLessonProgress } from "../types/learning";
import { lessons } from "../data/lessons";

function generateMockProgress(): Record<string, UserLessonProgress> {
  const progress: Record<string, UserLessonProgress> = {};

  const grouped: Record<string, typeof lessons> = {};
  for (const lesson of lessons) {
    if (!grouped[lesson.unitId]) grouped[lesson.unitId] = [];
    grouped[lesson.unitId].push(lesson);
  }

  for (const unitLessons of Object.values(grouped)) {
    const sorted = [...unitLessons].sort((a, b) => a.order - b.order);
    sorted.forEach((lesson, index) => {
      let status: LessonStatus;
      let score = 0;

      if (index < 2) {
        status = "completed";
        score = 85 + Math.floor(Math.random() * 16);
      } else if (index === 2) {
        status = "in_progress";
        score = 40;
      } else {
        status = "locked";
        score = 0;
      }

      progress[lesson.id] = {
        lessonId: lesson.id,
        status,
        score,
        completedActivities: status === "completed" ? ["a1", "a2", "a3", "a4"] : status === "in_progress" ? ["a1", "a2"] : [],
        bestScore: score,
        attempts: status === "completed" ? 1 : status === "in_progress" ? 1 : 0,
      };
    });
  }

  return progress;
}

interface LessonProgressState {
  progress: Record<string, UserLessonProgress>;
  getLessonStatus: (lessonId: string) => LessonStatus;
  getUnitProgress: (unitId: string) => { completed: number; total: number };
}

export const useLessonProgressStore = create<LessonProgressState>()((set, get) => ({
  progress: generateMockProgress(),

  getLessonStatus: (lessonId: string): LessonStatus => {
    return get().progress[lessonId]?.status ?? "locked";
  },

  getUnitProgress: (unitId: string) => {
    const unitLessons = lessons.filter((l) => l.unitId === unitId);
    const completed = unitLessons.filter((l) => {
      const p = get().progress[l.id];
      return p?.status === "completed";
    }).length;
    return { completed, total: unitLessons.length };
  },
}));
