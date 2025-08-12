import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { EducationCard } from './ui/EducationCard';

const education = [
  {
    degree: 'B.S. in Chemistry, Minor in Computer Science & Engineering',
    institution: 'Indian Institute of Technology Kharagpur',
    period: '2023 - 2027',
    score: '7.95 CGPA',
  },
  {
    degree: 'Senior Secondary (XII)',
    institution: 'Jawahar Navodaya Vidyalaya Varanasi (ExNavodayan Foundation)',
    period: '2022 - 2023',
    score: '86.8%',
  },
  {
    degree: 'Secondary (X)',
    institution: "Jawahar Navodaya Vidyalaya Shajapur",
    period: '2020 - 2021',
    score: '92.4%',
  },
];

export function Education() {
  return (
    <SectionBackground>
      <section id="education">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="Where I learned theory and then forgot half of it while learning to actually code 😅">Education</SectionTitle>
          <div className="max-w-5xl mx-auto space-y-10">
            {education.map((edu, index) => (
              <EducationCard key={edu.degree} {...edu} isLast={index === education.length - 1} />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
