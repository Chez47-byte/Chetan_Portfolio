import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Tech", path: "/tech" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="font-bold text-lg tracking-wide">
         <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
           CHETAN
         </span>{" "}
         <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
           LAKADE
         </span>
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex gap-6 text-sm text-gray-300 items-center">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className="relative group"
              >
                <span
                  className={`transition ${
                    isActive ? "text-white" : "group-hover:text-white"
                  }`}
                >
                  {link.name}
                </span>

                {/* underline animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-purple-400 to-blue-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}

          {/* CTA BUTTON */}
          <a
            href="mailto:1718chez@gmail.com"
            className="ml-4 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm hover:scale-105 transition"
          >
            Contact Me
          </a>
        </nav>

        {/* MOBILE MENU (basic for now) */}
        <div className="md:hidden text-gray-300">
          ☰
        </div>

      </div>
    </header>
  );
};

export default Header;