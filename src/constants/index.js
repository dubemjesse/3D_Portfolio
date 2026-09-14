const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 28, suffix: "+", label: "Satisfied Clients" },
  { value: 8, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.7,
    rotation: [0, 0, 0],
  },
  {
    name: "Javascript",
    modelPath: "/models/node-transformed.glb",
    scale: 4,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Typescript",
    modelPath: "/models/typescript-logo.glb",
    scale: 40,
    rotation: [0, 0, 0],
  },
  {
    name: "Tailwind CSS",
    modelPath: "/models/tailwindcss-logo.glb",
    scale: 45,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Jesse delivered exceptional results at Datalinks, building robust banking applications and APIs while driving deployment reliability through solid CI/CD practices.",
    imgPath: "/images/datalinks_.png",
    logoPath: "/images/datalinks-logo.png",
    title: "Applications / Software Developer",
    date: "December 2024 – August 2026",
    responsibilities: [
      "Developed and maintained customer-facing and internal banking applications using React, TypeScript, and Tailwind CSS.",
      "Built and supported RESTful APIs with Node.js and Express.",
      "Integrated applications with SQL databases and cloud services.",
      "Implemented CI/CD pipelines using GitHub Actions to improve deployment reliability.",
      "Performed troubleshooting, root-cause analysis, and performance optimization.",
      "Worked with stakeholders to translate business requirements into technical solutions.",
    ],
  },
  {
    review: "Jesse was a key contributor at Kenechukwu Microfinance Bank, consistently delivering high-quality web solutions and maintaining robust application performance.",
    imgPath: "/images/kenechukwu_.png",
    logoPath: "/images/kenechukwu-logo.png",
    title: "IT Business Analyst",
    date: "August 2022 – November 2024",
    responsibilities: [
      "Analyzed banking applications, business processes, and operational data to identify performance issues, data gaps, and potential risks.",
      "Used SQL, Node.js, and REST APIs to analyze financial data, validate records, and troubleshoot application and integration issues.",
      "Built Excel and Power BI reports and dashboards to track KPIs, trends, data quality, and operational performance.",
      "Supported financial and operational risk assessments by identifying anomalies, control gaps, and process vulnerabilities.",
      "Used Jira and GitHub to manage requirements, track issues, collaborate on code, and support application testing and deployment.",
    ],
  },
  {
    review: "Jesse brought strong analytical thinking and data expertise to Status Transportation, transforming raw data into actionable operational insights.",
    imgPath: "/images/status_.png",
    logoPath: "/images/status-logo.png",
    title: "Data Analyst & Systems Support Specialist",
    date: "July 2020 – July 2022",
    responsibilities: [
      "Performed data cleaning, validation, and analysis using SQL.",
      "Developed Power BI dashboards for KPI tracking and operational reporting.",
      "Automated reporting workflows and reduced manual processing effort.",
      "Resolved reporting discrepancies and data quality issues.",
      "Worked with management to provide insights for operational improvement.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Maryann",
    mentions: "Veralyn Limited",
    review:
      "I can’t say enough good things about Jesse. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/maryann.png",
  },
  {
    name: "Spencer Russell",
    mentions: "Big World Limited",
    review:
      "Working with Jesse was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. Highly recommend him for any web dev projects.",
    imgPath: "/images/picture4.png",
  },
  {
    name: "David",
    mentions: "Kenechukwu Microfinance Bank",
    review:
      "Jesse doesn't just write code — he solves problems. From day one he asked the right questions, caught things I hadn't even thought of, and delivered ahead of schedule. I'll definitely be working with him again.",
    imgPath: "/images/david.png",
  },
  {
    name: "Onyinye Okoli",
    mentions: "WEF Global Shaper",
    review:
      "Jesse was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/onyinye.png",
  },
  {
    name: "Humberto Chávez",
    mentions: "JM Financial Limited",
    review:
      "Jesse’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/pictures3.png",
  },
  {
    name: "Simisola",
    mentions: "KPMG",
    review:
      "Jesse was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/simisola.png",
  },{
    name: "Oluwafemi",
    mentions: "Federal Ministry of Finance",
    review:
      "Since launching the site Jesse built for us, our conversion rate has jumped significantly. He's thorough, communicative, and genuinely invested in the success of your project — not just the delivery.",
    imgPath: "/images/femi.png",
  },
  {
    name: "Christiana",
    mentions: "wocintechchat.com",
    review:
      "Collaborating with Jesse was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project.",
    imgPath: "/images/pictures2.png",
  },{
    name: "Shipman Northcutt",
    mentions: "Status Transportation",
    review:
      "Jesse's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Jesse is the ideal partner.",
    imgPath: "/images/picture1.png",
  },
];

const socialImgs = [
  {
    name: "instagram",
    url: "https://www.instagram.com/dubemjesse/",
    imgPath: "/images/insta.png",
  },
  {
    name: "github",
    url: "https://github.com/dubemjesse/",
    imgPath: "/images/github.png",
  },
  {
    name: "x",
    url: "https://www.twitter.com/dubem_jesse/",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/jesse-odoh/",
    imgPath: "/images/linkedln.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};