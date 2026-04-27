// components/ContactSection.tsx

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-28 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-200 font-semibold mb-3">
            Let’s Connect
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Open to Opportunities
          </h2>

          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Open for backend engineering roles, international remote
            opportunities, consulting projects, and freelance clients
            across modern product and engineering teams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaEnvelope className="mt-1 text-lg" />
              <div>
                <p className="font-semibold">Email</p>
                <a
                  href="mailto:khaterpalradhika@gmail.com"
                  className="text-blue-100 hover:text-white transition"
                >
                  khaterpalradhika@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaWhatsapp className="mt-1 text-lg" />
              <div>
                <p className="font-semibold">WhatsApp</p>
                <a
                  href="https://wa.me/918754561676"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-white transition"
                >
                  +91 87545 61676
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="mt-1 text-lg" />
              <div>
                <p className="font-semibold">Current Location</p>
                <p className="text-blue-100">
                  Gothenburg, Sweden
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-6">
              Professional Profiles
            </h3>

            <div className="space-y-5">
              <a
                href="https://linkedin.com/in/radhika-khaterpal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:translate-x-1 transition"
              >
                <FaLinkedin className="text-lg" />
                LinkedIn Profile
              </a>

              <a
                href="https://github.com/rkhetarpal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:translate-x-1 transition"
              >
                <FaGithub className="text-lg" />
                GitHub Projects
              </a>

              <a
                href="https://wa.me/918754561676"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:translate-x-1 transition"
              >
                <FaWhatsapp className="text-lg" />
                WhatsApp Direct
              </a>
            </div>

            <div className="mt-8">
              <a
                href="mailto:khaterpalradhika@gmail.com"
                className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
              >
                <FaEnvelope />
                Let’s Work Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}