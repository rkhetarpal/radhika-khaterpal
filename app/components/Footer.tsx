import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#050816] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            <p className="text-blue-300 font-semibold mb-3">
              Radhika Khaterpal
            </p>

            <h3 className="text-3xl font-bold mb-4">
              Backend Engineer • Java Developer
            </h3>

            <p className="text-gray-300 leading-relaxed max-w-xl">
              Building scalable backend systems, enterprise platforms,
              and production-ready software with strong business impact
              across healthcare, e-commerce, and modern engineering teams.
            </p>
          </div>

          {/* Right Side */}
          <div className="md:text-right">
            <div className="flex md:justify-end gap-5 mb-6 text-2xl">
              <a
                href="https://linkedin.com/in/radhika-khaterpal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/rkhetarpal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://wa.me/918754561676"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition"
              >
                <FaWhatsapp />
              </a>
            </div>

            <p className="text-gray-400">
              Gothenburg, Sweden
            </p>

            <p className="text-gray-400">
              khaterpalradhika@gmail.com
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Radhika Khaterpal
        </div>
      </div>
    </footer>
  );
}