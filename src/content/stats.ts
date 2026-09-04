export interface StatItem {
  value: number;
  suffix?: string;
  label: string;
}

export const CHAPTER_STATS: StatItem[] = [
  { value: 680, label: "members" },
  { value: 26, label: "sessions run" },
  { value: 9, label: "projects shipped" },
  { value: 3, label: "years on campus" },
];
