
import { FunctionComponent } from "react";
import { IconType } from "react-icons";

export interface Experience {
  Icon: IconType;
  title: string;
  about: string;
  from:string;
  organization:string;
}

export interface Skill {
  Icon: IconType;
  name: string;
  level: string;
}
export interface IAccomplishments {
  id:number;
  name:string;
  image_path:string;
  description:string;
  type: Type[];
}
export interface IProject {
  id:number;
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}
export type Type = "internship" | "certifications" | "hackathons";

export type Category = "react" | "node" | "express" | "basic" | "mongo" |"next" | "Tailwind";