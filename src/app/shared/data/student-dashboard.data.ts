export interface Course {
  id: number;
  icon: string;
  level: string;
  levelColor: 'red' | 'grey';
  title: string;
  lessonsRemaining: string;
  progress: number;
  thumbnail?: string;
  description?: string;
  buttonLabel?: 'Continue Learning' | 'Start Learning' | 'Review Course';
}

export interface LiveClass {
  id: number;
  month: string;
  day: number;
  title: string;
  time: string;
  instructor: string;
  isUpcoming: boolean;
}

export interface QuizResult {
  id: number;
  name: string;
  subtitle: string;
  dateTaken: string;
  status: 'Passed' | 'Perfect' | 'Failed';
  score: number;
  total: number;
}

export interface UpcomingClass {
  id: number;
  thumbnail: string;
  badgeLabel: string;
  badgeColor: 'red' | 'green' | 'blue';
  startsIn: string;
  date: string;
  time: string;
  duration: string;
  title: string;
  instructor: string;
  attendeeCount: number;
  zoomUrl: string;
  isJoinable: boolean;
  alertNote?: string;
}

export interface PastClass {
  id: number;
  thumbnail: string;
  levelBadge: string;
  hasRecording: boolean;
  title: string;
  date: string;
  instructor: string;
  duration: string;
}

// ── NEW: Past Paper Course Card ─────────────────────────
export interface PastPaperCourse {
  id: number;
  thumbnail: string;
  levelBadge: string;
  paperCount: number;
  yearRange: string;
  title: string;
  rating: number;
  attemptCount: number;
}

// ── NEW: Recently Attempted Paper Row ───────────────────
export interface AttemptedPaper {
  id: number;
  iconColor: 'red' | 'orange' | 'grey';
  name: string;
  subtitle: string;
  status: 'Completed' | 'In Progress';
  score?: number;
  courseId: number;
}

// ── EXISTING dummy data (all unchanged) ─────────────────
export const DUMMY_COURSES: Course[] = [
  {
    id: 1,
    icon: '📕',
    level: 'N5 Level',
    levelColor: 'red',
    title: 'JLPT N5 Grammar Master',
    lessonsRemaining: '24 lessons remaining',
    progress: 65,
    thumbnail: 'assets/images/courses/n5-grammar.jpg',
    description: 'Complete guide to foundational grammar.',
    buttonLabel: 'Continue Learning'
  },
  {
    id: 2,
    icon: '💬',
    level: 'N4 Level',
    levelColor: 'red',
    title: 'Daily Conversation & Slang',
    lessonsRemaining: '112 lessons remaining',
    progress: 12,
    thumbnail: 'assets/images/courses/n4-conversation.jpg',
    description: 'Learn how people actually talk in Tokyo.',
    buttonLabel: 'Continue Learning'
  },
  {
    id: 3,
    icon: '✍️',
    level: 'All Levels',
    levelColor: 'grey',
    title: 'Mastering Keigo (Polite Japanese)',
    lessonsRemaining: 'Not started yet',
    progress: 0,
    thumbnail: 'assets/images/courses/keigo.jpg',
    description: 'Navigate business and formal social situations.',
    buttonLabel: 'Start Learning'
  }
];

export const DUMMY_LIVE_CLASSES: LiveClass[] = [
  {
    id: 1,
    month: 'OCT',
    day: 24,
    title: 'N4 Reading Comprehension',
    time: '10:00 AM - 11:30 AM',
    instructor: 'Tanaka Sarah',
    isUpcoming: true
  },
  {
    id: 2,
    month: 'OCT',
    day: 26,
    title: 'Kanji Review Session',
    time: '2:00 PM - 3:00 PM',
    instructor: 'Tanaka Sarah',
    isUpcoming: false
  }
];

export const DUMMY_QUIZ_RESULTS: QuizResult[] = [
  {
    id: 1,
    name: 'Kanji Unit 12',
    subtitle: 'Vocabulary & Writing',
    dateTaken: 'Oct 16, 2023',
    status: 'Passed',
    score: 95,
    total: 100
  },
  {
    id: 2,
    name: 'Listening N5 Mock',
    subtitle: 'Audio Comprehension',
    dateTaken: 'Oct 15, 2023',
    status: 'Passed',
    score: 82,
    total: 100
  },
  {
    id: 3,
    name: 'Particles "Ni" & "He"',
    subtitle: 'Grammar Focus',
    dateTaken: 'Oct 15, 2023',
    status: 'Perfect',
    score: 100,
    total: 100
  }
];

export const DUMMY_UPCOMING_CLASSES: UpcomingClass[] = [
  {
    id: 1,
    thumbnail: 'assets/images/classes/particles.jpg',
    badgeLabel: 'JUST N5 COMPLETE',
    badgeColor: 'red',
    startsIn: 'Starts in 15 mins',
    date: 'Today, Oct 24',
    time: '18:00 - 19:30 (JST)',
    duration: '60 MINS SESSION',
    title: 'Mastering Particles: Wa vs Ga',
    instructor: 'Yuki Sensei',
    attendeeCount: 56,
    zoomUrl: 'https://zoom.us/j/placeholder',
    isJoinable: true
  },
  {
    id: 2,
    thumbnail: 'assets/images/classes/tokyo.jpg',
    badgeLabel: 'N4 CONVERSATION',
    badgeColor: 'green',
    startsIn: 'Tomorrow',
    date: 'Oct 25, 2023',
    time: '10:00 - 11:00 (JST)',
    duration: '60 MINS SESSION',
    title: 'Speaking Practice: Shopping in Tokyo',
    instructor: 'Kenji Sensei',
    attendeeCount: 34,
    zoomUrl: 'https://zoom.us/j/placeholder',
    isJoinable: false,
    alertNote: 'Join link will be active 10 mins before class.'
  }
];

