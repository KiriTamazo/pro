import {
  FaLinkedinIn,
  FaGithub,
  FaFacebookSquare,
  FaInstagram,
  FaReact,
  FaNodeJs,
  FaNode,
} from "react-icons/fa";
import {
  SiBootstrap,
  SiCss3,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiMaterialui,
  SiMongodb,
  SiRedux,
  SiSass,
  SiTailwindcss,
} from "react-icons/si";
export const links = ["Home", "Skills", "Abilities", "Projects", "Contact"];
export const socialLinks = [
  {
    id: 1,
    color: "#0072b1",
    icon: <FaLinkedinIn />,
    to: "https://www.linkedin.com",
  },
  { id: 2, color: "#171515", icon: <FaGithub />, to: "https://www.github.com" },
  {
    id: 3,
    color: "#3b5998",
    icon: <FaFacebookSquare />,
    to: "https://www.facebook.com",
  },
  {
    id: 4,
    color: "#f09433",
    icon: <FaInstagram />,
    to: "https://www.instagram.com",
  },
];
export const projects = [
  {
    title: "Allure",
    url: [
      "https://allure-5atl.onrender.com/",
      "https://github.com/KiriTamazo/Mern-Ecommerce-Website",
    ],
    img: "./image/allure.png",
    desc: " Mern Ecommerce website with Login,Register,Review the products and can Create and Delete Products",
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
    icon: <FaReact color="#61DBFB" className="w-8 h-8" />,
    title: "ReactJS",
  },
  {
    icon: <FaNodeJs color="#68A063" className="w-8 h-8" />,
    title: "ExpressJS",
  },
  {
    icon: <FaNode color="#3C873A" className="w-8 h-8" />,
    title: "NodeJS",
  },
  {
    icon: <SiRedux color="#764abc " className="w-8 h-8" />,
    title: "Redux",
  },
  {
    icon: <SiFirebase color="#FFCB2B" className="w-8 h-8" />,
    title: "Firebase",
  },
  {
    icon: <SiMaterialui color="#007fff" className="w-8 h-8" />,
    title: "Mui",
  },

  {
    icon: <SiBootstrap color="#4606F2" className="w-8 h-8" />,
    title: "Bootstrap",
  },
  {
    icon: <SiSass color="#cc6699 " className="w-8 h-8" />,
    title: "Sass",
  },
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
    icon: <SiMongodb color="#589636" className="w-8 h-8" />,
    title: "MongoDB",
  },
  {
    icon: <SiJquery color="#0769AD " className="w-8 h-8" />,
    title: "Jquery",
  },
  {
    icon: <SiTailwindcss color="#007fff" className="w-8 h-8" />,
    title: "Tailwindcss",
  },
];
