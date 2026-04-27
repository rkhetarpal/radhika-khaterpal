"use client";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import FadeUp from "@/app/components/FadeUp";

export default function HeroSection() {
  return (
    <section
      className="min-h-screen flex items-center bg-soft-gradient pt-28"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <FadeUp>
          <div>
            <p className="text-blue-700 font-semibold mb-4 uppercase tracking-wide">
              Java Backend Engineer • Software Developer
            </p>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Building Scalable
              <br />
              Backend Systems
              <br />
              That Deliver
              <br />
              Real Business Impact
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl">
              Java Software Developer with 4+ years of experience across
              healthcare, e-commerce, enterprise systems, and modern
              product engineering. Specialized in Java, Spring Boot,
              Microservices, Kafka, AWS, and production-grade backend
              architecture.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-8">
              <a
                href="/resume.pdf"
                target="_blank"
                className="btn-primary"
              >
                Download Resume
              </a>

              <a
                href="#contact"
                className="btn-secondary"
              >
                Let’s Connect
              </a>
            </div>

            <div className="flex items-center gap-5">
              <a
                href="https://linkedin.com/in/radhika-khaterpal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-700 hover:text-blue-700 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/rkhetarpal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-700 hover:text-blue-700 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://wa.me/918754561676"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-700 hover:text-green-600 transition"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </FadeUp>

        {/* Right Side */}
        <FadeUp>
          <div className="relative">
            <div className="bg-white rounded-[32px] p-8 shadow-premium border border-gray-100">
              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-5">
                  <p className="text-sm text-gray-500 mb-1">
                    Current Location
                  </p>
                  <h3 className="text-xl font-semibold">
                    Gothenburg, Sweden
                  </h3>
                </div>

                <div className="border-b border-gray-100 pb-5">
                  <p className="text-sm text-gray-500 mb-1">
                    Open For
                  </p>
                  <h3 className="text-xl font-semibold">
                    Remote Roles • Backend Engineering • Consulting
                  </h3>
                </div>

                <div className="border-b border-gray-100 pb-5">
                  <p className="text-sm text-gray-500 mb-1">
                    Core Stack
                  </p>
                  <h3 className="text-xl font-semibold">
                    Java • Spring Boot • Kafka • AWS • Docker
                  </h3>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Strongest Value
                  </p>
                  <h3 className="text-xl font-semibold">
                    Production-Ready Systems + Business Impact
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}