import Summary from "@/components/MainSection/Summary";
import WorkExperience from "@/components/MainSection/WorkExperience";
import Education from "@/components/MainSection/Education";
import Projects from "@/components/MainSection/Projects";
import Hobbies from "@/components/MainSection/Hobbies";

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
