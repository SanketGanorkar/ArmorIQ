// import profile from "../assets/profile.jpg";
// import { FaInstagram, FaLinkedin } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";
import team2 from "../assets/Team_2.jpg";
import team3 from "../assets/Team_3.jpg";

const Team = () => {
  // const arr = [
  //   {
  //     id: 1,
  //     img: profile,
  //     name: "Tony Stark",
  //     desig: "Iron Man",
  //     desc: "Lorem ipsum, dolor sit amet consectetur, Asperiores magni",
  //   },
  //   {
  //     id: 2,
  //     img: profile,
  //     name: "Thor",
  //     desig: "God of Thunder",
  //     desc: "Lorem ipsum, dolor sit amet consectetur, Asperiores magni",
  //   },
  //   {
  //     id: 3,
  //     img: profile,
  //     name: "Steve Rogers",
  //     desig: "Captain America",
  //     desc: "Lorem ipsum, dolor sit amet consectetur, Asperiores magni",
  //   },
  //   {
  //     id: 4,
  //     img: profile,
  //     name: "Bruce Banner",
  //     desig: "The Hulk",
  //     desc: "Lorem ipsum, dolor sit amet consectetur, Asperiores magni",
  //   },
  // ];

  return (
    <div className="bg-[#262626] flex flex-col items-center" id="team">
      {/* <h2 className="text-[#004bae] font-bold mt-[70px]">OUR TEAM</h2> */}
      <h2 className="text-[#004bae] text-4xl font-semibold mt-12 text-center">
        Meet Our Team
      </h2>
      {/* <p className="text-white ml-12 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, enim.
      </p> */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] mt-8 mb-8">
        {arr.map((member) => (
          <div key={member.id} className="flex flex-col items-center bg-black p-4 rounded-lg">
            <img src={member.img} className="h-[200px] w-[280px] object-cover rounded-lg" alt={member.name} />
            <div className="flex flex-col items-center mt-4">
              <h2 className="text-white font-semibold text-xl">{member.name}</h2>
              <h4 className="text-white text-[12px]">{member.desig}</h4>
              <p className="text-white text-[10px] text-center">{member.desc}</p>
              <div className="flex space-x-4 mt-4">
                <FaLinkedin color="white" className="cursor-pointer" />
                <FaInstagram color="white" className="cursor-pointer" />
                <BsTwitterX color="white" className="cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div> */}
      <div className="flex flex-col mt-5 w-full px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:space-x-8">
          <img src={team3} className="h-[200px] lg:h-[345px] w-full lg:w-[445px] object-cover rounded-xl mb-4 lg:mb-0" />
          <div className="flex flex-col lg:ml-5 text-center lg:text-left">
            <p className="text-white text-base lg:text-lg">
              At ArmourIQ, we are dedicated to democratizing cybersecurity, ensuring that businesses
              of all sizes can defend against digital threats with confidence. Our team is committed to
              delivering tailored cybersecurity solutions designed to meet the unique needs of each client.
            </p>
            <br />
            <p className="text-white text-base lg:text-lg">
              Rather than focusing on individual team members, we emphasize our collective expertise and collaborative approach. This allows us to
              maintain a strong commitment to quality, reliability, and proactive support, ensuring that every client receives personalized cybersecurity solutions that are effective and affordable.
            </p>
            <br />
            <p className="text-white text-base lg:text-lg">
              Our dedication to transparency fosters trust and long-lasting partnerships built on mutual success. We believe that informed
              clients are empowered clients, which is why we maintain open communication and provide clear insights into our processes and strategies.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:justify-center lg:space-x-reverse lg:space-x-8 mt-8 lg:mt-16">
          <img src={team2} className="h-[200px] lg:h-[345px] w-full lg:w-[445px] object-cover rounded-xl mb-4 lg:mb-0" />
          <div className="flex flex-col lg:ml-5 text-center lg:text-left">
            <p className="text-white text-base lg:text-lg">
              At ArmourIQ, we offer a comprehensive suite of cybersecurity services, including risk assessment, 
              threat detection, incident response, and continuous monitoring. Our innovative solutions are 
              designed to adapt to the evolving threat landscape, providing robust protection against both current and emerging cyber threats.
            </p>
            <br />
            <p className="text-white text-base lg:text-lg">
              We understand that every business is unique, which is why we take
              a customized approach to each project. Our experts work closely
              with you to understand your specific needs and challenges,
              developing tailored strategies that align with your business
              objectives. Whether you are a small business looking to strengthen
              your security posture or a large enterprise seeking advanced
              threat protection, we have the expertise and resources to support
              you.
            </p>
            <br />
            <p className="text-white text-base lg:text-lg">
              Explore how we can empower your organization to assess, defend,
              and secure your digital assets with the same level of security as
              industry leaders. Contact us today to learn more about our
              tailored cybersecurity services and discover how ArmourIQ can be
              your trusted partner in safeguarding your digital future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
