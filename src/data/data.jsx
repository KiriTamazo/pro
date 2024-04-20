import {
  FaLinkedinIn,
  FaGithub,
  FaFacebookSquare,
  FaInstagram,
  FaReact,
  FaNodeJs,
  FaNode,
  FaPhp,
  FaLaravel,
} from "react-icons/fa";
import {
  SiBootstrap,
  SiCss3,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiMongodb,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiMui,
  SiMysql,
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";
export const links = ["Home", "About Me", "Abilities", "Projects", "Contact"];
export const socialLinks = [
  {
    id: 1,
    color: "#0072b1",
    icon: <FaLinkedinIn />,
    to: "https://www.linkedin.com/in/la-woon-htet-aung-9a8a46214/",
  },
  {
    id: 2,
    color: "#171515",
    icon: <FaGithub />,
    to: "https://github.com/KiriTamazo",
  },
  {
    id: 3,
    color: "#3b5998",
    icon: <FaFacebookSquare />,
    to: "https://www.facebook.com/tama.kazo.94",
  },
  // {
  //   id: 4,
  //   color: "#f09433",
  //   icon: <FaInstagram />,
  //   to: "https://www.instagram.com",
  // },
];
export const projects = [
  {
    title: "Allure",
    url: [
      "https://allure-5atl.onrender.com/",
      "https://github.com/KiriTamazo/Mern-Ecommerce-Website",
    ],
    img: "./image/allure.png",
    desc: " Mern Ecommerce website with Authentication,Review the products and can Create and Delete Products",
  },
  {
    title: "Marketing",
    url: [
      "https://kiritamazo.github.io/Marketing/",
      "https://github.com/KiriTamazo/Marketing",
    ],
    img: "./image/marketing.png",
    desc: "Static Website only using HTML,CSS , JavaScript and libraries",
  },
  {
    title: "MeteorV2",
    url: [
      "https://kiritamazo.github.io/MeteorV2/",
      "https://github.com/KiriTamazo/Meteor.github.io",
    ],
    img: "./image/meteor.png",
    desc: "Static Website only using HTML,CSS , JavaScript and libraries",
  },
  {
    title: "Omnifood",
    url: [
      "https://kiritamazo.github.io/OminiFood.github.io/",
      "https://github.com/KiriTamazo/OminiFood.github.io",
    ],
    img: "./image/ominifood.png",
    desc: "Static Website only using HTML,CSS , JavaScript and libraries",
  },
  {
    title: "Nike Store Clone",
    url: [
      "https://nike-store-clone-gamma.vercel.app/",
      "https://github.com/KiriTamazo/nike-store",
    ],
    img: "./image/nike-clone.png",
    desc: "React website using Tailwindcss for styling and Redux for state management",
  },
];

export const ablilities = [
  {
    icon: <SiHtml5 color="#F06529" className="w-8 h-8" />,
    title: "HTML5",
  },
  {
    icon: <SiCss3 color="#2965f1 " className="w-8 h-8" />,
    title: "Css3",
  },
  {
    icon: <SiJavascript color="#F0DB4F" className="w-8 h-8" />,
    title: "Javascript",
  },
  {
    icon: <SiSass color="#cc6699 " className="w-8 h-8" />,
    title: "Sass",
  },
  {
    icon: <SiBootstrap color="#4606F2" className="w-8 h-8" />,
    title: "Bootstrap",
  },
  {
    icon: <SiJquery color="#0769AD " className="w-8 h-8" />,
    title: "Jquery",
  },
  {
    icon: <FaReact color="#61DBFB" className="w-8 h-8" />,
    title: "ReactJS",
  },
  {
    icon: <SiTailwindcss color="#007fff" className="w-8 h-8" />,
    title: "Tailwindcss",
  },
  {
    icon: <SiMui color="#007fff" className="w-8 h-8" />,
    title: "Mui",
  },
  {
    icon: <SiRedux color="#764abc " className="w-8 h-8" />,
    title: "Redux",
  },
  {
    icon: <SiNextdotjs color="#000" className="w-8 h-8" />,
    title: "Next.js",
  },
  {
    icon: <SiFirebase color="#FFCB2B" className="w-8 h-8" />,
    title: "Firebase",
  },
  {
    icon: <FaNode color="#3C873A" className="w-8 h-8" />,
    title: "NodeJS",
  },
  {
    icon: <SiExpress color="#68A063" className="w-8 h-8" />,
    title: "ExpressJS",
  },
  {
    icon: <SiMongodb color="#589636" className="w-8 h-8" />,
    title: "MongoDB",
  },
  {
    icon: <FaPhp color="#787CB5" className="w-8 h-8" />,
    title: "Php",
  },
  {
    icon: <FaLaravel color="#F05340" className="w-8 h-8" />,
    title: "Laravel",
  },
  {
    icon: <SiMysql color="#00758F" className="w-8 h-8" />,
    title: "MySql",
  },
];
export const experiences = [
  {
    companyName: "Creative Coder",
    period: "July 2023 - Present",
    experience:
      "Enhancing the user experience and functionality of our e-commerce application was one of my main contributions to TechMarket's growth inside the Creative Coder network. I worked directly with the team, utilizing technologies like Laravel, Inertia.js, and React, to provide reliable solutions. A dependable and manageable codebase was secured by my concentration on backend development.  In order to preserve the stability and dependability of an application, I also use Cypress to create test cases.",
  },
  {
    companyName: "Ngs Developer Group",
    period: "July 2022 - Feb 2023",
    experience:
      "I contributed to the development of the NGS Dashboard initially and later transitioned to another NGS project, the Shwe RealEstate Project. In the Real Estate Project, my responsibilities included coding the visually appealing main website and enhancing the dashboard functionality using technologies such as React, MUI, and Sass.",
  },
];
