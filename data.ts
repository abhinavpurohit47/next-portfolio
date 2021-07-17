import { Experience,Skill } from "./type";
import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { FcAdvertising } from "react-icons/fc";
import { FaGraduationCap } from "react-icons/fa";
import { BsCircleFill } from "react-icons/bs";
import { IProject } from "./type";




export const experiences: Experience[] = [
    {
        Icon: RiComputerLine,
        title: "Software Development Member",
        from:"Jun-2021 - Present",
        organization:"Tech Analogy",
        about:"•	Collaborated with multi-disciplinary teams of developers, designers, and clients on a daily basis.",
    },
    {
        Icon: FaServer,
        title: "Web Developer",
        from:"Feb 2021 - Present",
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
    level: "50",
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
  //    {
  //   Icon: BsCircleFill,
  //   name: "SQL",
  //   level: "50",
  // },
  //    {
  //   Icon: BsCircleFill,
  //   name: "SQL",
  //   level: "50",
  // },
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

export const projects: IProject[] = [
  {
    id: 1,
    name: "Project Mercury",
    image_path: "/images/football.png",
    deployed_url: "https://mercury-auth.vercel.app/",
    github_url: "https://github.com/abhinavpurohit47/Mercury-Auth",
    category: ["react"],
    description:
      "Authorization System And Chat System for Shipping Business",
    key_techs: ["React", "Redux", "API", "TailwindCSS"],
  },
    {
      id: 2,
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
     id: 3,
    name: "Simon Game",
    image_path: "/images/download.png",
    deployed_url: "https://abhinavpurohit47.github.io/Simon-Game/",
    github_url: "https://github.com/abhinavpurohit47/Simon-Game",
    category: ["basic"],
    description:"The device creates a series of tones and lights and requires a user to repeat the sequence. If the user succeeds, the series becomes progressively longer and more complex. Once the user fails, the game is over. Both strict mode and the normal mode have been provided in the game.",
    key_techs: ["HTML","CSS","JavaScript"],
  },
];

