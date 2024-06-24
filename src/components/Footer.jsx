import { FaArrowRight, FaLinkedin } from "react-icons/fa";
import { FaPhoneVolume, FaMedium } from "react-icons/fa6";
import { IoIosMailOpen, IoLogoYoutube } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";


const Footer = () => {
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row bg-[#262626] min-h-[300px] max-md:py-4 justify-center">
        <div className="max-lg:flex max-lg:mb-4 max-md:px-[5%] max-md:gap-4">
          <div className="text-white pb-4 md:ml-[60px] lg:mt-[100px] ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <br /> labore eos impedit cupiditate perspiciatis aliquid animi!
          </div>
          <div className="text-white font-bold md:ml-[100px]">
            Social Media
            <div className="flex flex-row pt-3 ">
              <FaLinkedin className="mr-5 cursor-pointer" size={25} />
              <BsTwitterX className="mr-5 cursor-pointer" size={25} />
              <IoLogoYoutube className="mr-5 cursor-pointer" size={25} />
              <FaMedium className="mr-5 cursor-pointer" size={25} />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between max-md:px-[5%] flex-wrap">
          <div className="flex flex-col lg:mt-[60px] md:mr-12 md:ml-[80px]">
            <h3 className="font-bold text-[#004bae]">PAGE LINKS</h3>
            <div className="space-y-2">
              <div className="flex flex-row font-semibold text-white">
                <FaArrowRight color="white" className="mt-1 mr-2" />
                Home
              </div>
              <div className="flex flex-row font-semibold text-white">
                <FaArrowRight color="white" className="mt-1 mr-2" />
                About
              </div>
              <div className="flex flex-row font-semibold text-white">
                <FaArrowRight color="white" className="mt-1 mr-2" />
                Services
              </div>
              <div className="flex flex-row font-semibold text-white">
                <FaArrowRight color="white" className="mt-1 mr-2" />
                Blog Posts
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:mt-[60px] md:mr-12 md:ml-[60px]">
            <h3 className="font-bold text-[#004bae]">INFORMATION</h3>
            <div className="space-y-2">
              <div className="flex flex-row font-semibold text-white">
                <FaArrowRight color="white" className="mt-1 mr-2" />
                FAQ
              </div>
              <div className="flex flex-row font-semibold text-white">
                <FaArrowRight color="white" className="mt-1 mr-2" />
                Client Support
              </div>
              <div className="flex flex-row font-semibold text-white">
                <FaArrowRight color="white" className="mt-1 mr-2" />
                Terms & Conditions
              </div>
              <div className="flex flex-row font-semibold text-white">
                <FaArrowRight color="white" className="mt-1 mr-2" />
                Privacy Policies
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:mt-[60px] md:ml-[50px]">
            <h3 className="font-bold text-[#004bae]">CONTACT INFO</h3>
            <div className="space-y-2">
              <div className="flex flex-row font-semibold text-white">
                <FaPhoneVolume className="mt-1 mr-2" />
                9302864102
              </div>
              <div className="flex flex-row font-semibold text-white">
                <IoIosMailOpen className="mt-1 mr-2" />
                xyz@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-3 px-2 flex flex-col items-center bg-[#000000] text-white min-h-[50px]">
        Copyright 2024 © All Rights Reserved Design by Bruce Wayne
      </p>
    </div>
  );
};

export default Footer;
