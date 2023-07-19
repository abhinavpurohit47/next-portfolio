import { Experience,Skill } from "./type";
import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { FcAdvertising } from "react-icons/fc";
import { FaGraduationCap } from "react-icons/fa";
import { BsCircleFill } from "react-icons/bs";
import { IProject } from "./type";
import {IAccomplishments} from "./type";




export const experiences: Experience[] = [
    {
        Icon: RiComputerLine,
        title: "Software Development Member",
        from:"Jul 2021 - Nov 2021",
        organization:"Tech Analogy",
        about:"•	Collaborated with multi-disciplinary teams of developers, designers, and clients on a daily basis.",
    },
    {
        Icon: FaServer,
        title: "Web Developer",
        from:"Feb 2021 - Nov 2021",
        organization:"Aakash Research Labs",
        about:" •	Develop and maintain code for in-house and client websites primarily using React.js, Tailwindcss, Node.js and JavaScript.",
    },
        {
        Icon: RiComputerLine,
        title: "Full Stack Developer Intern",
        from:"Mar 2021 - May 2021",
        organization:"Elixar",
        about:" •	Wrote modern, performant, maintainable code for a diverse array of client and internal projects.",
    },
        {
        Icon: FcAdvertising,
        title: "Marketing Associate",
        from:"Sep 2019 - Aug 2020",
        organization:"IWSC-SRM",
        about:"  • Effectively managed weekly administrative tasks.\n  • Contributed to collaborative efforts and organized promotional events.",
    },
            {
        Icon: FaGraduationCap,
        title: "Campus Ambassador",
        from:"Sep 2019 - Oct 2020",
        organization:"Viden.io",
        about:"  • Nurtured student community with the knowledge of the services.  • Initiated marketing and promotional activities including the social media marketing.\n  • Spread awareness about the product among the student's community.",
    },
]; 
export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "55",
  },
   {
    Icon: BsCircleFill,
    name: "C/C++",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "65",
  },

  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },

  {
    Icon: BsCircleFill,
    name: "TailwindCSS",
    level: "80",
  },
   {
    Icon: BsCircleFill,
    name: "SQL",
    level: "60",
  },
     {
    Icon: BsCircleFill,
    name: "Node.js",
    level: "55",
  },
     {
    Icon: BsCircleFill,
    name: "BootstrapCSS",
    level: "80",
  },

];
export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "MS Excel",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "MS Word",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45",
  },
];
export const accomplishments:IAccomplishments[] =[
  {
  id:11,
  name:"Tech Analogy",
  image_path:"/images/TA-Certificate.png",
  description:"Internship certificate of Tech Analogy",
    type:["internship"]
},
{
id:12,
name:"Elixar",
image_path:"/images/abhinav-elixir internship certificate.jpg",
description:"Internship certificate of Elixar",
  type:["internship"]
},
{
id :13,
name:"SIH",
image_path:"/images/SIH.png",
description:"Certificate for first round of Smart India Hackathon",
type:["hackathons"]
},
{
  id:14,
  name:"HACKON",
  image_path:"/images/hackon.png",
  description:"Certificate for HackOn Hacakthon",
  type:["hackathons"]
},
{
  id:15,
  name:"National Engineering Olympiad",
  image_path:"/images/neo.png",
  description:"Certificate for NEO-5",
  type:["certifications"]
},
{
  id:16,
  name:"Advanced Excel Tutorial",
  image_path:"/images/excel.png",
  description:"Certificate for completion of Advanced Excel Tutorial by Elearnmarkets",
  type:["certifications"]
}

];
export const projects: IProject[] = [
  {
    id: 7,
    name: "Project Mercury",
    image_path: "/images/Mercury.png",
    deployed_url: "https://mercury-auth.vercel.app/",
    github_url: "https://github.com/abhinavpurohit47/Mercury-Auth",
    category: ["react","Tailwind"],
    description:
      "Authorization System And Chat System for Shipping Business",
    key_techs: ["React", "Jwt", "API", "TailwindCSS"],
  },
  {
    id: 1,
    name: "Invest Yaar",
    image_path: "/images/Investyaar.png",
    deployed_url: "https://invest-yaar.vercel.app/",
    github_url: "https://github.com/abhinavpurohit47/invest_yaar",
    category: ["react","Tailwind"],
    description:
      "A crypto tracker with variety of features",
    key_techs: ["React", "API", "TailwindCSS"],
  },
  {
    id: 2,
    name: "Project Disseminator",
    image_path: "/images/Disseminator.png",
    deployed_url: "https://disseminator-frontend.vercel.app/",
    github_url: "https://github.com/abhinavpurohit47/Disseminator_frontend",
    category: ["mongo","react","next","Tailwind"],
    description:
      "Disseminator App allows you to share your files in an easier way.You can send your files through emails and also download the recieved files",
    key_techs: ["React", "Mongo", "API", "TailwindCSS"],
  },
  {
    id: 3,
  name: "Touchless-Sanitizer",
  image_path: "/images/Touchless.png",
  deployed_url: "https://touchlesssanitizer.herokuapp.com/",
  github_url: "https://github.com/sai-surya-rali/Arduino-Sanitizer-Dispenser",
  category: ["basic","Tailwind"],
  description:
    "This webapp consists the demo of the working of the touchless-sanitizer and other info.",
  key_techs: ["HTML","CSS","JavaScript"],
},
  
    {
      id: 5,
    name: "To DO List",
    image_path: "/images/Todo.png",
    deployed_url: "https://abhinavpurohit47.github.io/To-Do-List/",
    github_url: "https://github.com/abhinavpurohit47/To-Do-List",
    category: ["basic"],
    description:
      "To Do list to help you maintain a record of what to do in near future with all necessary features",
    key_techs: ["HTML","CSS","JavaScript"],
  },
   {
     id: 4,
    name: "Simon Game",
    image_path: "/images/download.png",
    deployed_url: "https://abhinavpurohit47.github.io/Simon-Game/",
    github_url: "https://github.com/abhinavpurohit47/Simon-Game",
    category: ["basic"],
    description:"The device creates a series of tones and lights and requires a user to repeat the sequence. If the user succeeds, the series becomes progressively longer and more complex. Once the user fails, the game is over. Both strict mode and the normal mode have been provided in the game.",
    key_techs: ["HTML","CSS","JavaScript"],
  },
];

