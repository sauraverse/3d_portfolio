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
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Google Docs Clone",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
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
