import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import ecommerceProjectImg from "@/public/ecommerce-app.png";
import mernChatProjectImg from "@/public/mern-chat.png";
import moviesPlatformProjectImg from "@/public/movies-platform.png";
import gameOverProjectImg from "@/public/game-over.png";
import ideanestProjectImg from "@/public/ideanest.png";
import routeCompanyImg from "@/public/routeCompany.jpg";
import leanNodeCompanyImg from "@/public/leanNodeCompany.jpg";
import dynoCompanyImg from "@/public/dynoCompany.jpg";
import reactIcon from "@/public/react.svg";
import bootstrapIcon from "@/public/bootstrap.svg";
import chakrauiIcon from "@/public/chakra-ui.svg";
import cloudinaryIcon from "@/public/cloudinary.svg";
import expressIcon from "@/public/expressjs.svg";
import mongodbIcon from "@/public/mongodb.svg";
// import nextjsIcon from "@/public/nextjs.svg";
import nodejsIcon from "@/public/nodejs.svg";
import reduxIcon from "@/public/redux.svg";
import scssIcon from "@/public/scss.svg";
import socketioIcon from "@/public/socket-io.svg";
import stripeIcon from "@/public/stripe.svg";
import typescriptIcon from "@/public/typescript.svg";
import nestjsIcon from "@/public/nestjs.svg";
import redisIcon from "@/public/redis.svg";
import dockerIcon from "@/public/docker.svg";
import rapidapiIcon from "@/public/rapid-api.png";
import pharaohCompanyImg from "@/public/pharaohsoft.jpeg";
import hectarCompanyImg from "@/public/hectar.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const educationData = [
  {
    title: "Graduated with Bachelor of Computer Engineering",
    location: "Tanta University",
    description: `Studied for five years at the Faculty of Engineering, specializing in Computer Engineering,
        and graduated with an overall grade of 'Very Good' (3.18 GPA).
        My academic journey included a diverse curriculum covering topics like image processing,
        computer vision, statistics, and information technology, equipping me with a solid foundation
        in both theoretical and practical aspects of the field. For my graduation project,
        I developed the **Eduvation Learning Platform**, a dynamic system offering live sessions
        and real-time chat features, aimed at enhancing the e-learning experience.
        This project showcased my ability to integrate technology and education effectively.`,
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2024",
    stack: [
      "Software Development",
      "Teamwork",
      "Machine Learning",
      "Computer Vision",
      "Programming",
    ],
  },
] as const;

export const experiencesData = [
  {
    title: "Part-time Backend Developer (Remote)",
    location: "Pharaoh Soft, Egypt",
    description: `• Developed and maintained a real-time Events Management System using Nest.js,
MongoDB, Redis, and Socket.IO.
        • Ensured scalability and seamless performance for event-driven applications.
        • Implemented CI/CD pipelines to automate deployment and enhance development
workflow.
        • Optimized server performance for high availability and efficiency.
        • Collaborated with cross-functional teams to build business-driven backend solutions.`,
    icon: pharaohCompanyImg,
    url: "https://www.linkedin.com/company/pharaoh-soft-ltd/posts/?feedView=all",
    date: "Jan 2025 - present",
    stack: [
      "AWS",
      "Nest.js",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "Firebase",
      "Docker",
    ],
  },
  {
    title: "Full-time Backend Developer (Remote)",
    location: "HectarApp, Saudi-Riyadh",
    description: `• Developed a new accounting microservice using NestJS and TypeScript.
        • Worked on a real estate management platform with six microservices.
        • Ensured seamless data flow, scalability, and performance optimization.
        • Implemented best practices for secure and efficient financial transactions.`,
    icon: hectarCompanyImg,
    url: "https://www.linkedin.com/company/hectarapp/about/",
    date: "Dec 2024 - present",
    stack: ["Microservices", "Nest.js", "TypeScript", "MongoDB", "Mongoose"],
  },

  {
    title: "Full-time Backend Developer (Remote)",
    location: "DYNO Tech, Egypt",
    description: `• Developed a real-time location tracking and live status detection server using Nest.js, Socket.IO, MongoDB, and Firebase Cloud Messaging for mobile notifications.
        • Managed the VPS infrastructure and CI/CD pipelines for the applications, ensuring seamless deployment and continuous integration.
        • Leveraged PM2 to optimize CPU core utilization and monitor server performance.
        • Collaborated closely with the mobile (Flutter), frontend (React.js), and testing teams to troubleshoot and resolve complex issues.
        • Designed and implemented a comprehensive dashboard for multiple administrative roles.`,
    // icon: React.createElement(SiNestjs),
    icon: dynoCompanyImg,
    url: "https://www.linkedin.com/company/dynootech/posts/?feedView=all",
    date: "Jul 2024 - present",
    stack: [
      "Nest.js",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "Firebase",
      "Docker",
      "Socket.io",
      "CI/CD",
      "SaaS Development",
      "Realtime Programming",
      "Virtual Private Server (VPS)",
    ],
  },
  {
    title: "Full-time Frontend Developer (Remote)",
    location: "Lean Node Venture Studio, Saudi-Riyadh",
    description: `• Developed intuitive user interfaces for the "Know Your
          Business" (KYP) project to enhance platform usability.
          • Ensured seamless functionality for file and folder management,
          government contract handling, and system integration.
          • Collaborated remotely to streamline processes and improve
          efficiency in frontend development.`,
    // icon: React.createElement(FaReact),
    icon: leanNodeCompanyImg,
    url: "https://www.linkedin.com/company/leannode/posts/?feedView=all",
    date: "Feb 2024 - Jun 2024",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Ant Design",
      "Agile",
    ],
  },
  {
    title: "Full-Stack (MERN) Internship",
    location: "Route, Egypt",
    description: `At Route, I contributed to developing responsive interfaces using HTML, CSS, and JavaScript
        while optimizing APIs with Node.js and MongoDB for seamless data flow. I collaborated with the team to debug,
        enhance features, and ensure scalability, improving user experience and system performance.`,
    // icon: React.createElement(CgWorkAlt),
    icon: routeCompanyImg,
    url: "https://www.linkedin.com/company/routeacademy/",
    date: "Dec 2022 - Sep 2023",
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "Tailwind",
    ],
  },
] as const;

