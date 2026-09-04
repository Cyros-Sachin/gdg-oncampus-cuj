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
  }
];
