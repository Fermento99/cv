import resume from '@/resume.json';
import Period from "@/Components/Period";


export default function WorkExperience() {
  const { work } = resume;

  return (
    <section>
      <h2>Work Experience</h2>
      {work.map((item, index) => (
        <article key={index}>
          <h3>{item.position}</h3>
          <p className="font-medium">{item.organization}</p>
          <Period startDate={item.startDate} endDate={item.endDate} />
          <p className="mt-2">
            Responsibilities:
          </p>
          <ul className="ml-4">
            {item.responsibilities.map((responsibility, listItemIndex) => (
              <li key={listItemIndex}>{responsibility}</li>
            ))}
          </ul>
          <p className="mt-2">
            Technologies:
          </p>
          <ul className="ml-4">
            {item.technologies.map((technology, listItemIndex) => (
              <li key={listItemIndex}>{technology}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
};
