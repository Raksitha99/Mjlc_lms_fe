export interface Course {
  id: number;
  icon: string;
  level: string;
  levelColor: 'red' | 'grey';
  title: string;
  lessonsRemaining: string;
  progress: number;
  // New fields for the full card on My Courses page
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
