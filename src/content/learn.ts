export interface LearnTrack {
  id: string;
  title: string;
  domain: string;
  modulesCount: string;
  description: string;
  link: string;
  status: string;
}

export const LEARN_TRACKS: LearnTrack[] = [
  {
    id: "gcp-arcade-2026",
    title: "Google Cloud Arcade & Skill Badges",
    domain: "Cloud & Infrastructure",
    modulesCount: "6 Guided Quests",
    description: "Hands-on cloud labs covering IAM policies, VPC networking, Cloud Run container deployments, and Vertex AI models.",
    link: "https://cloudskillsboost.google",
    status: "Active • Cohort 4"
  },
  {
    id: "android-dev-track",
    title: "Modern Android Development Roadmap",
    domain: "Android & Mobile",
    modulesCount: "4 Core Pathways",
    description: "Kotlin idioms, Jetpack Compose declarative UI architecture, Coroutines async state, and Room database ORM.",
    link: "https://developer.android.com/courses",
    status: "Completed • 140 Badges"
  },
  {
    id: "ai-ml-tensorflow",
    title: "Applied Generative AI & TensorFlow Jam",
    domain: "AI & ML",
    modulesCount: "5 Colab Notebook Labs",
    description: "Neural network fundamentals, prompt engineering with Gemini 1.5, RAG pipelines, and model deployment.",
    link: "https://www.tensorflow.org/learn",
    status: "Active • Cohort 2"
  },
  {
    id: "nextjs-fullstack-web",
    title: "Full-Stack Web Architecture Track",
    domain: "Web Development",
    modulesCount: "5 Production Builds",
    description: "React Server Components, App Router endpoints, Firebase Firestore real-time listeners, and edge deployment.",
    link: "https://nextjs.org/docs",
    status: "Completed • 98 Certificates"
  }
];
