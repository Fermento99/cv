import { useContext } from "react";
import { ResumeContext } from "../../ResumeContext";


export default function Projects() {
  const { projects } = useContext(ResumeContext);;

  return (
    <section>
      <h2>Private Projects</h2>
      {projects.map((project, index) => (
        <article key={index}>
          <h3>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.name}
            </a>
          </h3>
          <p>
            {project.description}
          </p>
        </article>
      ))}
    </section>
  );
};
