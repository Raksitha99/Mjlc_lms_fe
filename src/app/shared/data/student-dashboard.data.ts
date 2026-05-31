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

// ── NEW: Full Upcoming Class for Live Classes page ──────────────
export interface UpcomingClass {
  id: number;
  thumbnail: string;
  badgeLabel: string;
  badgeColor: 'red' | 'green' | 'blue';
  startsIn: string;           // e.g. 'Starts in 15 mins' or 'Tomorrow'
  date: string;               // e.g. 'Today, Oct 24'
  time: string;               // e.g. '18:00 - 19:30 (JST)'
  duration: string;           // e.g. '60 MINS SESSION'
  title: string;
  instructor: string;
  attendeeCount: number;
  zoomUrl: string;
  isJoinable: boolean;        // true = show Join button, false = Set Alert
  alertNote?: string;         // e.g. 'Join link will be active 10 mins before class.'
}

// ── NEW: Past Class for Live Classes page ───────────────────────
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

// ── EXISTING dummy data (unchanged) ────────────────────────────
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

// ── NEW: Upcoming Classes dummy data ────────────────────────────
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

// ── NEW: Past Classes dummy data ─────────────────────────────────
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
