import {
  mobile,
  backend1,
  creator,
  web,
  programmer,
  frontend,
  database,
  devops,
  backend,
  ghostmessages,
  currencyconverter,
  passgenerator,
  sauraverse,
  npmpackage,
  docsclone,
} from "../assets";

export const navLinks = [
  {
    id: "https://blog.sauraverse.com/",
    title: "Blogs",
  },
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
      "This AI-powered Messaging platform lets users receive anonymous messages by sharing a unique link. Sender's identity remains hidden, making interactions fun and gamified. Share your link & see what exciting messages come your way!",
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
    image: ghostmessages,
    source_code_link: "https://github.com/sauraverse/nextjs-ghost-messages",
    website_link: "https://ghostmessages.sauraverse.com/",
  },
  {
    name: "Google Docs Clone",
    description:
      "Web-based document editor that replicates the core features of Google Docs. Users can create, edit, and share documents in real-time, with support for collaborative editing using Socket.io and rich text formatting using QuillJS API.",
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
        name: "QuillJS API",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: docsclone,
    source_code_link: "https://github.com/sauraverse/google-docs-clone",
    website_link: "https://github.com/sauraverse/google-docs-clone",
  },
  {
    name: "npm Package",
    description:
      "Create unique IDs for slugs, passwords, and more with ease. Our package allows you to customize string length, include numbers, and special characters to fit your needs.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "npm",
        color: "green-text-gradient",
      },
      {
        name: "cst-unique-id",
        color: "pink-text-gradient",
      },
    ],
    image: npmpackage,
    source_code_link: "https://github.com/sauraverse/npm-package",
    website_link: "https://www.npmjs.com/package/cst-unique-id",
  },
  // {
  //   name: "Currency Converter",
  //   description:
  //     "React based Currency Converter app made using Custom Hooks, useID hook etc. Fetched frankfurter's API consisting updated foreign-exchange-rates published by European Central Bank.",
  //   tags: [
  //     {
  //       name: "ReactJS",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Tailwind CSS",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Frank Furter API",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "custom-react-hooks",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: currencyconverter,
  //   source_code_link: "https://github.com/sauraverse/currency-converter",
  //   website_link: "https://sauraverse-currency-converter.vercel.app/",
  // },
  // {
  //   name: "Password Generator",
  //   description:
  //     "React-based tool, utilizing hooks like useEffect, useRef, and optimized with useCallback.",
  //   tags: [
  //     {
  //       name: "ReactJS",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Tailwind CSS",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "react-hooks",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "react-optimisations",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: passgenerator,
  //   source_code_link: "https://github.com/sauraverse/react-optimizedPasswordGenerator",
  //   website_link: "https://sauraverse-password-generator.vercel.app/",
  // },
  // {
  //   name: "3d Portfolio",
  //   description:
  //     "Built react-based 3d portfolio website using Three.js, framer-motion... With intuitive & responsive design. Added confetti-effect on form submission and what not, to make UX impressive.",
  //   tags: [
  //     {
  //       name: "ReactJS",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "react-three-fiber",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Tailwind CSS",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "framer-motion",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "emailJS API",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: sauraverse,
  //   source_code_link: "https://github.com/sauraverse/3d_portfolio",
  //   website_link: "https://sauraverse.com",
  // },
];

export { services, experiences, projects };
