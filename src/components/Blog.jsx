import fraud from "../assets/fraud.jpg"
import attack from "../assets/cyber_attack.jpg"
import attack2 from "../assets/fraud_2.jpg"
import { FaRegCommentAlt } from "react-icons/fa";

const Blog = () => {
  const arr = [
    {
      id: 1,
      img : attack,
      title: "Top 5 Cybersecurity ThreatsDefending Against Phishing: Strategies to Protect Your Organization",
      date: "July 13 2022",
      comments: "0",
      desc: "Cyber threats are constantly evolving, and staying informed is crucial.Here are the top 5 cybersecurity threats ",
    },
    {
      id: 2,
      img : fraud,
      title: "Unlocking Potential of Cybersecurity Maturity Assessment: Enhancing Protection & Resilience",
      date: "August 21 2022",
      comments: "5",
      desc: "AI is evolving rapidly with new trends emerging every year. Stay updated with the latest developments in AI technology.",
    },
    {
      id: 3,
      img : attack2,
      title: "Advanced Endpoint Protection: Implementing Next-Generation Security Solutions for Modern Enterprises",
      date: "September 10 2022",
      comments: "2",
      desc: "Blockchain technology is set to revolutionize various industries. Learn about its future prospects and potential.",
    },
  ];

  return (
    <div className="bg-[#262626] flex flex-col items-center" id="blog">
      <h4 className="text-[#004bae] font-bold mt-[65px]">BLOG & NEWS</h4>
      <h2 className="text-white font-bold text-3xl">Latest News</h2>
      <p className="text-white mt-3 text-center">
        Stay updated with the latest cybersecurity trends, news, and expert
        insights to keep your business secure.
      </p>
      <div className="flex flex-wrap justify-center">
        {arr.map((item) => (
          <div
            key={item.id}
            className="border-[#004bae] border-[1px] m-4 w-[320px]"
          >
            <img src={item.img} className="w-[320px] h-[200px]" alt="tech" />
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
