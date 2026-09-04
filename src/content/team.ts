export interface LeadershipMember {
  id: string;
  badge: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  avatarUrl: string;
  socials: {
    linkedin?: string;
    email?: string;
    github?: string;
  };
}

export interface CoreLead {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  socials: {
    github?: string;
    linkedin?: string;
  };
}

// First Row: 2 blocks (Founder/Mentor/HOD of CSE + Faculty Coordinator)
export const ROW_1_LEADERSHIP: LeadershipMember[] = [
  {
    id: "hod-cse",
    badge: "Founder & Mentor",
    name: "Prof. (Dr.) Dinesh Kumar",
    role: "Founder, Mentor & Head of Department",
    department: "Department of Computer Science & Engineering, CUJ",
    bio: "Visionary founder and mentor of GDG on Campus CUJ. Driving academic excellence, research initiatives, and developer growth across the university.",
    avatarUrl: "/images/dp/hod.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/dr-dinesh-kumar-10811032/",
      email: "hod.cse@cujammu.ac.in"
    }
  },
  {
    id: "faculty-coordinator",
    badge: "Faculty Advisor",
    name: "Dr. Jasvinder Pal Singh",
    role: "Faculty Coordinator & Assistant Professor",
    department: "Department of Computer Science & Engineering, CUJ",
    bio: "Guiding the chapter leadership team, overseeing event logistics, and bridging student innovation with institutional support.",
    avatarUrl: "/images/dp/jasvinder.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/dr-jasvinder-pal-singh-b8028938/",
      email: "jasvinder.cse@cujammu.ac.in"
    }
  }
];

// Second Row: 1 single block (The Lead / The Organizer)
export const ROW_2_ORGANIZER: LeadershipMember = {
  id: "shubham-kumar",
  badge: "Chapter Lead",
  name: "Kumar Sachin",
  role: "The Lead & Organizer",
  department: "Computer Science & Engineering '28",
  bio: "Directs chapter vision, organizes hands-on workshops, manages core team operations, and connects CUJ developers with Google Developer Groups worldwide.",
  avatarUrl: "/images/dp/sachin.jpeg",
  socials: {
    github: "https://github.com/cyros-sachin",
    linkedin: "https://www.linkedin.com/in/cyrossachin"
  }
};

// Domain Leads (Web, AI/ML, Cloud, Design)
export const CORE_LEADS: CoreLead[] = [
  {
    id: "ayush-verma",
    name: "Ayush Verma",
    role: "Web Lead & Frontend Engineer",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "ananya-roy",
    name: "Ananya Roy",
    role: "Runs the AI & ML Sessions",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    role: "Cloud & DevOps Facilitator",
    avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "ritu-singh",
    name: "Ritu Singh",
    role: "Designs Everything You See",
    avatarUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  }
];
