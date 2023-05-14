import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    php,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    firebase,
    git,
    figma,
    vercel,
    pamino,
    grimaldi,
    storetract,
    kwasu,
    repe,
    audiophile,
    sneakers,
    threejs,
    userone,
    usertwo,
    userthree,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Product Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "PHP",
      icon: php,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "vercel",
      icon: vercel,
    },
  ]; 
  
  const experiences = [
    {
      title: "Bsc. Computer Science",
      company_name: "Kwara State University",
      icon: kwasu,
      iconBg: "#383E56",
      date: "Aug 2016 - Oct 2020",
      points: [
        "Completed courses in Data Structures and Algorithms, Database Systems, and Computer Networks, which have honed my problem-solving and programming skills.",
        "Completed a summer internship at a local software development company, where I worked on quality assurance and software testing, gaining hands-on experience with industry-standard testing tools and processes.",
        "Proficient in programming languages such as Java and PHP, and experienced in using software development tools such as Git and Eclipse IDE.",
        "Developed a web application for a course project using HTML, CSS, and JavaScript, which showcased my ability to design and implement software solutions.",
      ],
    },

    {
      title: "Software Tester",
      company_name: "Grimaldi",
      icon: grimaldi,
      iconBg: "#E6DEDD",
      date: "July 2021 - April 2022",
      points: [
        "Assisted in conducting functional testing on web and mobile applications, and documented test results and defects.",
        "Collaborated with team members to create test cases and execute them, and actively participated in daily standup meetings to report progress.",
        "Familiarized with Agile development methodologies and experienced in testing softwares.",
        "Identified and reported defects in a timely manner and collaborated with the development team to resolve them.",
      ],
    },

    {
      title: "Frontend Developer",
      company_name: "Storetract",
      icon: storetract,
      iconBg: "#E6DEDD",
      date: "May 2022 - December 2023",
      points: [
        "Developed the frontend of an ecommerce website using HTML, CSS, and JavaScript.",
        "Skilled in using React and Redux to build complex user interfaces and manage state effectively.",
        "Designed and implemented a mobile-first approach for an ecommerce website to improve user experience on smaller screens.",
        "Collaborated with cross-functional teams, including designers and backend developers, to develop and launch new features on an ecommerce website.",
      ],
    },
  
    {
      title: "Frontend Engineer",
      company_name: "Pamino.js",
      icon: pamino,
      iconBg: "#383E56",
      date: "Jan 2023 - Present",
      points: [
        "Worked as a freelance frontend developer for various clients and developed responsive websites using Bootstrap and CSS frameworks",
        "Created a portfolio website using React and deployed it on Netlify",
        "Proficient in JavaScript, React, Redux, and CSS pre-processors like Sass and Less.",
        "Participation in relevant online communities or forums, such as Frontend Mentor or GitHub, where you can showcase your skills and collaborate with others in the field.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Pamino's web dev skills created my stunning portfolio site, perfectly showcasing my work.", 
      name: "Bode MTN",
      designation: "Data Analyst",
      company: "MTN NG",
      image: usertwo,
    },
    {
      testimonial:
        "Pamino is an exceptional web developer who truly cares about his clients' success.",
      name: "AZ Teepixel",
      designation: "CEO",
      company: "Teepixel's",
      image: userone,
    },
    {
      testimonial:
        "Thank you Pamino for creating a stunning website that perfectly captures our brand.",
      name: "Sisi Oyin",
      designation: "CEO",
      company: "Lingeries by Sisi Oyin",
      image: userthree,
    },
  ];
  
  const projects = [
    {
      name: "Repe",
      description:
        "Use our tools to plan, design, and build your renovation with the industry's top designers and contractors.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "PWA",
          color: "pink-text-gradient",
        },
      ],
      image: repe,
      source_code_link: "https://repe.vercel.app/",
    },
    {
      name: "Audiophile",
      description:
        "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vercel",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: audiophile,
      source_code_link: "https://audiphile19.vercel.app/",
    },
    {
      name: "Sneakers",
      description:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
        tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: sneakers,
      source_code_link: "https://sneakers-product-page-one.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };