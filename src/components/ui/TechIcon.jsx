import {
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss,
  SiReact,
  SiSpringboot,
  SiSpring,
  SiHibernate,
  SiMysql,
  SiGit,
  SiGithub,
  SiIntellijidea,
  SiPostman,
  SiOpenai,
  SiGithubcopilot,
  SiGooglegemini,
  SiAnthropic,
  SiLeetcode,
} from 'react-icons/si';
import { FaDatabase, FaCode, FaRobot, FaLayerGroup, FaJava } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';
import { GrOracle } from 'react-icons/gr';
import { TbApi, TbCursorText, TbBrandVscode } from 'react-icons/tb';
import { VscSymbolClass } from 'react-icons/vsc';

const ICON_MAP = {
  java: { Icon: FaJava, color: '#f89820' },
  javascript: { Icon: SiJavascript, color: '#f7df1e' },
  python: { Icon: SiPython, color: '#3776ab' },
  sql: { Icon: FaDatabase, color: '#00bfa6' },
  html: { Icon: SiHtml5, color: '#e34f26' },
  css: { Icon: SiCss, color: '#1572b6' },
  react: { Icon: SiReact, color: '#61dafb' },
  springboot: { Icon: SiSpringboot, color: '#6db33f' },
  spring: { Icon: SiSpring, color: '#6db33f' },
  jdbc: { Icon: FaDatabase, color: '#00bfa6' },
  hibernate: { Icon: SiHibernate, color: '#59666c' },
  restapi: { Icon: TbApi, color: '#00bfa6' },
  mysql: { Icon: SiMysql, color: '#4479a1' },
  oracle: { Icon: GrOracle, color: '#f80000' },
  dsa: { Icon: FaCode, color: '#1de9b6' },
  systemdesign: { Icon: FaLayerGroup, color: '#00bfa6' },
  oop: { Icon: VscSymbolClass, color: '#a78bfa' },
  git: { Icon: SiGit, color: '#f05032' },
  github: { Icon: SiGithub, color: '#ffffff' },
  intellij: { Icon: SiIntellijidea, color: '#fe315d' },
  vscode: { Icon: TbBrandVscode, color: '#007acc' },
  postman: { Icon: SiPostman, color: '#ff6c37' },
  chatgpt: { Icon: SiOpenai, color: '#10a37f' },
  cursor: { Icon: TbCursorText, color: '#00bfa6' },
  copilot: { Icon: SiGithubcopilot, color: '#a371f7' },
  gemini: { Icon: SiGooglegemini, color: '#8e75b2' },
  claude: { Icon: SiAnthropic, color: '#d4a574' },
  leetcode: { Icon: SiLeetcode, color: '#ffa116' },
  linkedin: { Icon: FaLinkedinIn, color: '#0a66c2' },
  skillcaptain: { Icon: FaRobot, color: '#00bfa6' },
  codersoftech: { Icon: FaCode, color: '#1de9b6' },
};

const FALLBACK = { Icon: FaCode, color: '#00bfa6' };

export default function TechIcon({ id, size = 28, className = '' }) {
  const { Icon, color } = ICON_MAP[id] || FALLBACK;
  return <Icon size={size} className={className} style={{ color }} aria-hidden />;
}

export function getTechColor(id) {
  return (ICON_MAP[id] || FALLBACK).color;
}
