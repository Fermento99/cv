import MainSection from "@/components/MainSection";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <div className="
        flex flex-row
        screen:max-w-screen-lg screen:mx-auto screen:my-8 screen:shadow-lg
        print:w-full print:h-[200vh]
      "
    >
      <SideBar />
      <MainSection />
    </div>
  );
}