export const DUMMY_PAST_CLASSES: PastClass[] = [
  {
    id: 1,
    thumbnail: 'assets/images/classes/keigo-past.jpg',
    levelBadge: 'ALL LEVELS',
    hasRecording: true,
    title: 'Mastering Keigo Basics',
    date: 'Oct 13',
    instructor: 'Yuki Sensei',
    duration: '90 mins'
  },
  {
    id: 2,
    thumbnail: 'assets/images/classes/hiragana.jpg',
    levelBadge: 'JUST N5',
    hasRecording: false,
    title: 'Hiragana & Katakana Workshop',
    date: 'Oct 12',
    instructor: 'Kenji Sensei',
    duration: '90 mins'
  }
];

// ── NEW dummy data ───────────────────────────────────────
export const DUMMY_PAST_PAPER_COURSES: PastPaperCourse[] = [
  {
    id: 1,
    thumbnail: 'assets/images/papers/jlpt.jpg',
    levelBadge: 'JLPT',
    paperCount: 10,
    yearRange: '2018-2023',
    title: 'JLPT Exam Preparation',
    rating: 4.9,
    attemptCount: 320
  },
  {
    id: 2,
    thumbnail: 'assets/images/papers/n4.jpg',
    levelBadge: 'N4',
    paperCount: 8,
    yearRange: '2019-2023',
    title: 'N4 Level Past Papers',
    rating: 4.8,
    attemptCount: 215
  },
  {
    id: 3,
    thumbnail: 'assets/images/papers/n5.jpg',
    levelBadge: 'N5',
    paperCount: 6,
    yearRange: '2020-2023',
    title: 'N5 Level Past Papers',
    rating: 4.7,
    attemptCount: 548
  }
];

export const DUMMY_ATTEMPTED_PAPERS: AttemptedPaper[] = [
  {
    id: 1,
    iconColor: 'red',
    name: 'JLPT 2023 - Full Paper',
    subtitle: 'Advanced Proficiency',
    status: 'Completed',
    score: 78,
    courseId: 1
  },
  {
    id: 2,
    iconColor: 'red',
    name: 'N4 Grammar & Vocabulary 2022',
    subtitle: 'Intermediate Practice',
    status: 'Completed',
    score: 85,
    courseId: 2
  },
  {
    id: 3,
    iconColor: 'orange',
    name: 'N5 Full Paper 2021',
    subtitle: 'Beginner Foundation',
    status: 'In Progress',
    courseId: 3
  }
];

// ── NEW: Individual Paper Item ───────────────────────────
export interface PaperItem {
  id: number;
  year: number;
  levelBadge: string;
  title: string;
  subtitle: string;
  duration: string;
  questions: number;
  avgScore?: number;
  status: 'Completed' | 'In Progress' | 'Not Attempted';
  score?: number;
  courseId: number;
}

// ── NEW: Papers list per course (N4 as example) ──────────
export const DUMMY_N4_PAPERS: PaperItem[] = [
  {
    id: 1,
    year: 2023,
    levelBadge: 'N4 LEVEL',
    title: 'N4 JLPT — 2023 Full Paper',
    subtitle: 'Vocabulary, Grammar, Reading Comprehension, Listening',
    duration: '90 mins',
    questions: 95,
    avgScore: 71,
    status: 'Completed',
    score: 85,
    courseId: 2
  },
  {
    id: 2,
    year: 2022,
    levelBadge: 'N4 LEVEL',
    title: 'N4 JLPT — 2022 Full Paper',
    subtitle: 'Vocabulary, Grammar, Reading Comprehension, Listening',
    duration: '90 mins',
    questions: 95,
    avgScore: 69,
    status: 'Completed',
    score: 72,
    courseId: 2
  },
  {
    id: 3,
    year: 2022,
    levelBadge: 'SET A',
    title: 'N4 Practice Set B',
    subtitle: 'Practice set covering Kanji and Reading Comprehension',
    duration: '60 mins',
    questions: 60,
    status: 'In Progress',
    courseId: 2
  },
  {
    id: 4,
    year: 2021,
    levelBadge: 'N4 LEVEL',
    title: 'N4 JLPT — 2021 Full Paper',
    subtitle: 'Vocabulary, Grammar, Reading Comprehension, Listening',
    duration: '90 mins',
    questions: 95,
    avgScore: 68,
    status: 'Not Attempted',
    courseId: 2
  },
  {
    id: 5,
    year: 2021,
    levelBadge: 'SET A',
    title: 'N4 Practice Set A',
    subtitle: 'Complete practice set for N4 exam preparation',
    duration: '60 mins',
    questions: 60,
    status: 'Not Attempted',
    courseId: 2
  },
  {
    id: 6,
    year: 2020,
    levelBadge: 'N4 LEVEL',
    title: 'N4 JLPT — 2020 Full Paper',
    subtitle: 'Vocabulary, Grammar, Reading Comprehension, Listening',
    duration: '90 mins',
    questions: 90,
    avgScore: 65,
    status: 'Not Attempted',
    courseId: 2
  }
];

// Map of courseId to papers — add more courses here later
export const DUMMY_PAPERS_BY_COURSE: Record<number, PaperItem[]> = {
  1: DUMMY_N4_PAPERS, // placeholder — replace with JLPT papers later
  2: DUMMY_N4_PAPERS,
  3: DUMMY_N4_PAPERS  // placeholder — replace with N5 papers later
};
