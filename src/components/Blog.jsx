import tech from "../assets/tech.jpg";
import { FaRegCommentAlt } from "react-icons/fa";

const Blog = () => {
  const arr = [
    { id: 1, title: "Top 5 Cybersecurity Threats", date: "July 13 2022", comments: "0", desc: "Lorem ipsum dolor sit amet consectetur, Repellat commodi consequuntur esse pos. Necessitatibus, modi sequi?" },
    { id: 2, title: "Emerging Trends in AI", date: "August 21 2022", comments: "5", desc: "AI is evolving rapidly with new trends emerging every year. Stay updated with the latest developments in AI technology." },
    { id: 3, title: "The Future of Blockchain", date: "September 10 2022", comments: "2", desc: "Blockchain technology is set to revolutionize various industries. Learn about its future prospects and potential applications." },
  ];

  return (
    <div className="bg-[#262626] flex flex-col items-center">
      <h4 className="text-[#004bae] font-bold mt-[65px]">BLOG & NEWS</h4>
      <h2 className="text-white font-bold text-3xl">Latest News</h2>
      <p className="text-white mt-3 text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat animi
        commodi ad?
      </p>
      <div className="flex flex-wrap justify-center">
        {arr.map((item) => (
          <div key={item.id} className="border-[#004bae] border-[1px] m-4 w-[320px]">
            <img src={tech} className="w-[320px] h-[200px]" alt="tech" />
            <h2 className="ml-2 mt-2 text-[#004bae] text-xl font-bold">
              {item.title}
            </h2>
            <div className="flex flex-row items-center ml-2 mt-2 text-white">
              <div>{item.date}</div>
              <div className="flex flex-row items-center ml-auto">
                <FaRegCommentAlt className="mr-2 mt-1" />
                <div className="mr-4 ">{item.comments}</div>
              </div>
            </div>
            <p className="ml-2 text-white mt-2">{item.desc}</p>
            <h2 className="ml-2 mt-3 mb-2 text-white font-bold cursor-pointer">
              READ MORE
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
