import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { SkillCard } from "./ui/SkillCard";
import { SiHtml5, SiCss3,SiC, SiNodedotjs ,SiJavascript,SiDrizzle,SiGooglegemini,SiYoutube,SiMongoose,SiSocketdotio,SiWebrtc,SiJsonwebtokens,SiClerk,SiRender, SiMaterialdesign, SiShadcnui, SiPostgresql, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiRedux, SiExpress,  SiMongodb, SiCplusplus, SiGit, SiGithub, SiPostman, SiVite, SiVercel,SiTwilio } from "react-icons/si";
import { FaBook, FaUserLock,FaRobot } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { TbSql } from "react-icons/tb";



// const skills = [
//   // Frontend
//   { name: "HTML", icon: SiHtml5, color: "#E34F26", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
//   { name: "CSS", icon: SiCss3, color: "#1572B6", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
//   { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
//   { name: "TypeScript", icon: SiTypescript, color: "#3178C6", url: "https://www.typescriptlang.org/" },
//   { name: "React", icon: SiReact, color: "#61DAFB", url: "https://react.dev/" },
//   { name: "Vite", icon: SiVite, color: "#646CFF", url: "https://vitejs.dev/" },
//   { name: "Next.js", icon: SiNextdotjs, color: "#000000", url: "https://nextjs.org/" },
//   { name: "Redux", icon: SiRedux, color: "#764ABC", url: "https://redux.js.org/" },

//   // UI & Styling
//   { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4", url: "https://tailwindcss.com/" },
//   { name: "Material UI", icon: SiMaterialdesign, color: "#0081CB", url: "https://mui.com/" },
//   { name: "ShadCN/UI", icon: SiShadcnui, color: "#000000", url: "https://ui.shadcn.com/" }, 

//   // Backend
//   { name: "Node.js", icon: SiNodedotjs, color: "#339933", url: "https://nodejs.org/" },
//   { name: "Express.js", icon: SiExpress, color: "#000000", url: "https://expressjs.com/" }, 
//   // Database & ORM
//   { name: "MongoDB", icon: SiMongodb, color: "#47A248", url: "https://www.mongodb.com/" },
//   { name: "Mongoose", icon: SiMongoose, color: "#880000", url: "https://mongoosejs.com/" },
//   { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", url: "https://www.postgresql.org/" },
//   { name: "Drizzle ORM", icon: SiDrizzle, color: "#C5F74F", url: "https://orm.drizzle.team/" },
//   { name: "SQL", icon: TbSql, color: "#00758F", url: "https://www.ibm.com/think/topics/structured-query-language" },
  
//   // Auth, APIs & Real-time
//   { name: "JWT", icon: SiJsonwebtokens, color: "#000000", url: "https://jwt.io/" },
//   { name: "NextAuth.js", icon: FaUserLock, color: "#4F46E5", url: "https://next-auth.js.org/" },
//   { name: "Clerk", icon: SiClerk, color: "#6C47FF", url: "https://clerk.com/" }, 
//   { name: "WebRTC", icon: SiWebrtc, color: "#333333", url: "https://webrtc.org/" },
//   { name: "Socket.io", icon: SiSocketdotio, color: "#010101", url: "https://socket.io/" },
//   { name: "Gemini API", icon: SiGooglegemini, color: "#8952FF", url: "https://ai.google.dev/gemini-api" },
//   { name: "YouTube API", icon: SiYoutube, color: "#FF0000", url: "https://developers.google.com/youtube/v3" },
  
//   // Tools & Platforms
//   { name: "Git", icon: SiGit, color: "#F05032", url: "https://git-scm.com/" },
//   { name: "GitHub", icon: SiGithub, color: "#181717", url: "https://github.com/" },
//   { name: "VS Code", icon: VscVscode, color: "#007ACC", url: "https://code.visualstudio.com/" },
//   { name: "Postman", icon: SiPostman, color: "#FF6C37", url: "https://www.postman.com/" },
//   { name: "Vercel", icon: SiVercel, color: "#000000", url: "https://vercel.com/" },
//   { name: "Render", icon: SiRender, color: "#46E3B7", url: "https://render.com/" }, 

//   // Languages & Core Concepts
//   { name: "C++", icon: SiCplusplus, color: "#00599C", url: "https://cplusplus.com/" },
//   { name: "C", icon: SiC, color: "#A8B9CC", url: "https://en.cppreference.com/w/c" },
//   { name: "DSA", icon: FaBook, color: "#2563EB", url: "#" },
//   { name: "OOP", icon: FaBook, color: "#9333EA", url: "#" },
//   // { name: "DBMS", icon: FaBook, color: "#16A34A", url: "#" },
//   // { name: "OS", icon: FaBook, color: "#EAB308", url: "#" },
//   // { name: "CN", icon: FaBook, color: "#DC2626", url: "#" },
//   { name: "System Design", icon: FaBook, color: "#F97316", url: "#" },
// ];


// export function Skills() {
//   return (
//     <SectionBackground>
//       <section id="skills">
//         <div className="container mx-auto px-6">
//           <SectionTitle subtitle="The tech stack I've been collecting like Pokémon cards - gotta catch 'em all! 🎯">Skills</SectionTitle>

