// components/ExperienceSection.tsx

import { Briefcase, CalendarDays, MapPin } from "lucide-react";

export default function ExperienceSection() {
  const experience = [
    {
      company: "FYARIL AB",
      location: "Sweden",
      role: "Software Developer",
      duration: "Aug 2024 – Mar 2026",
      highlights: [
        "Sole developer responsible for end-to-end feature development, deployment, production maintenance, and platform optimization",
        "Built scalable backend services and custom platform features using PHP and MySQL",
        "Integrated AI-powered product and category generation using Gemini and AWS Bedrock",
        "Improved vendor onboarding from 25 to 350+ vendors",
        "Reduced MySQL queries from 400 to 2 per page, significantly improving performance",
      ],
    },
    {
      company: "OPTUM India",
      location: "India",
      role: "Senior Software Engineer",
      duration: "Feb 2022 – Nov 2022",
      highlights: [
        "Developed backend microservices using Java 8, Spring Boot, REST APIs, and MySQL",
        "Implemented event-driven architecture using Apache Kafka",
        "Designed scalable backend systems focused on performance and reliability",
        "Worked closely with QA, PMs, and developers in Agile SCRUM teams",
      ],
    },
    {
      company: "OPTUM India",
      location: "India",
      role: "Associate Software Engineer",
      duration: "Sep 2019 – Feb 2022",
      highlights: [
        "Built full-stack enterprise features using Java, Spring Boot, and Angular",
        "Reduced SonarQube and Fortify issues to zero",
        "Created automation utilities for QA testing workflows",
        "Contributed to enterprise healthcare systems used by multiple organizations",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-28 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-700 font-semibold mb-3">
            Professional Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Work Experience
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Building scalable systems across healthcare, e-commerce,
            enterprise platforms, and modern cloud-native backend
            environments.
          </p>
        </div>

        <div className="space-y-8">
          {experience.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-blue-700 font-medium mb-2">
                    <Briefcase size={18} />
                    {job.company}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {job.role}
                  </h3>

                  <div className="flex flex-wrap gap-5 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <CalendarDays size={16} />
                      {job.duration}
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {job.location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {job.highlights.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-900 mt-2" />

                    <p className="text-gray-600 leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}