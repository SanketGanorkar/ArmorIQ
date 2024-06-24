import security from "../assets/security.jpg";
import { FaUserFriends } from "react-icons/fa";
const AboutUs = () => {
  return (
    <div className="flex flex-row bg-[#262626] items-center justify-center flex-wrap-reverse">
      <div className="flex items-center justify-center max-md:mb-4">
        <img src={security} className="sm:h-[280px] sm:w-[530px] sm:m-5 w-[90%]" />
      </div>
      <div className=" text-white m-5">
        <h5 className="font-bold text-[13px] text-[#004bae]">ABOUT US</h5>
        <p className="font-bold text-2xl">
          Fortify Your Organization with
          <br />
          Comprehensive Cybersecurity 
          <br />Solutions
        </p>
        <p className="text-xs mt-6">
        Our team of highly skilled cybersecurity professionals 
        <br />
        brings extensive experience in finance, healthcare, technology, 
        <br />
        and more, allowing us to understand and address sector-specific vulnerabilities effectively
        </p>
        <div className="flex flex-row">
          {/* <FaUserFriends color="white" className="mt-10 mr-5" size={40}/> */}
          <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            <br />
            Quas deleniti eaque recusandae nemo alias vero vitae enim earum
            <br />
            aut corrupti.</p>
        </div>
      <button className="bg-[#004bae] text-white font-bold p-2 mt-2  text-[15px] w-30 cursor-pointer">READ MORE</button>
      </div>
    </div>
  );
};

export default AboutUs;
