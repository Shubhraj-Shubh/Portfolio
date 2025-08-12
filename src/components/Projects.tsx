import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { ProjectCard } from './ui/ProjectCard';
import {
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiShadcnui,
  SiSocketdotio,
  SiCplusplus,
  SiJavascript,
  SiMaterialdesign,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiPostgresql,
  SiJsonwebtokens,
  SiGit,
  SiGithub,
  SiVercel,
  SiRender,
  SiPostman,
  SiWebrtc,
} from 'react-icons/si';

// Define reusable tech stack icons & colors
const techStacks = {

  // Languages
  cpp: { icon: SiCplusplus, name: "C++", color: '#00599C' },
  javascript: { icon: SiJavascript, name: "JavaScript (ES6+)", color: '#F7DF1E' },
  typescript: { icon: SiTypescript, name: "TypeScript", color: '#3178C6' },

  // Frontend
  react: { icon: SiReact, name: "React.js", color: '#61DAFB' },
  next: { icon: SiNextdotjs, name: "Next.js", color: '#000000' },
  tailwind: { icon: SiTailwindcss, name: "Tailwind CSS", color: '#06B6D4' },
  materialui: { icon: SiMaterialdesign, name: "Material UI", color: '#007FFF' },
  shadcn: { icon: SiShadcnui, name: "ShadCN/UI", color: '#6366F1' },
  html: { icon: SiHtml5, name: "HTML5", color: '#E34F26' },
  css: { icon: SiCss3, name: "CSS3", color: '#1572B6' },

  // Backend & Databases
  node: { icon: SiNodedotjs, name: "Node.js", color: '#339933' },
  express: { icon: SiExpress, name: "Express.js", color: '#000000' },
  mongodb: { icon: SiMongodb, name: "MongoDB", color: '#47A248' },
  postgresql: { icon: SiPostgresql, name: "PostgreSQL", color: '#4169E1' },
  jwt: { icon: SiJsonwebtokens, name: "JWT", color: '#000000' },

  // Dev Tools & Platforms
  git: { icon: SiGit, name: "Git", color: '#F05032' },
  github: { icon: SiGithub, name: "GitHub", color: '#181717' },
  vercel: { icon: SiVercel, name: "Vercel", color: '#000000' },
  render: { icon: SiRender, name: "Render", color: '#46E3B7' },
  postman: { icon: SiPostman, name: "Postman", color: '#FF6C37' },

  // APIs & Real-time
  socket: { icon: SiSocketdotio, name: "Socket.io", color: '#010101' },
  webrtc: { icon: SiWebrtc, name: "WebRTC", color: '#333333' },

  
};

// Define projects data
const projects = [
 

{
  title: 'CrackCourse AI',
  description: "Built this because learning online shouldn't feel like a wild goose chase! An AI-powered platform where you can generate personalized courses, track progress, and explore curated content: all in a sleek, responsive UI. No more endless “best tutorial for X” searches 😎",
  image: '/assets/CrackCourse_AI.png',
  link: 'https://crack-course-ai.vercel.app/',
  github: 'https://github.com/Shubhraj-Shubh/CrackCourse-AI',
  techStack: [
    techStacks.next,
    techStacks.javascript,
    techStacks.tailwind,
    techStacks.shadcn,
    techStacks.postgresql,
    techStacks.vercel,
  ],
},



{
  title: 'TalkSpace',
  description: 'Built my own video calling app because why rely on Zoom when you can have your own? TalkSpace lets you host smooth video/audio calls, live chat, and even share your screen: all with real-time magic powered by WebRTC and Socket.io. Modern UI, secure auth.',
  image: '/assets/TalkSpace.png',
  link: 'https://talkspace-0.onrender.com',
  github: 'https://github.com/Shubhraj-Shubh/TalkSpace',
  techStack: [
    techStacks.react,
    techStacks.express,
    techStacks.webrtc,
    techStacks.socket,
    techStacks.mongodb,
    techStacks.materialui,
  ],
},



{
  title: 'SplitMate',
  description: "Built this because splitting trip expenses shouldn't require a math degree! SplitMate makes it easy to track expenses, see who owes whom, and visualize spending with clear charts. So, you can focus on making memories, not calculating balances 💸",
  image: '/assets/SplitMate.png',
  link: 'https://split-mate-two.vercel.app/',
  github: 'https://github.com/Shubhraj-Shubh/SplitMate',
  techStack: [
    techStacks.react,
    techStacks.node,
    techStacks.express,
    techStacks.mongodb,
    techStacks.vercel,
    techStacks.render,
  ],
},

 
];

export function Projects() {
  return (<SectionBackground>
    <section id="projects">
      <div className="container mx-auto px-8">
        <SectionTitle subtitle="My code babies - they're not perfect, but they're mine and I love them">Projects</SectionTitle>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

      </div>
    </section>
  </SectionBackground>
  );
}
