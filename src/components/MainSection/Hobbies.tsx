import { useContext } from "react";
import { ResumeContext } from "../../ResumeContext";


export default function Hobbies() {
  const { hobbies } = useContext(ResumeContext);;

  return (
    <section>
      <h2>Hobbies:</h2>
      <ul className="grid grid-cols-2">
        {hobbies.map((hobby, index) => (
          <li key={index}>
            {hobby}
          </li>
        ))}
      </ul>
    </section>
  );
};
