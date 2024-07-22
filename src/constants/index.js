import {
  mobile,
  backend1,
  creator,
  web,
  carrent,
  jobit,
  tripguide,
  programmer,
  frontend,
  database,
  devops,
  backend,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "DevOps Engineer",
    icon: backend1,
  },
  {
    title: "Database Designer",
    icon: creator,
  },
];


const experiences = [
  {
    title: "Programming Languages",
    company_name: "",
    icon: programmer,
    iconBg: "#383E56",
    date: "",
    points: [
      "JavaScript",
      "TypeScript",
      "C++",
      "Python",
    ],
  },
  {
    title: "Front-end Development",
    company_name: "",
    icon: frontend,
    iconBg: "#383E56",
    date: "",
    points: [
      "React.js",
      "Redux Toolkit",
      "Next.js",
      "Bootstrap, Tailwind CSS",
      "Component Library: shadcn ui, magic ui etc.",
    ],
  },
  {
    title: "Back-end Development",
    company_name: "",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Node.js",
      "Express.js",
      "Next Auth.js",
      "RESTful APIs",
      "JWT, Zod"
    ],
  },
  {
    title: "Database",
    company_name: "",
    icon: database,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "MySQL, PostgreSQL",
      "MongoDB",
      "Mongoose, Prisma",
      "Redis",
      'Firebase, Supabase',
    ],
  },
  {
    title: "DevOps & Tools",
    company_name: "",
    icon: devops,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Docker",
      "AWS",
      "Apache Kafka",
      "Jira, Ansible",
      'Vercel, Git, GitHub, VSCode ',
    ],
  },
];

const projects = [
  {
    name: "Ghost Messages",
    description:
      "This platform lets users receive anonymous messages by sharing a unique link. Sender's identity remains hidden, making interactions fun and gamified. Share your link & see what exciting messages come your way!",
    tags: [
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Zod",
        color: "pink-text-gradient",
      },
      {
        name: "Next Auth.js",
        color: "green-text-gradient",
      },
      {
        name: "Google AI API",
        color: "pink-text-gradient",
      },
      {
        name: "Mail API",
        color: "blue-text-gradient",
      },
      
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Google Docs Clone",
    description:
      "Web-based document editor that replicates the core features of Google Docs. Users can create, edit, and share documents in real-time, with support for collaborative editing, commenting, and formatting.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "npm Package",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, experiences, projects };
