import { useContext } from "react";
import Period from "../Period";
import { ResumeContext } from "../../ResumeContext";


export default function WorkExperience() {
  const { work } = useContext(ResumeContext);;

  return (
    <section>
      <h2>Work Experience</h2>
      {work.map((item, index) => (
        <article key={index}>
          <h3>{item.position}</h3>
          <h4 className="font-medium -mt-1">{item.organization}</h4>
          <Period startDate={item.startDate} endDate={item.endDate} />
          <h4 className="mt-2">
            Description:
          </h4>
          <p className="ml-4 font-light">
            {item.description}
          </p>
          <h4 className="mt-2">
            Responsibilities:
          </h4>
          <ul className="ml-4">
            {item.responsibilities.map((responsibility, listItemIndex) => (
              <li key={listItemIndex}>{responsibility}</li>
            ))}
          </ul>
          <h4 className="mt-2 mb-1">
            Highlighted technologies:
          </h4>
          <div className="flex flex-row flex-wrap gap-2 pb-2 ml-4">
            {item.technologies.map((technology, listItemIndex) => (
              <Chip key={listItemIndex} name={technology} />
            ))}
          </div>
        </article>
      ))}
    </section>
  );
};

function Chip({ name }: { name: string }) {
  return (
    <div className="bg-chips-base rounded-md text-chips-text px-2 py-0.5 font-techMono text-sm">
      {name}
    </div>
  );
}