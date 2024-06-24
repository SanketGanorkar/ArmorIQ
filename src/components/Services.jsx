import { MdOutlineSecurity } from "react-icons/md";
import logo from "../assets/logo.png";
const Services = () => {
  const arr1 = [
    {
      id: 1,
      logo: <MdOutlineSecurity color="white" />,
      title: "Cloud Security",
      desc: "Configuration Audit (AWS, Azure, Google)",
    },
    {
      id: 2,
      logo: <MdOutlineSecurity color="white" />,
      title: "Mobile Security",
      desc: "A. Mobile Application Penetration Test B. Source Code Review",
    },
    {
      id: 3,
      logo: <MdOutlineSecurity color="white" />,
      title: "Application Security",
      desc: "A. Application Security Testing B. Source Code Review C.Application Security Architecture Review D.Secure Software Development Lifecycle Implementation ",
    },
  ];
  const arr2 = [
    {
      id: 1,
      logo: <MdOutlineSecurity color="white" />,
      title: "Network Security",
      desc: "A. Network Vulnerability Assessment B.Network Penetration Testing C.Configuration Audit D.Network Architecture Security Review E. Wireless Penetration Testing F.Firewall Review",
    },
    {
      id: 2,
      logo: <MdOutlineSecurity color="white" />,
      title: "Network Security",
      desc: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 3,
      logo: <MdOutlineSecurity color="white" />,
      title: "Network Security",
      desc: "Lorem ipsum dolor sit amet.",
    },
  ];

  return (
    <div>
      <div className="bg-[#262626] items-center flex flex-col max-md:px-2">
        <h2 className="text-[#004bae] font-bold pt-12">SERVICES</h2>
        <h2 className="text-white font-semibold text-3xl">What We Do</h2>
        <p className="text-white pl-7 pt-3 text-center">
          Enhancing Organizational Cybersecurity Through Comprehensive Services
        </p>
        <div className="flex flex-row max-md:flex-col max-md:mt-4">
          <div className="flex max-md:gap-[1%] md:flex-col mt-5 lg:mr-12 mb-3">
            {arr1.map((service) => (
              <div
                key={service.id}
                className="flex flex-col items-center md:mb-12"
              >
                {service.logo}
                <h3 className="text-white font-semibold text-xl text-center">
                  {service.title}
                </h3>
                <p className="text-white text-center">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="mr-5 ml-5 md:mt-5 max-md:flex items-center justify-center">
            <img src={logo} className="sm:h-[330px]" />
          </div>
          <div className="flex max-md:gap-[1%] md:flex-col lg:ml-12 mt-5">
            {arr2.map((service) => (
              <div
                key={service.id}
                className="flex flex-col items-center mb-12"
              >
                {service.logo}
                <h3 className="text-white font-semibold text-xl text-center">
                  {service.title}
                </h3>
                <p className="text-white text-center">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            {/* Additional content can go here */}
          </div>
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
