import resume from '@/resume.json';
import Period from "@/components/Period";


export default function WorkExperience() {
  const { work } = resume;

  return (
    <section>
      <h2>Work Experience</h2>
      {work.map((item, index) => (
        <article key={index}>
          <h3>{item.position}</h3>
          <p className="font-medium -mt-1">{item.organization}</p>
          <Period startDate={item.startDate} endDate={item.endDate} />
          <p className="mt-2">
            Responsibilities:
          </p>
          <ul className="ml-4">
            {item.responsibilities.map((responsibility, listItemIndex) => (
              <li key={listItemIndex}>{responsibility}</li>
            ))}
          </ul>
          <p className="my-1">
            Highlighted technologies:
          </p>
          <div className="flex flex-row flex-wrap gap-2 pb-2">
            {item.technologies.map((technology, listItemIndex) => (
              <Chip key={listItemIndex} name={technology} />
            ))}
          </div>
        </article>
      ))}
    </section>
  );
};

function Chip({ name } : { name: string }) {
    return (
        <div className="bg-chips-base rounded-md text-chips-text px-2 py-0.5 font-techMono text-sm">
            {name}
        </div>
    );
}