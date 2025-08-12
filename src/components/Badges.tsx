import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";

const badges = [
  {
    id: "leetcode-50",
    platform: "LeetCode",
    title: "50 Days Badge 2025",
    image: "https://assets.leetcode.com/static_assets/others/2550.gif",
    profile: "https://leetcode.com/u/Shubhraj-/",
  },
  {
    id: "leetcode-100",
    platform: "LeetCode",
    title: "100 Days Badge 2025",
    image: "https://assets.leetcode.com/static_assets/others/25100.gif",
    profile: "https://leetcode.com/u/Shubhraj-/",
  },



    {
    id: "top-interview-150",
    platform: "LeetCode",
    title: "Top Interview 150",
    image: "https://assets.leetcode.com/static_assets/others/Top_Interview_150.gif",
    profile: "https://leetcode.com/u/Shubhraj-/",
  },

      {
    id: "leetcode-75",
    platform: "LeetCode",
    title: "Leetcode 75",
    image: "https://assets.leetcode.com/static_assets/others/LeetCode_75.gif",
    profile: "https://leetcode.com/u/Shubhraj-/",
  },

 

  {
    id: "codeforces",
    platform: "CodeForces",
    title: "Rating(max.) 1366",
    image: "/assets/Shubhraj-codeforces-logo.png",
    profile: "https://codeforces.com/profile/Shubhraj",
  },

  
  {
    id: "leetcode",
    platform: "Leetcode",
    title: "Rating(max.) 1728",
    image: "/assets/Shubhraj-leetcode-logo.png",
    profile: "https://leetcode.com/u/Shubhraj-/",
  },


    {
    id: "gfg",
    platform: "GeeksforGeeks",
    title: "Institute Rank 2545",
    image: "  https://media.geeksforgeeks.org/gfg-gg-logo.svg",
    profile: "https://www.geeksforgeeks.org/user/shubhrajpatdf/",
  },


  {
    id: "codestudio1",
    platform: "CodeStudio",
    title: "Master Badges (Backtracking, Linked List)",
    image: "https://files.codingninjas.in/sensei-30761.svg",
    profile: "https://www.naukri.com/code360/profile/1d82f319-d8e4-4957-88c8-c84696a96325",
  },


    {
    id: "codestudio2",
    platform: "CodeStudio",
    title: "Guided Path Master Badge (Pointers)",
    image: "https://files.codingninjas.in/gp-cat-3-23408.svg",
    profile: "https://www.naukri.com/code360/profile/1d82f319-d8e4-4957-88c8-c84696a96325",
  },

     {
    id: "codestudio3",
    platform: "CodeStudio",
    title: "Specialist Badges (in 12 DSA topics)",
    image: "https://files.codingninjas.in/samurai-30760.svg",
    profile: "https://www.naukri.com/code360/profile/1d82f319-d8e4-4957-88c8-c84696a96325",
  },

     {
    id: "codestudio4",
    platform: "CodeStudio",
    title: "Achiever Badges (in 18 DSA topics)",
    image: "https://files.codingninjas.in/ronin-30759.svg",
    profile: "https://www.naukri.com/code360/profile/1d82f319-d8e4-4957-88c8-c84696a96325",
  },

    

 
];


export function Badges() {
  return (
    <SectionBackground>
      <section id="badges">
        <div className="container mx-auto max-w-6xl px-8">
          <SectionTitle subtitle="Some shiny badges I've collected while grinding - I actually solve stuff! 🏆">Coding Badges</SectionTitle>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 sm:gap-8 gap-4">
            {badges.map((badge) => (
              <a
                key={badge.id}
                href={badge.profile}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group flex flex-col items-center justify-center p-5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 rounded-xl blur-lg transition-all duration-300" />

                {/* Badge Image */}
                <img
                  src={badge.image}
                  alt={badge.platform}
                  className="w-30 h-30 rounded-md transition-transform duration-300 group-hover:scale-110"
                />

                {/* Badge Text */}
                <p className="mt-3 text-sm font-semibold text-gray-900 dark:text-white text-center">
                  {badge.title}
                </p>
                <span className="text-sm text-gray-600 dark:text-gray-400">{badge.platform}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
