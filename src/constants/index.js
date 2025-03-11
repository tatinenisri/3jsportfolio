import { useState } from "react";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  django,
  sql,
  starbucks,
  tesla,
  shopify,
  DS1,
  I2I1,
  JAP,
  CWHD,
  GS,
  HMS,
  Ride,
  java,
  python,
  spring,
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
    title: "Fullstack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name:"java",
    icon:java,
  },
  {
    name:"python",
    icon:python,
  },
  {
    name:"SpringBoot",
    icon:spring,
  },
  {
    name:"Django",
    icon:django,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Master's in Computer Science",
    company_name: "George Mason University",
    icon: starbucks,
    iconBg: "#383E56",
    // date: "August 2022 - May 2024",
    points: [
      "Built a web application for in-house project tracking using Java Spring Boot and advanced routing features of React, incorporating REST APIs for user authentication, creating, browsing, and tracking task status in real-time, within Agile Framework.",
      "Implemented routing to reduce load times by 75%, enabling seamless page transitions.",
      "Optimized MongoDB with advanced indexing and sharding, improving query response times by 35%.",
      "Orchestrated a migration project, transitioning legacy system from Scala to Java, resulting in enhanced performance of 25%.",
      "Collaborated in an Agile environment and conducted unit testing to ensure high standards in quality of the software.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Exposys Datalabs",
    icon: shopify,
    iconBg: "#383E56",
    // date: "March 2020 - April 2021",
    points: [
      "Built a web application for in-house project tracking using Java Spring Boot and advanced routing features of React, incorporating REST APIs for user authentication, creating, browsing, and tracking task status in real-time, within Agile Framework.",
      "Implemented routing to reduce load times by 75%, enabling seamless page transitions.",
      "Optimized MongoDB with advanced indexing and sharding, improving query response times by 35%.",
      "Orchestrated a migration project, transitioning legacy system from Scala to Java, resulting in enhanced performance of 25%.",
      "Collaborated in an Agile environment and conducted unit testing to ensure high standards in quality of the software.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Embytes Solutions",
    icon: tesla,
    iconBg: "#E6DEDD",
    // date: "Jan 2021 - Feb 2022",
    points: [
      "Developed and maintained backend services for a video conference platform built on top of WebRTC using Java and Spring Framework, ensuring the scalability, performance, and reliability.",
      "Managed version control with Git, providing real-time insights and improving monitoring efficiency by 25%.",
      "Integrated Jenkins for automated data updates, ensuring accurate and up-to-date information across all dashboards, reducing manual update time by 45%.",
      "Partnered with business stakeholders to create data workflows and improve reporting capabilities, driving analytics-based insights and enabling actionable decision-making.",
      "Conducted development within a test-driven framework using JUnit and Mockito, ensuring high code quality.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Dream Scape",
    description:
      "Web-based AI dream analysis application with gamification designed to help you unlock the hidden meanings of your dreams and improve your well-being!",
    tags: [
      {
        name: "vite",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "supabase",
        color: "pink-text-gradient",
      },
    ],
    image: DS1, // Store multiple images
    source_code_link: "https://github.com/charantatineni",
  },
  {
    name: "I2I - Imagination to Image",
    description:
      "AI Image Generation app called I2I, Built with React, TypeScript for a smooth, responsive UI. Powered by Supabase for seamless backend database and authentication! ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "llm",
        color: "pink-text-gradient",
      },
    ],
    image: I2I1,
    source_code_link: "https://github.com/charantatineni",
  },
  {
    name: "Ride",
    description:
      "A student ride sharing app that lets students to ride-share with other students. Built with Typescript, React, Vite. Used Supabase for auth and DataBase. ",
    tags: [
      {
        name: "supabase",
        color: "blue-text-gradient",
      },
      {
        name: "microservices",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: Ride,
    source_code_link: "https://github.com/charantatineni",
  },
  
];

const projects2 = [
  {
    name: "Hospital Management System",
    description:
      "Implemented web platform for accessing patient and doctor data using PostgreSQL, Node.js, React. Supporting real-time updates and handles hundreds of concurrent queries with minimal latency.",
    tags: [
      {
        name: "PostgreSQL",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: HMS, // Store multiple images
    source_code_link: "https://github.com/charantatineni",
  },
  {
    name: "Construction Worker Helmet Detection",
    description:
      "Developed an optimized desktop application using Python, Django, Flask, and a trained ResNet model. Achieved 95.6% detection accuracy, utilizing a trained ResNet model with TensorFlow! ",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
    ],
    image: CWHD,
    source_code_link: "https://github.com/charantatineni",
  },
  {
    name: "Job Application Portal",
    description:
      "Designed sleek, responsive application for job postings. Optimized database performance using PostgreSQL to handle large datasets, ensuring seamless operation and scalability during peak usage, supporting over 200 applications per minute. ",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: JAP,
    source_code_link: "https://github.com/charantatineni",
  },
  {
    name: "Game Surf",
    description:
      "A modern game store platform built as a wrapper for Phaser.io. Features include real-time inventory updates, user reviews. Implements responsive design for optimal mobile experience.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "Wrapper",
        color: "pink-text-gradient",
      },
    ],
    image: GS,
    source_code_link: "https://github.com/charantatineni",
  },
];

export { services, technologies, experiences, testimonials, projects, projects2 };
