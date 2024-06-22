import Cashmap from "../assets/Cashmap.jpg";
import FoodIn from "../assets/FoodIn.jpg";
import Moneytalk from "../assets/Moneytalk.jpg";
import Naviti from "../assets/Naviti.jpg";
import Nudgebee from "../assets/nudgebee.jpg";
import Suzie from "../assets/Suzie.jpg"; // Assuming security.jpg is Suzie's logo

const Trusted = () => {
  return (
    <div className="bg-[#000000] flex flex-row min-h-[300px] justify-center items-center max-lg:flex-col max-lg:items-center">
      <div className="flex flex-col text-white max-md:px-2">
        <div className="font-bold text-3xl py-4 lg:py-0 lg:mb-6">
          Trusted By 2,800+ World-Class
          <br />
          Brands & Organizations Of All
          <br />
          Sizes.
        </div>
        <div className="hidden lg:block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          <br />
          beatae dolor? Suscipit inventore quod repellendus exercitationem.
        </div>
      </div>
      <div className="text-white pt-4 lg:pt-0 lg:pl-10 max-lg:flex max-lg:flex-wrap max-lg:justify-center items-center">
        <div className="flex flex-row lg:pb-5 ">
          <img src={Cashmap} className="border-yellow-50 border-2 w-28 h-28 m-1 " alt="Cashmap" />
          <img src={FoodIn} className="border-yellow-50 border-2 w-28 h-28 m-1 " alt="FoodIn" />
          <img src={Moneytalk} className="border-yellow-50 border-2 w-28 h-28 m-1 " alt="Moneytalk" />
        </div>
        <div className="flex flex-row lg:pb-5">
          <img src={Naviti} className="border-yellow-50 border-2 w-28 h-28 m-1 " alt="Naviti" />
          <img src={Nudgebee} className="border-yellow-50 border-2 w-28 h-28 m-1 " alt="Nudgebee" />
          <img src={Suzie} className="border-yellow-50 border-2 w-28 h-28 m-1 " alt="Suzie" />
        </div>
      </div>
    </div>
  );
};

export default Trusted;
