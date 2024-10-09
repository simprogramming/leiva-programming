"use client";
import SocialMediaIcons from './SocialMediaIcons';

function Skills() {
  const skills = [
    { name: "Ruby on Rails", value: 90 },
    { name: "HTML & CSS", value: 82 },
    { name: "JavaScript & Node.js", value: 81 },
    { name: "SQL & PostgreSQL", value: 78 },
    { name: "Bootstrap & Tailwind CSS", value: 85 },
    { name: "React, Typescript & Next.js", value: 88 },
  ];

  return (
    <section id="skills" className="min-h-screen bg-white p-8 pt-20">
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
            With extensive experience managing diverse projects, I focus on streamlining workflows and enhancing team collaboration. I rely on tools like Jira, Bitbucket, GitHub, and various testing frameworks to keep projects on track and ensure top-notch quality. I believe in open, transparent communication with clients and team members, fostering a collaborative environment where everyone feels heard. 
          </p>
          <p className="text-lg text-gray-700 mb-4">
            My approach emphasizes setting clear expectations, delivering on time, and staying within budget, all while maintaining the flexibility to adapt to new challenges. Whether it&#39;s contract negotiation or functional analysis, I approach each task with a growth mindset, always striving to improve. This mindset not only ensures high standards but also makes me an asset to any team, ready to contribute to the success of projects and continuously evolve.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
