import React from "react";
import { MdOutlineSecurity } from "react-icons/md";
import logo from "../assets/logo.png";

const Services = () => {
  const services = [
    {
      id: 1,
      logo: <MdOutlineSecurity color="white" />,
      title: "Cloud Security",
      desc: "Lorem ipsum dolor, sit amet consectetur",
    },
    {
      id: 2,
      logo: <MdOutlineSecurity color="white" />,
      title: "Mobile Security",
      desc: "Lorem ipsum dolor, sit amet consectetur",
    },
    {
      id: 3,
      logo: <MdOutlineSecurity color="white" />,
      title: "Application Security",
      desc: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 4,
      logo: <MdOutlineSecurity color="white" />,
      title: "Network Security",
      desc: "Lorem ipsum dolor, sit amet consectetur.",
    },
    {
      id: 5,
      logo: <MdOutlineSecurity color="white" />,
      title: "Endpoint Security",
      desc: "Lorem ipsum dolor, sit amet consectetur.",
    },
    {
      id: 6,
      logo: <MdOutlineSecurity color="white" />,
      title: "Identity & Access Management",
      desc: "Lorem ipsum dolor, sit amet consectetur.",
    },
  ];

  return (
    <div>
      <div className="bg-[#262626] flex flex-col items-center max-md:px-2 py-12">
        <h2 className="text-[#004bae] font-bold">SERVICES</h2>
        <h2 className="text-white font-semibold text-3xl">What We Do</h2>
        <p className="text-white pt-3 text-center">
          Enhancing Organizational Cybersecurity Through Comprehensive Services
        </p>
        <div className="relative w-full max-w-4xl mt-8">
          <div className="absolute left-1/2 w-0.5 bg-white h-full transform -translate-x-1/2"></div>
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`relative flex flex-col items-center mb-12 w-full md:w-1/2 ${
                index % 2 === 0 ? "ml-auto pr-4" : "mr-auto pl-4"
              }`}
              style={{
                transform: index % 2 === 0 ? 'translateX(-50%)' : 'translateX(50%)'
              }}
            >
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-2">{service.logo}</div>
                <h3 className="text-white font-semibold text-xl">{service.title}</h3>
                <p className="text-white mt-2">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Footer section */}
      <div className="bg-[#004bae] min-h-[100px] lg:h-[150px] flex items-center justify-center">
        <div className="flex flex-row items-center justify-center py-4 gap-x-14 gap-y-4 lg:gap-24 flex-wrap">
          <div className="flex flex-col items-center">
            <h2 className="text-white text-2xl lg:text-4xl font-bold">2500+</h2>
            <h4 className="font-semibold text-[20px]">Cyber Projects</h4>
          </div>
          <div className="flex flex-col">
            <h2 className="text-white text-2xl lg:text-4xl font-bold ml-11">
              1800+
            </h2>
            <h4 className="font-semibold text-[20px] ml-3">
              Client Production
            </h4>
          </div>
          <div className="flex flex-col">
            <h2 className="text-white text-2xl lg:text-4xl font-bold ml-[60px]">
              100%
            </h2>
            <h4 className="font-semibold text-[20px] ml-3">
              Services Guaranteed
            </h4>
          </div>
          <div className="flex flex-col">
            <h2 className="text-white text-2xl lg:text-4xl font-bold ml-9">
              50+
            </h2>
            <h4 className="font-semibold text-[20px] ml-3">Team Expert</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
