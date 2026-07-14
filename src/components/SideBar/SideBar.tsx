import Contact from "./Contact";
import Hobbies from "./Hobbies";
import Skills from "./Skills";

export default function SideBar() {
  return (
    <aside className="bg-background-sidePanel flex flex-col h-vh py-8 px-4 md:px-1 md:w-1/4 lg:px-4 print:px-4">
      <Contact />
      <hr />
      <Skills />
      <hr />
      <Hobbies />
    </aside>
  );
};
