"use client";
import SocialMediaIcons from './SocialMediaIcons';

function Skills() {
  const skills = [
    { name: "Ruby on Rails", value: 90 },
    { name: "HTML & CSS", value: 80 },
    { name: "JavaScript & Node.js", value: 80 },
    { name: "SQL", value: 75 },
    { name: "Bootstrap & Tailwind CSS", value: 85 },
    { name: "React, Typescript & Next.js", value: 65 },
  ];

  return (
    <section id="skills" className="min-h-screen bg-white p-8 pt-20 pb-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">Skills</h2>
        <p className="text-lg text-gray-700 mb-8">
          My main web development stacks include Ruby on Rails, Next.js, React, and TypeScript. Below are my proficiency levels in various technologies:
        </p>
        <div className="space-y-4 text-black">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-gray-900">{skill.name}</span>
                <span className="text-sm font-medium text-gray-700">{skill.value}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                <div
                  className="bg-gradient-to-r from-pink-500 to-yellow-500 h-1.5 rounded-full"
                  style={{ width: `${skill.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 mb-12">
          <h3 className="text-3xl font-semibold text-blue-900 mb-4">Project Manager</h3>
          <p className="text-lg text-gray-700 mb-4">
            I have significant experience in managing project workflows, always striving to improve and learn from each project. I use tools like Jira, Bitbucket, GitHub, and various testing frameworks to ensure organization and quality. My approach involves clear communication with clients and team members, aiming for transparency and collaboration. While I always aim for high standards in writing contracts and conducting functional analysis, I remain humble and open to learning, ensuring projects are delivered on time, within budget, and with a commitment to excellence. This continuous learning mindset allows me to adapt and grow, making me a valuable addition to any tech team.
          </p>
        </div>
        <SocialMediaIcons />

      </div>
    </section>
  );
}

export default Skills;
