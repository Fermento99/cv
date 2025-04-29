import Contact from "@/components/SideBar/Contact";
import Skills from "@/components/SideBar/Skills";

export default function SideBar() {
  return (
    <aside className="w-1/4 bg-background-sidePanel px-8 pb-8 pt-16 flex flex-col h-vh print:px-4">
      <Contact />
      <hr className="border-separator-light -mx-4 print:-mx-2" />
      <Skills />
    </aside>
  );
};
