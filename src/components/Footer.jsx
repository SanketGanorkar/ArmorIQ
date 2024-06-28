import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row bg-[#262626] min-h-[80px] py-2 lg:justify-center">
        <div className="flex flex-col lg:items-center mb-2 px-4 lg:px-0">
          <div className="text-white pb-2 lg:pb-0 lg:mt-8 text-center lg:text-left">
            Excited? Us too. Let's get moving.
          </div>
          <div className="text-white font-bold">
            <div className="flex flex-row justify-center lg:justify-start pt-2 space-x-4">
              <FaLinkedin className="cursor-pointer" size={25} />
              <BsTwitterX className="cursor-pointer" size={25} />
              <IoLogoYoutube className="cursor-pointer" size={25} />
              <FaMedium className="cursor-pointer" size={25} />
            </div>
          </div>
        </div>
      </div>
      <p className="pt-2 px-2 pb-2 flex justify-center items-center bg-[#000000] text-white min-h-[40px] text-center">
        Copyright 2024 © All Rights Reserved | Design by ArmorIQ
      </p>
    </div>
  );
};

export default Footer;
