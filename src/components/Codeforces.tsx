import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { SiCodeforces } from "react-icons/si";

export function Codeforces() {
  return (
    <SectionBackground>
      <section id="codeforces">
        <div className="container mx-auto max-w-6xl px-8">
          <SectionTitle subtitle="Battling Codeforces rounds harder than end-sem exams">Codeforces Progress</SectionTitle>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Codeforces Activity Image */}
            <div className="relative w-full h-[18rem] md:h-[25rem] overflow-hidden">
              <img
                src="https://codeforces-readme-stats.vercel.app/api/card?username=Shubhraj&theme=github_dark&disable_animations=false&show_icons=true&force_username=true&border=2&radius=10"
                title="Codeforces Activity"
                className="absolute w-full h-full rounded-xl shadow-md"
              >
              </img>
            </div>

            {/* Codeforces Journey Text */}
            <div>
              <h3 className=" text-center text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                 My Codeforces Battles
              </h3>
              <p className=" text-center text-lg text-gray-600 dark:text-gray-300 mb-4">
                 What started as "Let's try a Div. 3 contest" has turned into a weekly adrenaline rush.  
  Some days I climb the ranks like a champ, other days one tricky problem sends me 
  straight into (-50) territory and a spiral of self-reflection 😅.
              </p>
              <p className=" text-center text-lg text-gray-600 dark:text-gray-300">
               From greedy hacks and constructive algos to DP on graphs and number theory puzzles. 
  I've taken them all head-on. The mission: keep improving, break into Div. 1 glory,  
  and maybe, just maybe, stop misreading problem statements at 2 AM.
      </p>

              {/* Codeforces Profile Button */}
              <div className="mt-6 flex justify-center">
                <a
                  href="https://codeforces.com/profile/Shubhraj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all"
                >
                  <SiCodeforces className="w-5 h-5" /> View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
