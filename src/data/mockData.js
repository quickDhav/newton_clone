export const performanceData = [
  { label: "Assignments", percent: 42, done: 34, total: 81 },
  { label: "Lectures", percent: 78, done: 62, total: 80 },
  { label: "Quizzes", percent: 60, done: 9, total: 15 },
  { label: "Projects", percent: 25, done: 1, total: 4 },
];

export const lectureData = [
  { subject: "FOAI Turing", title: "Mock End-Sem", duration: "01:30:00", xp: "30/30", date: "April 27, 2026" },
  { subject: "FOAI Enigma", title: "Lab 10", duration: "02:00:00", xp: "30/30", date: "April 23, 2026" },
  { subject: "WAP Turing", title: "React Router", duration: "01:30:00", xp: "30/30", date: "April 23, 2026" },
  { subject: "Maths-2 Turing", title: "Lec 25", duration: "01:30:00", xp: "30/30", date: "April 23, 2026" },
];

export const upcomingEvents = [
  { date: "26", day: "Sat", label: "FOAI Mock Test", time: "10:00 AM - 11:00 AM" },
  { date: "28", day: "Mon", label: "WAP Project Submission", time: "11:59 PM" },
  { date: "30", day: "Wed", label: "Maths-2 Quiz", time: "2:00 PM - 3:00 PM" },
];

export const subjectData = {
  "FOAI Turing": {
    performance: [
      { label: "Lecture", val: "74%", count: "(20/27)", icon: "📺" },
      { label: "My Assignments", val: "67%", count: "(118/175)", icon: "📄" }
    ],
    cards: [
      { type: "In Class", title: "Prompt Refinement Strategies, Diagnostic Prompting, Prompt Error Reduction", due: "due tomorrow", xp: "0/60" },
      { type: "Post Class", title: "LLM Basics, Tokens, Tokenization, Context Window, Temperature & Sampling", due: "due in 2 days", xp: "20/60" }
    ],
    lectures: [
      { title: "Mock End-Sem", date: "Apr 27, 2026 • 1:30:00", xp: "30/30", attended: true, status: "complete" },
      { title: "Lec 23", date: "Apr 22, 2026 • 1:30:00", xp: "30/30", attended: true, status: "complete" },
      { title: "Agentic Workflow Optimization, Agentic Error Handling...", date: "Apr 20, 2026 • 1:30:00", xp: "30/30", attended: true, status: "complete" },
      { title: "Ethical AI, Testing Checklist, Launch Readiness...", date: "Apr 15, 2026 • 1:30:00", xp: "30/30", attended: true, status: "play" },
      { title: "Buffer Lec", date: "Apr 13, 2026 • 1:30:00", xp: "30/30", attended: true, status: "complete" },
      { title: "Context Injection, Context Window Management...", date: "Apr 8, 2026 • 1:30:00", xp: "30/30", attended: false, status: "" },
    ],
    quizzes: [
      { subject: "FOAI Turing", title: "Hugging Face Overview, Hugging Face Model Hub, Hugging Fac...", date: "18 MAR 2026", status: "completed", xp: "14/14", topics: ["Inference API", "Hugging Face Sp"] },
      { subject: "FOAI Turing", title: "Extractor Agent Implementation, Multi-Step Decision Flow, Dat...", date: "16 MAR 2026", status: "completed", xp: "18/18", topics: ["JSON", "Webhooks", "API Headers"] },
      { subject: "FOAI Turing", title: "Prompt Refinement Strategies, Diagnostic Prompting, Prompt E...", date: "2 FEB 2026", status: "completed", xp: "28/28", topics: ["Variation Prompts", "Structured C"] },
      { subject: "FOAI Turing", title: "Structured Prompting, RCIO, Checklists & Prompt Patterns, Pro...", date: "28 JAN 2026", status: "completed", xp: "9/18", topics: ["Prompt Templates", "Prompt Eval"] },
      { subject: "FOAI Turing", title: "Prompt Engineering, Prompt Design Principles, Clarity & Specifi...", date: "21 JAN 2026", status: "completed", xp: "11/22", topics: ["Prompt Role", "Output Structure"] },
      { subject: "FOAI Turing", title: "AI Validation, LLM Hallucinations, Hallucination Types, Diagnosi...", date: "19 JAN 2026", status: "partial", xp: "18/20", topics: ["LLM Hallucinations"] }
    ]
  },
  "WAP Turing": {
    performance: [
      { label: "Lecture", val: "45%", count: "(10/22)", icon: "📺" },
      { label: "My Assignments", val: "30%", count: "(50/150)", icon: "📄" }
    ],
    cards: [
      { type: "Contest", title: "React Router Challenge", due: "due today", xp: "0/100" },
      { type: "Post Class", title: "Express API Setup", due: "due on 30 Apr", xp: "50/80" }
    ],
    lectures: [
      { title: "WAP React Basics", date: "Apr 25, 2026 • 1:30:00", xp: "30/30", attended: true, status: "complete" }
    ],
    quizzes: [
      { subject: "WAP Turing", title: "React Router & Hooks Assessment", date: "22 MAR 2026", status: "completed", xp: "20/20", topics: ["React", "Hooks", "Routing"] }
    ]
  },
  "Maths-2 Turing": {
    performance: [
      { label: "Lecture", val: "90%", count: "(25/28)", icon: "📺" },
      { label: "My Assignments", val: "85%", count: "(140/160)", icon: "📄" }
    ],
    cards: [
      { type: "Quiz", title: "Matrix Multiplication", due: "due in 5 hours", xp: "10/20" }
    ],
    lectures: [],
    quizzes: []
  },
  "DSA Turing": {
    performance: [
      { label: "Lecture", val: "50%", count: "(61/121)", icon: "📺" },
      { label: "My Assignments", val: "48%", count: "(29/60)", icon: "📄" }
    ],
    cards: [
      { type: "Post Class", title: "Post Order Traversal - Post Class", due: "due Apr 28, 2026 2:05 pm", xp: "0/60" },
      { type: "In Class", title: "Post Order Traversal - In Class", due: "due Apr 28, 2026 10:32 am", xp: "20/60" },
      { type: "AI Mock Interview", title: "DSA Mock Interview 8", due: "due Apr 29, 2026 2:00 am", xp: "45 minutes" },
      { type: "Contest", title: "DSA Revision Assignment", due: "due May 5, 2026 10:00 am", xp: "0/1740" }
    ],
    lectures: [],
    quizzes: []
  }
};
