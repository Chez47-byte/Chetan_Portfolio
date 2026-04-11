import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Tech from "./pages/Tech";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />
    </>
  );
}