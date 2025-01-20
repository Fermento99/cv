import Summary from "@/pages/MainSection/Summary";
import WorkExperience from "@/pages/MainSection/WorkExperience";
import Education from "@/pages/MainSection/Education";
import Hobbies from "@/pages/MainSection/Hobbies";

export default function MainSection() {
  return (
    <main className="bg-background-main p-8">
      <Summary/>
      <hr/>
      <WorkExperience/>
      <hr/>
      <Education/>
      <hr/>
      <Hobbies/>
    </main>
  );
};