//           <div className="max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6">
//             {skills.map((tech) => (
//               <SkillCard key={tech.name} name={tech.name} icon={tech.icon} color={tech.color} url={tech.url} />
//             ))}
//           </div>

//         </div>
//       </section>
//     </SectionBackground>
//   );
// }

// New Data Structure for Skills
const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS", icon: SiCss3, color: "#1572B6", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", url: "https://www.typescriptlang.org/" },
      { name: "React", icon: SiReact, color: "#61DAFB", url: "https://react.dev/" },
      { name: "Vite", icon: SiVite, color: "#646CFF", url: "https://vitejs.dev/" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000", url: "https://nextjs.org/" },
      { name: "Redux", icon: SiRedux, color: "#764ABC", url: "https://redux.js.org/" },
    ]
  },
  {
    title:"UI & Styling",
    skills:[
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4", url: "https://tailwindcss.com/" },
  { name: "Material UI", icon: SiMaterialdesign, color: "#0081CB", url: "https://mui.com/" },
  { name: "ShadCN/UI", icon: SiShadcnui, color: "#000000", url: "https://ui.shadcn.com/" }, 
  ]
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933", url: "https://nodejs.org/" },
      { name: "Express.js", icon: SiExpress, color: "#000000", url: "https://expressjs.com/" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248", url: "https://www.mongodb.com/" },
      { name: "Mongoose", icon: SiMongoose, color: "#880000", url: "https://mongoosejs.com/" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", url: "https://www.postgresql.org/" },
      { name: "Drizzle ORM", icon: SiDrizzle, color: "#C5F74F", url: "https://orm.drizzle.team/" },
      { name: "SQL", icon: TbSql, color: "#00758F", url: "https://www.ibm.com/think/topics/structured-query-language" },
    ]
  },
  {
    title: "APIs & Real-time",
    skills: [
      { name: "JWT", icon: SiJsonwebtokens, color: "#000000", url: "https://jwt.io/" },
      { name: "Clerk", icon: SiClerk, color: "#6C47FF", url: "https://clerk.com/" },
      { name: "WebRTC", icon: SiWebrtc, color: "#333333", url: "https://webrtc.org/" },
      { name: "Socket.io", icon: SiSocketdotio, color: "#010101", url: "https://socket.io/" },
      { name: "Gemini API", icon: SiGooglegemini, color: "#8952FF", url: "https://ai.google.dev/gemini-api" },
      { name: "Twilio API", icon: SiTwilio, color: "#F22F46", url: "https://www.twilio.com/" },
      { name: "YouTube API", icon: SiYoutube, color: "#FF0000", url: "https://developers.google.com/youtube/v3" },
      { name: "Replicate API", icon: FaRobot, color: "#000000", url: "https://replicate.com/anotherjesse/zeroscope-v2-xl" },
      { name: "Minimax API", icon: FaRobot, color: "#4A4A4A", url: "https://www.minimax.io/" },
      { name: "ModelsLab API", icon: FaRobot, color: "#2563EB", url: "https://modelslab.com/" },
      { name: "AI Guru Lab API", icon: FaRobot, color: "#16A34A", url: "https://ai-guru-lab.vercel.app/" },
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032", url: "https://git-scm.com/" },
      { name: "GitHub", icon: SiGithub, color: "#181717", url: "https://github.com/" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC", url: "https://code.visualstudio.com/" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37", url: "https://www.postman.com/" },
      { name: "Vercel", icon: SiVercel, color: "#000000", url: "https://vercel.com/" },
      { name: "Render", icon: SiRender, color: "#46E3B7", url: "https://render.com/" },
    ]
  },
  {
    title: "Languages & Concepts",
    skills: [
      { name: "C++", icon: SiCplusplus, color: "#00599C", url: "https://cplusplus.com/" },
      { name: "C", icon: SiC, color: "#A8B9CC", url: "https://en.cppreference.com/w/c" },
      { name: "DSA", icon: FaBook, color: "#2563EB", url: "#" },
      { name: "OOP", icon: FaBook, color: "#9333EA", url: "#" },
        // { name: "DBMS", icon: FaBook, color: "#16A34A", url: "#" },
  // { name: "OS", icon: FaBook, color: "#EAB308", url: "#" },
  // { name: "CN", icon: FaBook, color: "#DC2626", url: "#" },
      { name: "System Design", icon: FaBook, color: "#F97316", url: "#" },
    ]
  },
];

export function Skills() {
  return (
    <SectionBackground>
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="The tech stack I've been collecting like Pokémon cards - gotta catch 'em all! 🎯">Skills</SectionTitle>

          {/* Map over each category */}
          {skillCategories.map((category) => (
            <div key={category.title} className="mb-12"> 
              {/* Category Subheading */}
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">{category.title}</h3>

              {/* Grid for skills in this category */}
              <div className="max-w-4xl mx-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6">
                {category.skills.map((tech) => (
                  <SkillCard key={tech.name} name={tech.name} icon={tech.icon} color={tech.color} url={tech.url} />
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>
    </SectionBackground>
  );
}
