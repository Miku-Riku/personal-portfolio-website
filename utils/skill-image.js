import c from '../app/assets/svg/skills/c.svg';
import cplusplus from '../app/assets/svg/skills/cplusplus.svg';
import css from '../app/assets/svg/skills/css.svg';
import gcp from '../app/assets/svg/skills/gcp.svg';
import git from '../app/assets/svg/skills/git.svg';
import html from '../app/assets/svg/skills/html.svg';
import java from '../app/assets/svg/skills/java.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import materialui from '../app/assets/svg/skills/materialui.svg';
import mongoDB from '../app/assets/svg/skills/mongoDB.svg';
import mysql from '../app/assets/svg/skills/mysql.svg';
import nextJS from '../app/assets/svg/skills/nextJS.svg';
import php from '../app/assets/svg/skills/php.svg';
import python from '../app/assets/svg/skills/python.svg';
import react from '../app/assets/svg/skills/react.svg';
import tailwind from '../app/assets/svg/skills/tailwind.svg';
import typescript from '../app/assets/svg/skills/typescript.svg';
import vitejs from '../app/assets/svg/skills/vitejs.svg';
import vue from '../app/assets/svg/skills/vue.svg';



export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'gcp':
      return gcp;
    case 'html':
      return html; 
    case 'css':
      return css;    

    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'react':
      return react;
    case 'typescript':
      return typescript;
    case 'vue':
      return vue;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'tailwind':
      return tailwind;
    case 'vitejs':
      return vitejs;
    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'java':
      return java;
    case 'php':
      return php;
    case 'python':
      return python;
    case 'git':
      return git;
    case 'materialui':
      return materialui;
    default:
      break;
  }
}
