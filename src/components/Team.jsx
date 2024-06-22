import profile from "../assets/profile.jpg";
import {  FaInstagram , FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Team = () => {
  const arr = [
    {
      id: 1,
      img: profile,
      name: "Tony Stark",
      desig: "Iron Man",
      desc: "Lorem ipsum, dolor sit amet consectetur, Asperiores magni",
    },
    {
      id: 2,
      img: profile,
      name: "Thor",
      desig: "God of Thunder",
      desc: "Lorem ipsum, dolor sit amet consectetur, Asperiores magni",
    },
    {
      id: 3,
      img: profile,
      name: "Steve Rogers",
      desig: "Captain America",
      desc: "Lorem ipsum, dolor sit amet consectetur, Asperiores magni",
    },
    {
      id: 4,
      img: profile,
      name: "Bruce Banner",
      desig: "The Hulk",
      desc: "Lorem ipsum, dolor sit amet consectetur, Asperiores magni",
    },
  ];

  return (
    <div className="bg-[#262626] flex flex-col items-center">
      <h2 className="text-[#004bae] font-bold mt-[70px]">OUR TEAM</h2>
      <h2 className="text-white text-4xl font-semibold ml-8">Meet The Expert</h2>
      <p className="text-white ml-12 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, enim.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] mt-8 mb-8">
        {arr.map((member) => (
          <div key={member.id} className="flex flex-col items-center bg-black p-4 rounded-lg">
            <img src={member.img} className="h-[200px] w-[280px] object-cover rounded-lg" alt={member.name} />
            <div className="flex flex-col items-center mt-4">
              <h2 className="text-white font-semibold text-xl">{member.name}</h2>
              <h4 className="text-white text-[12px]">{member.desig}</h4>
              <p className="text-white text-[10px] text-center">{member.desc}</p>
              <div className="flex space-x-4 mt-4">
                <FaLinkedin color="white"  className="cursor-pointer" />
                <FaInstagram color="white" className="cursor-pointer" />
                <BsTwitterX color="white"  className="cursor-pointer"/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
