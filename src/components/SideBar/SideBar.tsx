import Contact from "@/components/SideBar/Contact";
import Skills from "@/components/SideBar/Skills";

export default function SideBar() {
  return (
    <aside className="w-1/4 bg-background-sidePanel px-4 pb-8 pt-16 flex flex-col h-vh">
      <Contact />
      <hr className="border-separator-light -mx-2" />
      <Skills />
    </aside>
  );
};
