import Container from "../components/common/Container";

const Tech = () => {
  const techStack = [
    {
      title: "Backend",
      items: ["Node.js", "Express", "Java", "Spring Boot"],
    },
    {
      title: "Database",
      items: ["MongoDB", "MySQL"],
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "Postman"],
    },
  ];

  const softSkills = [
    "Analytical Thinking",
    "Problem-Solving",
    "Collaboration",
    "Adaptability",
    "Communication",
  ];

  return (
    <section className="py-20 bg-white text-black">
      <Container>

        {/* HEADER */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Tech Stack
          </h1>
          <p className="text-gray-500 max-w-xl">
            Technologies I use to build scalable backend systems and production-ready applications.
          </p>
        </div>

        {/* TECH GRID */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {techStack.map((section, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
            >
              <h2 className="font-semibold text-lg mb-5">
                {section.title}
              </h2>

              <div className="flex flex-wrap gap-2">
                {section.items.map((item, j) => (
                  <span
                    key={j}
                    className="text-sm px-3 py-1 rounded-full border border-gray-300 hover:bg-black hover:text-white transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 🔥 SOFT SKILLS */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Soft Skills
          </h2>

          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 text-sm rounded-full bg-gray-100 border border-gray-300 hover:bg-black hover:text-white transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
};

export default Tech;