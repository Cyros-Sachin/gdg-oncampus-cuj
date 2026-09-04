export interface ChapterEvent {
  slug: string;
  title: string;
  dateISO: string;
  dateString: string;
  venue: string;
  attendance?: number;
  speaker: string;
  outcome: string;
  recap?: string;
  tags: string[];
  isUpcoming: boolean;
  photoUrl?: string;
}

export const NEXT_EVENT: ChapterEvent = {
  slug: "hackcyros4.0",
  title: "HackCyros 4.0",
  dateISO: "2026-09-16T10:00:00+05:30",
  dateString: "Saturday, Sep 16, 2026 • 06:00 PM IST",
  venue: "Hostels Only!",
  speaker: "GDG Core Engineering Team & Guest Mentors",
  outcome: "Hack into system for the Flags..!!",
  tags: ["Cyber Security", "CTF", "Capture The Flag"],
  isUpcoming: true,
  photoUrl: "/images/events/next.png"
};

export const PAST_EVENTS: ChapterEvent[] = [
  {
    slug: "hackcyros-3",
    title: "HackCyros 3.0",
    dateISO: "2026-08-22T09:00:00+05:30",
    dateString: "Aug 22, 2026",
    venue: "Virtual",
    attendance: 140,
    speaker: "GDG on Campus Central University of Jammu",
    outcome: "Hosted the third edition of HackCyros, bringing together developers to solve real-world coding and innovation challenges.",
    recap:
      "HackCyros 3.0 was an online hackathon organized by GDG on Campus CUJ to encourage innovation, collaboration, and problem-solving. Participants worked on impactful projects, explored emerging technologies, and showcased creative solutions while engaging with the developer community.",
    tags: ["Hackathon", "Innovation", "Open Source"],
    isUpcoming: false,
    photoUrl: "/images/events/hackcyros3.png"
  },
  {
    slug: "solution-challenge-2026-kickoff",
    title: "Solution Challenge 2026 Kickoff Hackathon",
    dateISO: "2026-05-22T07:00:00+05:30",
    dateString: "May 22, 2026",
    venue: "Central University of Jammu",
    attendance: 250,
    speaker: "GDG on Campus Core Team",
    outcome: "Introduced students to the Google Solution Challenge and guided teams in identifying real-world problems aligned with the UN Sustainable Development Goals.",
    recap:
      "The kickoff hackathon marked the beginning of Solution Challenge 2026, where participants formed teams, brainstormed innovative ideas, and received mentorship on project planning, technology selection, and effective collaboration to prepare for the global competition.",
    tags: ["Solution Challenge", "Google", "Hackathon"],
    isUpcoming: false,
    photoUrl: "/images/events/solution-challenge-2026.png"
  },
  {
    slug: "full-stack-development-workshop",
    title: "7-Day Intensive Full Stack Development Workshop",
    dateISO: "2026-03-05T21:00:00+05:30",
    dateString: "Mar 5, 2026",
    venue: "Virtual",
    attendance: 110,
    speaker: "GDG on Campus Mentors",
    outcome: "Participants built complete full-stack applications using modern web technologies from frontend to deployment.",
    recap:
      "A week-long hands-on workshop covering HTML, CSS, JavaScript, React, Node.js, Express, databases, authentication, APIs, Git, and deployment. Participants developed production-ready projects while learning industry best practices through practical sessions.",
    tags: ["Web Development", "React", "Node.js"],
    isUpcoming: false,
    photoUrl: "/images/events/fullstack-workshop.png"
  },
  {
    slug: "hackcyros-2",
    title: "HackCyros 2.0",
    dateISO: "2026-03-01T15:14:00+05:30",
    dateString: "Mar 1, 2026",
    venue: "Virtual",
    attendance: 94,
    speaker: "GDG on Campus Central University of Jammu",
    outcome: "Successfully conducted the second edition of HackCyros with exciting coding challenges and collaborative problem-solving sessions.",
    recap:
      "HackCyros 2.0 continued the community's hackathon series by providing participants with an engaging platform to build innovative solutions, enhance technical skills, and connect with fellow developers through collaborative learning and competition.",
    tags: ["Hackathon", "Coding", "Community"],
    isUpcoming: false,
    photoUrl: "/images/events/logo_cyros.webp"
  }
];
