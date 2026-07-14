import { useContext } from "react";
import Period from "./Period";
import { ResumeContext } from "../../ResumeContext";


export default function WorkExperience() {
  const { work } = useContext(ResumeContext);;

  return (
    <section>
      <h2>Work Experience</h2>
      {work.map((item, index) => (
        <>
          <article key={index} className="flex flex-col gap-2 mb-4">
            <header>
              <h3>{item.position}</h3>
              <h3 className="-mt-1">{item.organization}</h3>
              <Period startDate={item.startDate} endDate={item.endDate} />
            </header>
            <article>
              <h4>
                Description:
              </h4>
              <p className="ml-4">
                {item.description}
              </p>
            </article>
            <article>
              <h4>
                Responsibilities:
              </h4>
              <ul className="ml-4">
                {item.responsibilities.map((responsibility, listItemIndex) => (
                  <li key={listItemIndex}>{responsibility}</li>
                ))}
              </ul>
            </article>
            <article>
              <h4>
                Highlighted technologies:
              </h4>
              <div className="flex flex-wrap gap-2 ml-4 mt-1">
                {item.technologies.map((technology, listItemIndex) => (
                  <Chip key={listItemIndex} name={technology} />
                ))}
              </div>
            </article>
          </article>
          {index === 0 && (<div className="break-before-page text-background-main" >AI</div>)}
        </>
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