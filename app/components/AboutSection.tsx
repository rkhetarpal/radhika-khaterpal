// components/AboutSection.tsx

import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const strengths = [
    "4+ years of production engineering experience",
    "Strong Java + Spring Boot backend expertise",
    "Microservices and event-driven architecture using Kafka",
    "Cloud-native engineering using AWS, Docker, Kubernetes",
    "Frontend exposure with Angular, React, JavaScript, and Next.js",
    "Independent delivery ownership from design to production",
  ];

  return (
    <section
      id="about"
      className="py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <p className="text-blue-700 font-semibold mb-3">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Backend Engineer with
            Product Thinking
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            I specialize in building reliable backend systems that scale —
            from enterprise healthcare platforms to high-performance
            e-commerce systems and production automation workflows.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            My focus is on performance, maintainability, system design,
            and delivering production-ready solutions independently with
            strong ownership and engineering discipline.
          </p>

          <div className="space-y-4">
            {strengths.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3"
              >
                <CheckCircle2
                  size={20}
                  className="text-blue-900 mt-1"
                />

                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="bg-gray-50 rounded-[32px] p-10 border border-gray-100 shadow-sm">
          <div className="space-y-8">
            <div>
              <p className="text-sm text-gray-500 mb-1">
                Education
              </p>
              <h3 className="text-xl font-bold text-gray-900">
                B.Tech — Information Technology
              </h3>
              <p className="text-gray-600">
                SRM Institute of Science & Technology
              </p>
              <p className="text-gray-600">
                CGPA: 8.95 / 10
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">
                Certifications
              </p>
              <p className="text-gray-700 leading-relaxed">
                AI-900 • DP-900 • AZ-900 • Azure Fundamentals •
                Java Full Stack Engineer • Optum Hackathon Winner
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">
                Languages
              </p>
              <p className="text-gray-700">
                English (Professional) • Hindi (Native) •
                Swedish (Elementary)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}