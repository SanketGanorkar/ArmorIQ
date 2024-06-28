import team from "../assets/Team.jpg";
import { GiProgression } from "react-icons/gi";
import { FaEye } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";

const AboutUs = () => {
  const arr = [
    {
      id: 1,
      logo: <GiProgression size={50} />,
      title: "Our Aim",
      desc: "As a cybersecurity company, we are dedicated to protecting businesses from digital threats and ensuring the integrity of their data. Our goal is to deliver robust and innovative security solutions that safeguard our clients' digital assets, providing them with peace of mind.",
    },
    {
      id: 2,
      logo: <FaEye size={50} />,
      title: "Our Vision",
      desc: "We strive to be the leading provider of comprehensive cybersecurity solutions, empowering businesses to operate securely in a digital world. We aim to build long-term partnerships based on trust, transparency, and excellence, driving growth and resilience for our clients.",
    },
    {
      id: 3,
      logo: <IoIosRocket size={50} />,
      title: "Our Mission",
      desc: "We are focused on enabling businesses of all sizes to achieve cyber resilience through customized security strategies. Our promise is to deliver exceptional value, mitigate risks, and build lasting relationships with our clients through expert guidance and cutting-edge technology.",
    },
  ];

  return (
    <div className="flex flex-col bg-[#262626] mt-3">
      <div>
        <h1 className="text-4xl text-red ml-9 mt-[15px] font-semibold text-white">
          About Us
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex justify-center lg:w-1/2 mt-9">
          <img
            src={team}
            className="h-auto w-full rounded-2xl border-1 mt-5 mx-4 lg:h-[500px] lg:w-[1400px] lg:mx-0"
            alt="About Us"
          />
        </div>
        <div className="flex flex-col p-6 lg:w-1/2">
          <h2 className="text-2xl text-[#004bae] font-semibold mt-6 lg:ml-12">
          Fortify Your Organization with Comprehensive Cybersecurity Solutions
          </h2>
          <h2 className="text-4xl font-bold mt-6 text-white lg:ml-12">
            Why Choose Us
          </h2>
          <p className="mt-3 text-white text-[17px] lg:ml-12">
            At ArmourIQ, we believe in securing the future of businesses through
            robust cybersecurity solutions. With a team of seasoned experts
            specializing in finance, healthcare, and technology, we are
            committed to understanding and addressing sector-specific
            vulnerabilities effectively.
          </p>
          <p className="mt-3 text-white text-[17px] lg:ml-12">
            Our Cyber Maturity Assessment benchmarks your cybersecurity against
            industry best practices, providing a clear roadmap for improvement.
            We tailor Cloud Assessments for Azure, Office 365, and AWS to ensure
            your cloud environments are secure against data vulnerabilities,
            access control issues, and compliance risks.
          </p>
          <p className="mt-3 text-white text-[17px] lg:ml-12">
            We pride ourselves on our exceptional customer service. We believe
            that open communication and collaboration are key to achieving the
            best results for our clients,
            <br />
            and we work closely with each client to understand their goals and
            priorities.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
          {arr.map((item) => (
            <div
              key={item.id}
              className="bg-[#262626] text-white p-6 rounded-lg flex flex-col items-center border-[#004bae] border-[1px] hover:bg-[#1d1c1c] w-full max-w-sm"
            >
              <div className="text-4xl mb-4">{item.logo}</div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-center text-[17px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
