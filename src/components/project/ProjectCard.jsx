const ProjectCard = ({ project }) => {
  return (
    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition flex flex-col justify-between">

      {/* TOP */}
      <div>
        <h3 className="font-semibold text-xl mb-2">
          {project.title}
        </h3>

        <p className="text-sm text-gray-600 mb-3">
          {project.description}
        </p>

        {/* 🔥 IMPACT */}
        <p className="text-sm font-medium text-black mb-4">
          ⚡ {project.impact}
        </p>

        {/* TECH */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 border border-gray-300 rounded"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ACTION */}
      <div className="mt-4">
        <a
          href={project.github}
          target="_blank"
          className="text-sm font-medium hover:underline"
        >
          View Code →
        </a>
      </div>

    </div>
  );
};

export default ProjectCard;