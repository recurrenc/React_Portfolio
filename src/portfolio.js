import emoji from "react-easy-emoji";

import dsclogo from "./assets/img/icons/common/dsc.svg";

export const greetings = {
  name: "Sonu Kumar",
  title: "Hi all, I'm Sonu",
  description:
    "I offer my expertise in web development - both front-end (including UI design, HTML, CSS, JavaScript, React, Next & other frameworks) and back-end (Node.js, Express.js) with Database support by MongoDB, as well as Electron-based Desktop Application development and React Native based Cross-Plateform Mobile Application.",
  resumeLink:
    "https://drive.google.com/file/d/1RYc7biZhnmDmiiR8blUmCFgDH6EHhEvX/view?usp=sharing",
};

export const openSource = {
  githubUserName: "0xsonu",
};

export const contact = {};

export const socialLinks = {
  youtube: "https://www.youtube.com/channel/UCTZbxmX_heRWbbopfPvoHQA",
  facebook: "https://www.facebook.com/sonukumar81800/",
  instagram: "https://www.instagram.com/__.__s.o.n.u__.__/",
  twitter: "https://twitter.com/sonukum27391549",
  github: "https://github.com/0xsonu",
  linkedin: "https://www.linkedin.com/in/0xsonu/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Mostly Prefer to work as Backend Developer."),
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "logos:sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "logos:typescript-icon",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },
    {
      skillName: "express",
      fontAwesomeClassname: "logos:express",
    },
    {
      skillName: "java",
      fontAwesomeClassname: "vscode-icons:file-type-java",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "vscode-icons:file-type-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "vscode-icons:file-type-sql",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "logos:aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "logos:firebase",
    },
    {
      skillName: "REST",
      fontAwesomeClassname: "logos:rest",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "70", //Insert relative proficiency in percentage
  },
  {
    Stack: "API Design",
    progressPercentage: "80",
  },
  {
    Stack: "Backend",
    progressPercentage: "75",
  },
  {
    Stack: "Competative Programming",
    progressPercentage: "40",
  },
];

export const educationInfo = [
  {
    schoolName: "Guru Ghasidas University",
    subHeader: "Bachelor of Technology in Computer Science",
    duration: "August 2019 - May 2023",
    desc: "Pursuing Bechelors As Well As Member of Developer Student Club (DSC-GGV).",
    descBullets: [
      "Appearing in GATE 2022 Exam",
      "Took courses about Software Engineering, Web Security, Operating Systems, ...",
      "Expected to graduate in 2023 with 8.5 GPA",
    ],
  },
  {
    schoolName: "Jawahar Navodaya Vidyalaya Bikram Patna",
    subHeader: "CBSE 12th PCM",
    duration: "July 2010 - May 2017",
    desc: "Creaked District Level JNV Enterance Exam  and Got Admission in JNV Patna",
    descBullets: [
      "Under-16 SGFI Chess in 2014",
      "9.6 CGPA in Class 10th ",
      "78% in Class 12th (PCM)",
    ],
  },
];

export const experience = [
  {
    role: "Web Developer (Club Lead)",
    company: "Developer Student Club",
    companylogo: dsclogo,
    date: "June 2020 – Present",
    desc: "Joined Developer Student Club as a Member of Web/Android Club in July 2020.",
    descBullets: [
      "Feedback System Designed and Developed for Guru Ghasidas University where students can give their feedback about professors. And University Administrator can take Action on the basis of these feedbacks Statistics.",
      "Manage DSC-GGV official Website and events update.",
    ],
  },
  {
    role: "FullStack Developer Intern",
    company: "Boossti",
    companylogo: dsclogo,
    date: "Dec 2021 – June 2022",
    desc: "Worked as a FullStack Developer with tech stack MERN.",
    descBullets: [
      "Wrote Production-ready code with fluency in modern front-end (React/Next) and backend (Express/Node) framework.",
      "Used AWS SDK & Amplify in cooperation with continious integration and test automation and supported software reuse and refactoring.",
    ],
  },
  {
    role: "Backend Developer",
    company: "Dappunk",
    companylogo: dsclogo,
    date: "May 2023 – Dec 2023",
    desc: "Worked as a Backend Developer and build robust and scalable infrastructure.",
    descBullets: [
      "Integrated Stripe Payment Gateway: Processed online payments seamlessly and securely, expanding financial functionality.",
      "Integrated Alchemy API: Leveraged robust blockchain infrastructure for reliable and scalable interactions with blockchain networks.",
      "Implemented WebSockets: Established real-time, bidirectional communication channels for enhanced user experiences and data synchronization.",
      "Scalable Infrastructure Design and Deployment: Designed and deployed a scalable, secure, and cost-effective backend infrastructure on AWS.",
    ],
  },
  {
    role: "Assistant System Engineer",
    company: "Tata Consultancy Services",
    companylogo: dsclogo,
    date: "Jan 2024 – Present",
    desc: "Working as a System Engineer in Ericssion Team",
    descBullets: [
      "Java Development: Expertise in designing and implementing Java-based applications, ensuring efficient and scalable solutions.",
      "System Architecture: Proficient in designing and optimizing system architectures to meet performance, security, and scalability requirements.",
    ],
  },
];

export const projects = [
  {
    name: "Feedback System - GGV",
    desc: "Feedback System Designed and Developed for Guru Ghasidas University where students can give their feedback about professors. And University Administrator can take Action on the basis of these feedbacks Statistics.",
    github: "https://github.com/DSCGGV/WebD-club-project",
  },
  {
    name: "Country Rank",
    desc: "This Repository Contains a react next project which provide us world wide rank of all 250 countries based on their population, area, economy, and also show there respective Neighbour Countries.",
    github: "https://github.com/SonuKumar81800/Country-Rank",
    link: "https://country-rank-ten.vercel.app/",
  },
  {
    name: "Covid Tracker India",
    desc: "This Project Shows us Daily Covid Infected, Death, Recovered Statistics in real time.",
    github: "https://github.com/SonuKumar81800/CovidTrackerReact",
    link: "https://c19trackerindia.web.app/",
  },
];

export const feedbacks = [
  {
    name: "Priya Prajapati",
    link: "https://www.linkedin.com/in/0xpriya/",
    feedback:
      "Sonu is really good at coding and has a creative way of problem solving. He is always willing to tackle new challenges in a creative way.",
  },
  {
    name: "Dipu Singh",
    link: "https://www.linkedin.com/in/dipu-singh-297b05142/",
    feedback:
      "Sonu is really hard working and he is always ready to accept and perform any challenges. Even I have seen his dedication towards work and really he is skilled in different kind of technologies. I wish you a great future endeavours. ",
  },
  {
    name: "Benison Dhanji",
    link: "https://www.linkedin.com/in/benisondhanji/",
    feedback:
      "Sonu amazes me with his knowledge in website development and coding. We have worked on few projects together and he always exceeded our expectations. He's always professional and has a great hold on react and cybersecurity. ",
  },
  {
    name: "Jaspreet Singh",
    link: "https://www.linkedin.com/in/jaspreet-singh-784ab3144/",
    feedback:
      "Sonu is really hard working and amazing person to work with. His positive attitude and never give up attitude impressed me and my team.",
  },
];
