import MainSection from "@/pages/MainSection";
import SideBar from "@/pages/SideBar";

export default function Home() {
  return (
    <Row>
      <SideBar />
      <MainSection />
    </Row>
  );
}

const Row= ({...props}) => (
  <div className="flex flex-row" {...props}/>
);
