import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import logo from "../assets/Company.jpg"; 

const Navbar = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-10 flex flex-row bg-[#000000] h-[70px] items-center max-sm:justify-end px-4">
        <img src={logo} alt="Company Logo" className="ml-0 mr-auto sm:ml-0 h-12" />
        <ul className="flex flex-row max-sm:hidden items-center text-white list-none ml-auto">
          <li className="mr-6 mb-3 font-bold">HOME</li>
          <li className="mr-6 mb-3 font-bold">ABOUT US</li>
          <li className="relative group mr-4 mb-3 font-bold">
            SERVICES
            <ul className="absolute left-0 hidden mt-2 bg-[#000000] text-white group-hover:block">
              <li className="px-4 py-2 hover:bg-gray-700">Service 1</li>
              <li className="px-4 py-2 hover:bg-gray-700">Service 2</li>
              <li className="px-4 py-2 hover:bg-gray-700">Service 3</li>
            </ul>
          </li>
          <li className="relative group mr-6 mb-3 font-bold">
            PAGE
            <ul className="absolute left-0 hidden mt-2 bg-[#000000] text-white group-hover:block">
              <li className="px-4 py-2 hover:bg-gray-700">Page 1</li>
              <li className="px-4 py-2 hover:bg-gray-700">Page 2</li>
              <li className="px-4 py-2 hover:bg-gray-700">Page 3</li>
            </ul>
          </li>
          <li className="relative group mr-6 mb-3 font-bold">
            BLOG
            <ul className="absolute left-0 hidden mt-2 bg-[#000000] text-white group-hover:block">
              <li className="px-4 py-2 hover:bg-gray-700">Blog 1</li>
              <li className="px-4 py-2 hover:bg-gray-700">Blog 2</li>
              <li className="px-4 py-2 hover:bg-gray-700">Blog 3</li>
            </ul>
          </li>
          <li className="mr-6 mb-3 font-bold">CONTACT</li>
        </ul>
        <FaSearch color="white" className="mr-6 mb-2 sm:block" />
        <IoMdMenu
          color="white"
          size={20}
          className="mr-3 mb-2 block sm:hidden"
          onClick={() => setVisibleMenu(true)}
        />
      </div>
      {visibleMenu && (
        <div className="fixed top-0 left-0 h-screen w-screen bg-black transition z-20">
          <RxCross2
            color="white"
            size={25}
            className="absolute top-4 right-4"
            onClick={() => setVisibleMenu(false)}
          />
          <ul className="text-white absolute top-14 right-4 text-right text-2xl flex flex-col gap-4">
            <li onClick={() => setVisibleMenu(false)}>HOME</li>
            <li onClick={() => setVisibleMenu(false)}>ABOUT US</li>
            <li onClick={() => setVisibleMenu(false)}>SERVICES</li>
            <li onClick={() => setVisibleMenu(false)}>PAGE</li>
            <li onClick={() => setVisibleMenu(false)}>BLOG</li>
            <li onClick={() => setVisibleMenu(false)}>CONTACT</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;