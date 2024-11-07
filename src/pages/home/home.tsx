import { Button } from "../../components/ui/button";
import Banner from "../../assets/banner.png";
import Banner1 from "../../assets/ban1.png";
import Saree from "../../assets/saree.jpg";
import Categories from "./categories";
import TestimonialCarousel from "./testimonials";
import Commitment from "./commitment";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="z-30 w-full relative bg-center bg-no-repeat md:bg-cover bg-contain no-scrollbar overflow-hidden">
        <img
          src={Saree}
          alt="loading.."
          className="md:hidden h- w-full object-cover bg-opacity-80"
        />
        <img src={Banner} alt="loading.." className="hidden md:block" />

        <div className="absolute bottom-[10rem] md:bottom-20 lg:bottom-36 left-1/2 transform -translate-x-1/2 flex flex-col items-center md:items-start text-center md:text-left p-4 w-[80%] m-auto z-30">
          <p className="text-lg md:text-[2.5rem] lg:text-[3.5rem] md:leading-[3rem] lg:leading-[3.5rem] font-semibold text-white md:text-black/70">
            Discover a <br /> World Of Best <br /> Sarees
          </p>
          <Button
            variant="outline"
            className="text-white font-medium rounded md:h-9 bg-black/70 cursor-pointer mt-2 md:mt-6 lg:mt-8 text-sm p-2 z-50 h-6"
            onClick={() => navigate("/newcomers")}
          >
            See All Collections
          </Button>
        </div>

        <img
          src={Banner1}
          alt="Banner Overlay"
          className="hidden md:block w-[50%] lg:w-[60%] absolute bottom-4 left-0 h-auto z-10"
        />
      </div>

      {/* home layout sections */}
      <Categories />
      <TestimonialCarousel />
      <Commitment />
    </>
  );
};

export default Home;
