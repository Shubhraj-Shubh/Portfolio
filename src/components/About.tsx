import { User2, Code2, Lightbulb } from "lucide-react";
import { GoGoal } from "react-icons/go";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";

const aboutSections = [
  {
    icon: User2,
    title: "Who I Am",
    description: [
      "A guy who fell in love with code and can't stop building stuff.",
      "I get excited when I solve tricky bugs (yeah, I'm that weird 😅).",
      "Always learning something new and fitting it into my projects.",
    ],
    color: "bg-blue-600",
  },
  {
    icon: Code2,
    title: "What I Do",
    description: [
      "I turn coffee into web apps ☕ → 💻 (and vice versa sometimes).",
      "Love cracking algorithmic puzzles - like sudoku but with rewards.",
      "Share my learnings with others because we all grow together 🌱.",
    ],
    color: "bg-purple-600",
  },
  {
    icon: GoGoal,
    title: "My Goals",
    description: [
      "Build products people actually need (not just GitHub flexes).",
      "Become the dev who can handle anything - you just name it.",
      "Land a sweet job and finally afford good coffee ☕ (and rent 😅).",
    ],
    color: "bg-green-600",
  },
  {
    icon: Lightbulb,
    title: "My Philosophy",
    description: [
      "Code should make life easier, not give you more headaches 🤯.",
      "The best solution is often the simplest one (KISS principle!).",
      "Every day you don't learn something new is a wasted day in tech.",
    ],
    color: "bg-orange-600",
  },
];

export function About() {
  return (
    <SectionBackground>
      <section id="about">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Just a curious developer who loves turning ideas into reality (and debugging at 2 AM)">About Me</SectionTitle>

          {/* Introduction */}
          <div className="max-w-5xl mx-auto mb-10 text-center">
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Hey there! 👋 I'm <span className="text-blue-600 font-semibold">Shubhraj Singh Dodiya</span>,
               a 3rd-year BS Chemistry student at IIT Kharagpur with a CSE minor and a Reliance Foundation Scholar. Somewhere between balancing molecules and coding, I got hooked on building cool stuff that actually helps people.

I've built projects like SplitMate (a trip expense splitter that saves friendships), TalkSpace (a chill platform for video calls, chats, and study sessions), and CrackCourse AI (an AI-powered course generator that makes learning smarter).

When I'm not juggling React hooks or fixing CSS bugs, I'm grinding on Codeforces and LeetCode, chasing that next rating boost and solving tricky competitive programming problems. Tech and coding aren't just hobbies, they're my way of life.

Always learning, always building, and always up for a challenge. Let's code something awesome!
            </p>
            <div className="mt-6 flex justify-center">
              <span className="text-sm sm:text-base inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-lg shadow">
                🚀 I turn coffee into code and bugs into features
              </span>
            </div>
          </div>

          {/* About Section Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {aboutSections.map(({ icon: Icon, title, description, color }) => (
              <div key={title} className="relative group">
                {/* Background Effect */}
                <div className={`absolute inset-0 ${color} rounded-xl blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`} />

                {/* Card Content */}
                <div className="relative bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-4 space-x-4">
                    {/* Icon */}
                    <div className={`p-3 ${color} rounded-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
                  </div>
                  <ul className="text-sm sm:text-base list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1">
                    {description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
