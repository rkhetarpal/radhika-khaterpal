// components/ProjectsSection.tsx

import {
  ExternalLink,
  Briefcase,
  Globe,
  Code2,
  Database,
} from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Quality Analyst & Labs Pvt. Ltd.",
      type: "Production Website",
      description:
        "Designed and developed a premium corporate laboratory website using Next.js, Tailwind CSS, responsive layouts, Google Maps integration, contact forms, WhatsApp CTA, elegant animations, and modern UI architecture.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
      icon: <Globe size={20} />,
    },
    {
      title: "E-commerce Platform Optimization",
      type: "Production Platform",
      description:
        "Built and optimized scalable backend workflows, vendor onboarding systems, AI-powered product generation, and performance-heavy MySQL improvements for a live B2B/B2C marketplace platform.",
      tech: ["PHP", "MySQL", "AWS", "Gemini"],
      icon: <Briefcase size={20} />,
    },
    {
      title: "Rally Test Documents Uploader",
      type: "Automation Tool",
      description:
        "Developed a Python automation script that reduced QA document upload time from manual bulk uploads to approximately 2 minutes, significantly improving engineering productivity.",
      tech: ["Python", "Automation", "QA Workflow"],
      icon: <Code2 size={20} />,
    },
    {
      title: "Inventory Management System",
      type: "Personal Project",
      description:
        "Built an online grocery shopping portal with product search, cart functionality, and checkout workflows using Java backend architecture and structured database operations.",
      tech: ["Java", "SQL", "Backend Development"],
      icon: <Database size={20} />,
    },
    {
      title: "Smart Mirror with Healthcare Perspective",
      type: "Final Year Project",
      description:
        "Created a smart healthcare mirror with facial recognition, speech recognition, medicine reminders, doctor appointments, and Fitbit integration using Python.",
      tech: ["Python", "AI", "Healthcare Tech"],
      icon: <Code2 size={20} />,
    },
    {
      title: "Pipeline Leakage Detection System",
      type: "University Project",
      description:
        "Designed an IoT-based system to detect water leakage in pipelines using sensors, Arduino, and ThingSpeak by monitoring fluctuations in water flow.",
      tech: ["Arduino", "IoT", "ThingSpeak"],
      icon: <Database size={20} />,
    },
  ];

  return (
    <section
      id="projects"
      className="py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-700 font-semibold mb-3">
            Featured Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Projects & Production Systems
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real-world systems, scalable backend engineering, automation,
            and production-ready applications across enterprise and
            product environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-900">
                  {project.icon}
                </div>

                <div>
                  <p className="text-sm text-blue-700 font-medium">
                    {project.type}
                  </p>

                  <h3 className="text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm font-medium text-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* <button className="inline-flex items-center gap-2 text-blue-900 font-semibold">
                View Details
                <ExternalLink size={16} />
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}