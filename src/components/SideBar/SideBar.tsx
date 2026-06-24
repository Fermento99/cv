import Contact from "@/components/SideBar/Contact";
import Skills from "@/components/SideBar/Skills";

export default function SideBar() {
  return (
    <aside className="md:w-1/4 bg-background-sidePanel px-8 md:px-2 lg:px-8 py-8 md:pt-16 flex flex-col h-vh print:px-4">
      <Contact />
      <hr className="border-separator-light -mx-4 md:-mx-1 lg:-mx-4 print:-mx-2" />
      <Skills />
    </aside>
  );
};
