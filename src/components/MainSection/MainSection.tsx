import Summary from "./Summary";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Projects from "./Projects";
import Hobbies from "./Hobbies";

export default function MainSection() {
  return (
    <main className="bg-background-main p-8 min-h-full">
      <Summary />
      <hr />
      <WorkExperience />
      <hr />
      <Education />
      <hr />
      <Projects />
      <hr />
      <Hobbies />
    </main>
  );
};
