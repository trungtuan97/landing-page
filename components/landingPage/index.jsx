import Advantage from "./components/Advantage";
import AlentCarousel from "./components/AlentCarousel";
import Compete from "./components/Compete";
import HeaderCarousel from "./components/HeaderCarousel";
import Method from "./components/Method";
import OptimalCarousel from "./components/OptimalCarousel";
import SolutionCarousel from "./components/SolutionCarousel";

const LandingPage = () => {
  return (
    <div className="p-2 md:p-4 lg:p-4 w-[1920px]">
      <div className="topMenu flex ">
        <img src="/logo.png" alt="logo" className="w-[150px] h-[45px]" />
      </div>
      <div className="">
        <HeaderCarousel />
        <AlentCarousel />
        <SolutionCarousel />
        <OptimalCarousel />
        <Method />
        <Advantage />
        <Compete />
      </div>
    </div>
  );
};
export default LandingPage;
