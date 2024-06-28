import { useState } from "react";
import { MdOutlineSecurity, MdCloudDone } from "react-icons/md";
import { TbNetwork } from "react-icons/tb";
import { AiOutlineAudit } from "react-icons/ai";
import { GrShieldSecurity } from "react-icons/gr";
import { RiComputerLine } from "react-icons/ri";
import Modal from "./Modals.jsx"; 

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      logo: <MdCloudDone color="white" />,
      title: "Cloud Security",
      desc: [
        "Configuration Audit (AWS, Azure, Google and Other SaaS products)",
        "Mobile Security",
        "Mobile Application Penetration Test",
        "Source Code Review",
        "Application Security",
        "Application Security Testing",
        "Source Code Review",
        "Application Security Architecture Review",
        "Secure Software Development Lifecycle Review",
      ],
    },
    {
      id: 2,
      logo: <MdOutlineSecurity color="white" />,
      title: "Mobile Security",
      desc: [
        "Mobile Application Penetration Test",
        "Source Code Review",
        "Application Security",
        "Application Security Testing",
      ],
    },
    {
      id: 3,
      logo: <RiComputerLine color="white" />,
      title: "Application Security",
      desc: [
        "Application Security Architecture Review",
        "Secure Software Development Lifecycle Review",
      ],
    },
    {
      id: 4,
      logo: <TbNetwork color="white" />,
      title: "Network Security",
      desc: [
        "Network Vulnerability Assessment",
        "Network Penetration Testing",
        "Configuration Audit",
        "Network Architecture Security Review",
        "Wireless Penetration Testing",
        "Firewall Rule Review",
      ],
    },
    {
      id: 5,
      logo: <AiOutlineAudit color="white" />,
      title: "Audit & Compliance",
      desc: [
        "Information Security Audit",
        "Risk Management Program",
        "Third Party Risk Management",
        "ISO 27001 Implementation & Sustenance",
        "Threat Assessment & Risk Analysis",
        "Written Information Security Policy",
        "Written Incident Response Procedure",
        "Written Third Party Risk Management Program",
        "Business Process Control Assessment",
        "NIST and CIS Controls Framework Alignment",
        "Regulatory Compliance Assistance",
        "Cyber Security Assessment for Mergers & Acquisitions (M&A)",
      ],
    },
    {
      id: 6,
      logo: <GrShieldSecurity color="white" />,
      title: "Special Security Services",
      desc: [
        "Red Team Services",
        "Blue Team Services",
        "Dark & Deep Web Analysis Services",
        "SOC & Global Threat Management Services",
        "SOC as a Service",
        "Digital Forensics & Security Incident Response",
        "Security Advisory Services",
        "Tabletop Exercise",
      ],
    },
    {
      id: 7,
      logo: <MdOutlineSecurity color="white" />,
      title: "SOC & Management Services",
      desc: [
        "SOC & Global Threat Management Services",
        "SOC as a Service",
        "Digital Forensics & Security Incident Response",
        "Security Advisory Services",
      ],
    },
  ];

  return (
    <div id="services" className="bg-[#000000]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 mt-[60px]">
        {services.map((item) => (
          <div
            key={item.id}
            className="bg-[#262626] text-white p-6 rounded-lg flex flex-col items-center border-[#004bae] border-[1px] hover:bg-[#1d1c1c] w-full h-auto cursor-pointer  md:mt-0"
            onClick={() => setSelectedService(item)}
          >
            <div className="text-4xl mb-4">{item.logo}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <ul className="text-center text-[17px] list-disc list-inside">
              {item.desc.slice(0, 3).map((point, index) => (
                <li key={index} className="mb-2">{point}</li>
              ))}
              {item.desc.length > 3 && (
                <li className="text-blue-500">...click to read more</li>
              )}
            </ul>
          </div>
        ))}
      </div>
      {selectedService && (
        <Modal service={selectedService} onClose={() => setSelectedService(null)} />
      )}
      {/* Footer section */}
    </div>
  );
};

export default Services;
