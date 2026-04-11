import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";
import Container from "../common/Container";

const ProjectList = () => {
  return (
    <section className="py-20 bg-white text-black">
      <Container>

        {/* HEADER */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-3">Projects</h2>
          <p className="text-gray-500 max-w-xl">
            Backend-focused projects demonstrating scalability, performance,
            and real-world problem solving.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default ProjectList;