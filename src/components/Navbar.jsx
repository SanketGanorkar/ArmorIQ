import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import logo from "../assets/Company.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [visibleMenu, setVisibleMenu] = useState(false);

  const navigate = useNavigate();
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-10 flex flex-row bg-[#000000] h-[70px] items-center px-4">
        <img
          src={logo}
          alt="Company Logo"
          className="h-[130px] ml-0 mr-auto sm:ml-0"
        />
        <ul className="flex flex-row max-sm:hidden items-center text-white list-none ml-auto">
          <li
            className="mr-6 mb-3 font-bold cursor-pointer"
            onClick={() => {
              navigate("/ArmorIQ");
              scrollToSection("home");
            }}
          >
            HOME
          </li>
          <li
            className="mr-6 mb-3 font-bold cursor-pointer"
            onClick={() => navigate("/ArmorIQ/about")}
          >
            ABOUT US
          </li>
          <li
            className="relative group mr-4 mb-3 font-bold cursor-pointer"
            onClick={() => navigate("/ArmorIQ/services")}
          >
            SERVICES
          </li>
          <li
            className="relative group mr-6 mb-3 font-bold cursor-pointer"
            onClick={() => {
              navigate("/ArmorIQ");
              scrollToSection("team");
            }}
          >
            TEAM
          </li>
          <li
            className="relative group mr-6 mb-3 font-bold cursor-pointer"
            onClick={() => {
              navigate("/ArmorIQ");
              scrollToSection("blog");
            }}
          >
            BLOG
          </li>
          <li
            className="mr-6 mb-3 font-bold cursor-pointer"
            onClick={() => {
              navigate("/ArmorIQ");
              scrollToSection("contact");
            }}
          >
            CONTACT
          </li>
        </ul>
        <IoMdMenu
          color="white"
          size={25}
          className="mr-3 mb-2 block sm:hidden max-sm:h-8 max-sm:w-8"
          onClick={() => setVisibleMenu(true)}
        />
      </div>
      {visibleMenu && (
        <div className="fixed top-0 left-0 h-screen w-screen bg-black transition z-20">
          <RxCross2
            color="white"
            size={25}
            className="absolute top-4 right-4 max-sm:h-8 max-sm:w-8"
            onClick={() => setVisibleMenu(false)}
          />
          <ul className="text-white absolute top-14 right-4 text-right text-2xl flex flex-col gap-4">
            <li onClick={() => {
                navigate("/ArmorIQ");
                scrollToSection("home");
                setVisibleMenu(false);
              }}>HOME</li>
            <li
              onClick={() => {
                navigate("/ArmorIQ/about");
                setVisibleMenu(false);
              }}
            >
              ABOUT US
            </li>
            <li
              onClick={() => {
                navigate("/ArmorIQ/services");
                setVisibleMenu(false);
              }}
            >
              SERVICES
            </li>
            <li
              onClick={() => {
                navigate("/ArmorIQ");
                scrollToSection("team");
                setVisibleMenu(false);
              }}
            >
              TEAM
            </li>
            <li
              onClick={() => {
                navigate("/ArmorIQ");
                scrollToSection("blog");
                setVisibleMenu(false);
              }}
            >
              BLOG
            </li>
            <li
              onClick={() => {
                navigate("/ArmorIQ");
                scrollToSection("contact");
                setVisibleMenu(false);
              }}
            >
              CONTACT
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
