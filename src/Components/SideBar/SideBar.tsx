// import '@/globals.css';
import Contact from "@/pages/SideBar/Contact";
import Skills from "@/pages/SideBar/Skills";

export default function SideBar() {
  return (
    <aside className="w-1/4 bg-background-sidePanel px-4 pb-8 pt-16 flex flex-col">
      <Contact />
      <hr className="border-separator-light -mx-2" />
      <Skills />
    </aside>
  );
};
