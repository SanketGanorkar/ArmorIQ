import { MdOutlineSecurity } from "react-icons/md";
import { FaUserCog } from "react-icons/fa";
import { MdAccessibility } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
const Intro = () => {
  const arr = [
    {
      id: 1,
      logo: <FaDollarSign />,
      title: "Affordability",
      desc: "Cost-effective cybersecurity solutions that fit within your budget constraints without compromising on quality or effectiveness.",
    },
    {
      id: 2,
      logo: <MdAccessibility />,
      title: "Accessibility",
      desc: "Tailored solutions to meet your specific needs and ensure that essential cybersecurity measures are within reach.",
    },
    {
      id: 3,
      logo: <MdOutlineSecurity />,
      title: "Reliability",
      desc: "We prioritize the security and protection of your digital assets, employing industry best practices and staying ahead of emerging threats to maintain a secure environment.",
    },
    {
      id: 4,
      logo: <FaUserCog />,
      title: "Tailored",
      desc: "The personalized approach ensures that your cybersecurity measures are effective and relevant to your organization's needs.",
    },
  ];

  return (
    <div className="bg-tech bg-cover bg-center flex flex-col">
      <div className="flex flex-row justify-between mx-4 sm:mx-[8%]">
        {/* Left Section */}
        <div className="flex flex-col mt-[120px]">
          <h2 className="text-[#004bae] font-bold">
            DEMOCRATIZING CYBERSECURITY
          </h2>
          <h2 className="text-white font-bold text-3xl max-sm:text-4xl">
            ASSESS → DEFEND → SECURE
          </h2>
          <p className="text-white mt-8">
            Lorem ipsum dolor sit amet consectetur
            <br />
            adipisicing elit. Fugiat iure explicabo aut.
          </p>
          <div className="flex flex-col mt-9 sm:flex-row">
            <button className="bg-[#004bae] text-white font-bold p-3 text-[15px] cursor-pointer">
              LEARN MORE
            </button>
            <div className="flex flex-row sm:flex-col sm:ml-8 max-sm:mt-2 max-sm:gap-2">
              <h2 className="text-[#004bae] font-bold pb-0 text-[15px]">
                Call us
              </h2>
              <h2 className="text-white text-[15px]">+91 9302864102</h2>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex">
          <div className="flex flex-col text-right">
            <div className="flex flex-col mt-[120px]">
              <h2 className="text-white font-bold text-5xl max-sm:text-3xl">
                50 +
              </h2>
              <h2 className="text-white font-bold pt-3">
                Cyber Security Project
              </h2>
              <p className="text-white">
                Our track record reflects our commitment to delivering
                <br />
                effective cybersecurity solutions tailored to the unique
                <br />
                needs of each client, ensuring robust protection and peace
                <br />
                of mind in an increasingly complex digital landscape.
              </p>
            </div>
            <div className="flex flex-col">
              <h2 className="text-white font-bold text-3xl pt-5 pl-[75px]">
                100 %
              </h2>
              <h2 className="text-white font-bold pl-[50px]">
                Service Guarantee
              </h2>
              <p className="text-white pl-3">
                Our unwavering focus on quality, reliability, and proactive
                <br />
                support enables us to maintain an exceptional level of
                satisfaction and
                <br />
                fostering long-lasting partnerships built on trust and mutual
                success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {arr.map((item) => (
            <div
              key={item.id}
              className="bg-[#262626] text-white p-6 rounded-lg flex flex-col items-center border-[#004bae] border-[1px]"
            >
              <div className="text-4xl mb-4">{item.logo}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Intro;
