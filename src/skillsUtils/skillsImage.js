import bootstrap from "../assets/svg/skills/bootstrap.svg";
import css from "../assets/svg/skills/css.svg";
import figma from "../assets/svg/skills/figma.svg";
import firebase from "../assets/svg/skills/firebase.svg";
import git from "../assets/svg/skills/git.svg";
import html from "../assets/svg/skills/html.svg";
import javascript from "../assets/svg/skills/javascript.svg";
import materialui from "../assets/svg/skills/materialui.svg";
import mysql from "../assets/svg/skills/mysql.svg";
import react from "../assets/svg/skills/react.svg";
import tailwind from "../assets/svg/skills/tailwind.svg";
import typescript from "../assets/svg/skills/typescript.svg";
import angular from "../assets/svg/skills/angular.svg";
import mongoDB from "../assets/svg/skills/mongoDB.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "angular":
      return angular;
    case "javascript":
      return javascript;
    case "react":
      return react;
    case "typescript":
      return typescript;
    case "bootstrap":
      return bootstrap;
    case "git":
      return git;
    case "firebase":
      return firebase;
    case "mysql":
      return mysql;
    case "tailwind":
      return tailwind;
    case "materialui":
      return materialui;
    case "figma":
      return figma;
    case "mongodb":
      return mongoDB;
    default:
      break;
  }
};
