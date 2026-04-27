// components/SkillsSection.tsx

import {
  Code2,
  Server,
  Database,
  Cloud,
  Workflow,
  Layers,
} from "lucide-react";

export default function SkillsSection() {
  const skillGroups = [
    {
      title: "Languages",
      icon: <Code2 size={20} />,
      skills: ["Java", "SQL", "JavaScript", "PHP", "Python"],
    },
    {
      title: "Backend Engineering",
      icon: <Server size={20} />,
      skills: [
        "Spring Boot",
        "REST APIs",
        "Microservices",
        "Distributed Systems",
        "Event-Driven Architecture",
        "Apache Kafka",
      ],
    },
    {
      title: "Databases",
      icon: <Database size={20} />,
      skills: ["MySQL", "PostgreSQL", "Query Optimization"],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud size={20} />,
      skills: [
        "AWS",
        "Docker",
        "Kubernetes",
        "CI/CD Pipelines",
        "Jenkins",
        "Git",
      ],
    },
    {
      title: "Frontend",
      icon: <Layers size={20} />,
      skills: [
        "Angular",
        "React",
        "Next.js",
        "HTML",
        "CSS",
        "Tailwind CSS",
      ],
    },
    {
      title: "Engineering Practices",
      icon: <Workflow size={20} />,
      skills: [
        "System Design",
        "Agile/Scrum",
        "Production Support",
        "Clean Code",
        "Performance Optimization",
        "Code Reviews",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-700 font-semibold mb-3">
            Core Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & Technologies
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Strong backend engineering foundation with modern full-stack,
            cloud-native, and production-scale development experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-900">
                  {group.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  {group.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm font-medium text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}