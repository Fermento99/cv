import { useContext } from "react";
import { ResumeContext } from "../../ResumeContext";
import { GenericList } from "./GenericList";


export default function Hobbies() {
  const { hobbies } = useContext(ResumeContext);;

  return (
    <section>
      <GenericList categoryName="Hobbies">
        {hobbies.map((hobby, index) => (
          <li key={index}>
            {hobby}
          </li>
        ))}
      </GenericList>
    </section>
  );
};
