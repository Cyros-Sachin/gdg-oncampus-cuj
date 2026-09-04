export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const JOIN_FAQS: FAQItem[] = [
  {
    id: "prior-experience",
    question: "Do I need prior coding experience to join GDG on Campus CUJ?",
    answer: "No. We welcome students from all years and branches. Our study jams start from foundational concepts, and our peer mentorship program pairs beginners with senior chapter leads to build confidence step-by-step."
  },
  {
    id: "time-commitment",
    question: "What is the expected weekly time commitment?",
    answer: "Most members spend 2 to 3 hours per week attending weekend hands-on workshops or collaborating on project repositories. You are always free to pace your participation around mid-terms and semester exams."
  },
  {
    id: "non-cse-branches",
    question: "Can non-CSE / non-IT branch students apply?",
    answer: "Absolutely. GDG CUJ has active members from Electrical Engineering, Civil, Environmental Sciences, and Humanities. Tech is interdisciplinary, and diverse perspectives build far more useful products."
  },
  {
    id: "recruitment-timeline",
    question: "When does recruitment open and how are applications evaluated?",
    answer: "Recruitment opens twice a year at the start of Autumn and Spring semesters. Applications are evaluated on a rolling basis, looking for genuine curiosity, eagerness to build, and willingness to learn in public."
  }
];
