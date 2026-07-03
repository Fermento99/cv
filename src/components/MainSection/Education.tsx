import { useContext, type ReactNode } from "react";

import { ResumeContext } from "../../ResumeContext";
import Period from "../Period";

export default function Education() {
  const { education } = useContext(ResumeContext);

  return (
    <section>
      <h2>Education</h2>
      {education.map((item, index) => (
        <article key={index}>
          <h3>{item.name}</h3>
          <Period startDate={item.startDate} endDate={item.endDate} />
          <p className="mt-1">Achieved Title: <Italics>{item.title}</Italics></p>
          {item.field && <p>Field: <Italics>{item.field}</Italics></p>}
          {item.score && <p>Score: <Italics>{item.score}</Italics></p>}
        </article>
      ))}
    </section>
  );
};

interface ItalicsProps { children: ReactNode }

function Italics({ children }: ItalicsProps) {
  return <span className="font-medium">{children}</span>;
}