export const projectsData = [
  {
    title: "Full Stack E-Commerce App",
    description: `Stripe Payment Gateway - Send Email - Generate Invoice - User Cart - Wish List - Protected Routing -
			Authentication - Authorization - Validation.`,
    stackIcons: [
      reactIcon,
      bootstrapIcon,
      nodejsIcon,
      mongodbIcon,
      cloudinaryIcon,
      expressIcon,
      stripeIcon,
    ],
    imageUrl: ecommerceProjectImg,
    videoUrl:
      "https://res.cloudinary.com/dayeympjm/video/upload/v1696969384/portfolio/ecommerce.mp4",
    liveDemo: "https://eslam-mohamed78.github.io/E-Commerce-Web-App/",
    frontendRepo: "https://github.com/Eslam-Mohamed78/E-Commerce-Web-App",
    repo: "https://github.com/Eslam-Mohamed78/E-Commerce-BackEnd",
  },
  {
    title: "Full Stack Chat App",
    description: `Main-Features: Real-time chatting, One-to-one chat, Group chat (add & remove members only by admin - update group
        name - leave group), Notification, Authentication.`,
    stackIcons: [
      reactIcon,
      chakrauiIcon,
      nodejsIcon,
      mongodbIcon,
      cloudinaryIcon,
      expressIcon,
      socketioIcon,
    ],
    imageUrl: mernChatProjectImg,
    videoUrl:
      "https://res.cloudinary.com/dayeympjm/video/upload/v1696970721/portfolio/MERN-Chat-App_ajjscx.mp4",
    liveDemo: "https://fe-mern-chat.onrender.com/",
    frontendRepo: "https://github.com/Eslam-Mohamed78/MERN-Chat-App-Frontend",
    repo: "https://github.com/Eslam-Mohamed78/MERN-Chat-App-Backend",
  },
  {
    title: "Online-Gaming Store",
    description: `Main Features: Browse gmaes from different categories, platforms, sorts and demo video for each game with full details,
    Reduxt for state management, Authentication, Vlidation, ProtectedRouting.`,
    stackIcons: [reactIcon, bootstrapIcon, reduxIcon, scssIcon],
    imageUrl: gameOverProjectImg,
    videoUrl:
      "https://res.cloudinary.com/dayeympjm/video/upload/v1696971446/portfolio/gameover_rfglpp.mp4",
    liveDemo: "https://eslam-mohamed78.github.io/Game-Over/",
    repo: "https://github.com/Eslam-Mohamed78/Game-Over",
  },
  // {
  //   title: "Noxe-Movies Platform",
  //   description: `Main Features: TrendingMovies, TVSeries, Actors, TrendingSlider, TVshow, Authentication, Validation.`,
  //   stackIcons: [reactIcon, bootstrapIcon, rapidapiIcon],
  //   imageUrl: moviesPlatformProjectImg,
  //   videoUrl:
  //     "https://res.cloudinary.com/dayeympjm/video/upload/v1696970706/portfolio/Noxe-Movies-Platform_o67aal.mp4",
  //   liveDemo: "https://eslam-mohamed78.github.io/Noxe-Movies-Platform/",
  //   repo: "https://github.com/Eslam-Mohamed78/Noxe-Movies-Platform",
  // },
  {
    title: "Ideanest_Backend",
    description: `Main Features: RefreshToken, Localization, Redis-Caching`,
    stackIcons: [
      nestjsIcon,
      typescriptIcon,
      redisIcon,
      dockerIcon,
      mongodbIcon,
    ],
    imageUrl: ideanestProjectImg,
    videoUrl: "",
    liveDemo: "https://github.com/Eslam-Mohamed78/Ideanest_Backend",
    repo: "https://github.com/Eslam-Mohamed78/Ideanest_Backend",
  },
] as const;

export const skillsData = [
  "JavaScript",
  "Node.js",
  "Express",
  "Nest.js",
  "MongoDB",
  "Mongoose",
  "Firebase",
  "Socket.IO",
  "Docker",
  "Redis",
  "TypeScript",
  "PostgreSQL",
  "Git",
  "VPS",
  "GitHub",
  "GraphQL",
  "Apollo",
  "RESTful API design",
  "security principles",
  "DevOps practices",
  "Problem-Solving",
  "Communication",
  "Team-Work",
] as const;
