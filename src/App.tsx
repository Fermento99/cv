import MainSection from "@/components/MainSection";
import SideBar from "@/components/SideBar";

import '@/globals.css';

export default function Home() {
  return (
    <div className="
        flex flex-col-reverse md:flex-row
        screen:max-w-5xl screen:mx-auto screen:lg:my-8 screen:shadow-lg
        print:w-full print:h-[200vh]
      "
    >
      <SideBar />
      <MainSection />
    </div>
  );
}
