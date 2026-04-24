import Container from "../common/Container";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-black text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl bottom-[-100px] right-[-100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <Container>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 py-20">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <p className="text-gray-400 mb-2 text-sm uppercase tracking-widest">
              Hi, I'm
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
                Chetan Lakade
              </span>
            </h1>

            {/* 🔥 TYPING EFFECT */}
            <div className="text-lg md:text-xl text-gray-300 mb-4 h-[40px]">
              <TypeAnimation
                sequence={[
                  "Backend Developer",
                  1500,
                  "Node.js Engineer",
                  1500,
                  "Java Developer",
                  1500,
                  "System Design Enthusiast",
                  1500,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="text-gray-400 mb-6 max-w-lg">
              I build scalable backend systems, design high-performance APIs,
              and solve complex real-world engineering problems.
            </p>

            {/* 🔥 CTA BUTTONS */}
            <div className="flex gap-4 justify-center md:justify-start mb-8 flex-wrap">
              <a
                href="./projects"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium shadow-lg hover:scale-105 transition"
              >
                View Projects
              </a>

              <a
                href="./chetan.pdf" 
                download= "chetan.pdf"
                className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/10 transition"
              >
                Download Resume
              </a>
            </div>

            {/* TAGS */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {["API Development", "Scalable Systems", "Database Design"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1 text-sm rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-purple-500/20 transition"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative group">

              {/* glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-2xl opacity-30 group-hover:opacity-50 transition" />

              <img
                src="/chetan.png"
                alt="profile"
                className="relative w-72 h-72 md:w-96 md:h-96 object-contain rounded-full border border-white/10 shadow-2xl"
              />
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default Hero;
