import { MdOutlineSecurity } from "react-icons/md";

const Intro = () => {
  const arr = [
    {
      id: 1,
      logo: <MdOutlineSecurity />,
      title: "24/7 Support",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum esse expedita possimus molestiae numquam rem eligendi facilis cum voluptates aut.",
    },
    {
      id: 2,
      logo: <MdOutlineSecurity />,
      title: "24/7 Support",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum esse expedita possimus molestiae numquam rem eligendi facilis cum voluptates aut.",
    },
    {
      id: 3,
      logo: <MdOutlineSecurity />,
      title: "24/7 Support",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum esse expedita possimus molestiae numquam rem eligendi facilis cum voluptates aut.",
    },
    {
      id: 4,
      logo: <MdOutlineSecurity />,
      title: "24/7 Support",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum esse expedita possimus molestiae numquam rem eligendi facilis cum voluptates aut.",
    },
  ];

  return (
    <div className="bg-tech bg-cover bg-center flex flex-col">
      <div className="flex flex-row justify-between mx-4 sm:mx-[8%]">
        {/* Left Section */}
        <div className="flex flex-col mt-[120px]">
          <h2 className="text-[#004bae] font-bold">WE ARE REACTIVE</h2>
          <h2 className="text-white font-bold text-3xl max-sm:text-4xl">
            CYBER SECURITY
            <br />
            SOLUTION
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
              <h2 className="text-[#004bae] font-bold pb-0">Call us</h2>
              <h2 className="text-white">+91 9302864102</h2>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex">
          <div className="flex flex-col text-right">
            <div className="flex flex-col mt-[120px]">
              <h2 className="text-white font-bold text-5xl max-sm:text-3xl">
                2500 +
              </h2>
              <h2 className="text-white font-bold pt-3">
                Cyber Security Project
              </h2>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur
                <br />
                adipisicing elit. Est, reprehenderit.
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
                Lorem ipsum dolor sit amet, consectetur
                <br />
                adipisicing elit. Est, reprehenderit.
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
