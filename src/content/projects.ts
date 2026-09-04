export interface ProjectItem {
  id: string;
  title: string;
  summary: string;
  builders: string;
  stack: string[];
  liveUrl: string;
  githubUrl?: string;
  isFeatured?: boolean;
  imageUrl?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "cujorbit",
    title: "CUJOrbit",
    summary:
      "An all-in-one digital campus platform for Central University of Jammu that streamlines student life with academic resources, campus updates, event management, community engagement, and productivity tools.",
    builders: "Kumar Sachin, GDG on Campus CUJ",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Google Maps API"
    ],
    liveUrl: "https://cujorbit.app",
    githubUrl: "https://github.com/CUJOrbit/frontend",
    isFeatured: true,
    imageUrl: "/images/projects/cujorbit.png"
  },
  {
    id: "hackcyros",
    title: "HackCyros Platform",
    summary: "The official hackathon platform for registrations, event updates, schedules, and participant resources.",
    builders: "Kumar Sachin, GDG on Campus Central University of Jammu",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Vercel"
    ],
    liveUrl: "https://writeup-hackcyros.vercel.app",
    githubUrl: "https://github.com/Cyros-Sachin/writeup_app",
    isFeatured: true,
    imageUrl: "/images/projects/writeup-app.png"
  },
  {
    id: "vani",
    title: "VANI – Anonymous Campus Governance Platform",
    summary: "An AI-powered anonymous campus governance platform for secure issue reporting, encrypted evidence, and intelligent dispute resolution.",
    builders: "Rajatjyoti Biswas, Team VANI",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Google Gemini API",
      "Chart.js"
    ],
    liveUrl: "https://vani-arch.vercel.app/",
    githubUrl: "https://github.com/<your-username>/vani",
    isFeatured: true,
    imageUrl: "/images/projects/vani.png"
  },
  {
    id: "bhadarkashi-fpo",
    title: "Bhadarkashi FPO E-Commerce Platform",
    summary:
      "An e-commerce platform enabling Bhadarkashi FPO to showcase and sell its products online.",
    builders: "Ankita",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Razorpay"
    ],
    liveUrl: "https://bhadarkashi.in",
    githubUrl: "https://github.com/<your-username>/bhadarkashi-fpo",
    isFeatured: true,
    imageUrl: "/images/projects/bhadarkashi.png"
  },
  {
    id: "skillmates",
    title: "SkillMates",
    summary:
      "A peer-to-peer learning platform where students connect, share skills, and collaborate, with encrypted communication for private, secure exchanges.",
    builders: "Yashpreet Saxena",
    stack: ["Next.js", "React", "Vercel"],
    liveUrl: "https://skill-mates-gafn.vercel.app/"
  },
  {
    id: "devdiary",
    title: "DevDiary",
    summary:
      "A full-stack blogging platform built on the MVC pattern with full CRUD, session-based authentication and authorization, Express routing and middleware, and image uploads.",
    builders: "Shivansh",
    stack: ["Node.js", "Express.js", "MongoDB", "EJS", "Multer"],
    liveUrl: "https://blog-website-v1-0.onrender.com/",
  },
  {
    id: "arcade-survivor",
    title: "Fablekins",
    summary:
      "A top-down arcade survival game built from scratch in vanilla JavaScript and HTML5 Canvas — no frameworks. Collect dots to level up while evading a ghost that speeds up each level, and grab golden PowerDots for a speed boost. Custom collision detection, sprite animation, camera tracking, and layered rendering, with keyboard and on-screen D-pad controls.",
    builders: "Bablu",
    stack: ["JavaScript", "HTML5 Canvas"],
    liveUrl: "https://fablekins.vercel.app",
    githubUrl: "https://github.com/metastab/Fablekins"
  },
  {
    id: "hideinimages",
    title: "HideInImages",
    summary:
      "A steganography tool that hides text messages inside BMP images by modifying only the least-significant bits, so the image looks unchanged. Streamlit frontend with a Rust backend for the bit-level encoding, plus a decode mode to recover hidden messages.",
    builders: "Antriksh",
    stack: ["Python", "Streamlit", "Rust"],
    liveUrl: "https://hideinimages.streamlit.app/"
  },
  {
    id: "intelliassist",
    title: "IntelliAssist AI",
    summary:
      "A document-based AI assistant for PDF, DOCX, and TXT files. Uses RAG — chunking, Hugging Face sentence-transformer embeddings, and FAISS retrieval — with OpenAI or Gemini for answers. Adds semantic search, summarization, sentiment and intent analysis, conversation history, source references, and an analytics dashboard.",
    builders: "Antriksh",
    stack: ["Python", "Streamlit", "FAISS", "Hugging Face", "OpenAI", "Gemini", "Plotly"],
    liveUrl: "https://intelliassist-ai-25.streamlit.app"
  },
  {
    id: "electionguide",
    title: "ElectionGuide",
    summary:
      "An interactive election-education platform that explains the electoral process through a visual timeline, plain-language concept explainers, quizzes, and FAQs, plus an AI assistant for election-related questions.",
    builders: "Lakshit",
    stack: ["Next.js", "React", "Vercel"],
    liveUrl: "https://electionguide.vercel.app"
  },
  {
    id: "cineverse",
    title: "CineVerse",
    summary:
      "A movie and TV-show discovery platform for browsing trending titles, ratings, and cast details, writing and discussing reviews, building watchlists, and watching together with friends — with leaderboards, forums, personalized recommendations, and monthly rewards.",
    builders: "Abhay Kant Singh",
    stack: ["Next.js", "React"],
    liveUrl: "https://cineverse.space"
  },
  {
    id: "mental-health-signal",
    title: "Mental Health Signal",
    summary:
      "A tool that estimates how daily habits affect student well-being. Users enter study hours, sleep, physical activity, screen time, social-media use, and stress level, and a machine-learning model returns a mental-health score from 0 to 10.",
    builders: "Anandi",
    stack: ["Python", "Machine Learning"],
    liveUrl: "https://mental-health-signal-5.onrender.com"
  }
];
