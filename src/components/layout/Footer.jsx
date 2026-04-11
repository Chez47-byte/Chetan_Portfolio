import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative bg-black text-white border-t border-white/10 overflow-hidden">

      {/* BACKGROUND EFFECT */}
      <div className="absolute inset-0">
        <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[300px] h-[300px] bg-blue-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16">

        {/* TOP CTA */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Let’s build something impactful
          </h2>
          <p className="text-gray-400 mb-6">
            Open to backend roles, freelance, and collaboration.
          </p>

          <a
            href="mailto:1718chez@gmail.com"
            className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 transition shadow-lg"
          >
            Contact Me
          </a>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10 border-t border-white/10 pt-10">

          {/* LEFT */}
          <div>
            <h1 className="text-lg font-semibold mb-3">
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
                Chetan Lakade
              </span>
            </h1>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Backend developer focused on building scalable systems,
              clean APIs, and production-ready architecture.
            </p>
          </div>

          {/* CENTER */}
          <div>
            <h2 className="text-sm font-semibold mb-4 text-gray-300">
              Profiles
            </h2>

            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <a
                href="https://github.com/Chez47-byte"
                target="_blank"
                className="hover:text-purple-400 transition"
              >
                GitHub →
              </a>

              <a
                href="https://leetcode.com/u/chez47/"
                target="_blank"
                className="hover:text-blue-400 transition"
              >
                LeetCode →
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <h2 className="text-sm font-semibold mb-4 text-gray-300">
              Contact
            </h2>

            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <a
                href="mailto:1718chez@gmail.com"
                className="hover:text-purple-400 transition"
              >
                Gmail →
              </a>

              <a
                href="https://www.linkedin.com/in/chez1718-1a3513298/"
                target="_blank"
                className="hover:text-blue-400 transition"
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-3">
          <span>© {year} Chetan Lakade</span>
          <span className="text-gray-600">Built with React + Tailwind</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;