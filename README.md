# Newton Portal Clone

A professional learning management system (LMS) dashboard clone built with React, Vite, and Tailwind CSS. This project replicates the core user experience of the Newton School portal, focusing on student performance tracking and assignment management.

---

##  Features

* **Unified Dashboard**: View high-level performance across assignments, lectures, and quizzes.
* **Subject-Specific Navigation**: Dedicated views for "FOAI Enigma," "WAP Turing," and "Maths-2 Turing" with unique stats and content.
* **Performance Visualization**: Custom progress cards with dynamic color coding based on completion percentages.
* **Assignment Tracking**: Specialized interface to view due dates, XP rewards, and task status (Done/Pending).
* **Live Event Banner**: Feature-rich home banner for "Question of the Day" and upcoming mock tests.
* **Responsive Layout**: Optimized for both desktop and mobile viewing using Tailwind's grid and flexbox utilities.

---

##  Tech Stack

* **Framework**: React (Vite)
* **Styling**: Tailwind CSS
* **State Management**: React Hooks (`useState`)
* **Icons/Data**: Mock data architecture for seamless UI testing

---

##  Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx          # Sticky top navigation with student profile
│   ├── Sidebar.jsx         # Main navigation controls
│   ├── Card.jsx            # Reusable progress tracking cards
│   └── AssignmentList.jsx  # Individual assignment row items
├── pages/
│   ├── Home.jsx            # Performance overview and calendar
│   ├── Assignment.jsx      # Centralized assignment management
│   └── SubjectPage.jsx     # Detailed view for specific subjects
└── data/
    └── mockData.js         # Centralized mock database
