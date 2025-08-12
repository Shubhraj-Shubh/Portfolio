import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { ExperienceCard } from "./ui/ExperienceCard";

const experiences = [
  {
    title: "Co-Founder & Tech Head",
    company: "Crack NCET: EdTech Startup",
    period: "August 2024 - Present",
    description: `My first deep dive into the startup world! Co-founded Crack NCET, an EdTech platform for NCET exam prep, growing it to 1,447+ subscribers and 3,700+ watch-hours.  
The highlight? Launched a WordPress site on Hostinger attracting students for paid mock tests, generating ₹20K+ revenue by integrating Moodle LMS with Razorpay payments.  
Built CrackCourse AI on Next.js using a multi-API stack (Gemini, YouTube) that cut educator course creation time by 90%, making personalized course discovery easier for students.  
Collaborated with 6 educators to boost student scores by up to 70% using data-driven improvements. Also launched a public course explorer with 20+ AI-powered courses, progress tracking, and Clerk-based authentication.  
All in all, an exciting journey of building, learning, and impacting student success!`,
    skills: ["Next.js", "Clerk", "ShadCN/UI", "PostgreSQL", "JavaScript (ES6+)",  "Gemini API", "YouTube API","Vercel"],
  },

  {
  title: "Member | Web Development Team",
  company: "Technology Adventure Society (TAdS), IIT Kharagpur",
  period: "August 2024 - June 2025",
  description: `Part of the awesome TAdS web dev crew, keeping our official website up-to-date and running smoothly on every device (because no one likes a broken layout 🙃). 
  Conducted hands-on workshops for first-year students, breaking down Git, HTML, CSS, and JavaScript fundamentals in a way that actually makes sense. 
  Helping newbies take their first steps into coding and seeing them build something real? Easily one of the most satisfying parts of the job.`,
  skills: ["HTML", "CSS", "JavaScript", "Git", "Responsive Design", "Teaching","Team Leadership"],
},

{
  title: "Senior Executive Member | Web Development Team",
  company: "KodeinKGP: Technology Web3.0 Society, IIT Kharagpur",
  period: "July 2024 - May 2025",
  description: `Part of the KodeinKGP web dev squad, where I got to level up the Q&A page with checkbox filters and a favorites feature (because finding questions shouldn't feel like a maze 🧩). 
  Took on a full redesign of the interface so it looks great and works flawlessly on any device, while adding smooth topic-wise filtering for better navigation. 
  Turning a cluttered page into something clean, responsive, and actually fun to use? Yep, that was the goal — and we nailed it.`,
  skills: ["HTML", "CSS", "JavaScript","React", "Responsive Design", "UI/UX", "Frontend Optimization", "Feature Implementation"],
},


];

export function Experience() {
  return (
    <SectionBackground>
      <section id="experience">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="My journey from 'Hello World' to leading teams and building stuffs">Experience</SectionTitle>
          <div className="relative border-l-2 border-blue-600 dark:border-blue-500 max-w-5xl mx-auto space-y-10">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
