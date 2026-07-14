import Summary from "./Summary";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Projects from "./Projects";

export default function MainSection() {
  return (
    <main className="bg-background-main py-8 px-4 min-h-full md:w-3/4">
      <Summary />
      <hr />
      <WorkExperience />
      <hr />
      <Education />
      <hr />
      <Projects />
    </main>
  );
};
