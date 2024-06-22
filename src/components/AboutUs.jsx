import security from "../assets/security.jpg";
const AboutUs = () => {
  return (
    <div className="flex flex-row bg-[#262626] items-center justify-center flex-wrap-reverse">
      <div className="flex items-center justify-center max-md:mb-4">
        <img src={security} className="sm:h-[280px] sm:w-[530px] sm:m-5 w-[90%]" />
      </div>
      <div className=" text-white m-5">
        <h5 className="font-bold text-[13px] text-[#004bae]">ABOUT US</h5>
        <p className="font-bold text-2xl">
          The Perfect Solution For All The
          <br />
          Protection Question
        </p>
        <p className="text-xs mt-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          <br />
          Dolorum placeat obcaecati recusandae necessitatibus officia
          <br />
          repellat eum odio veritatis illum labore, molestias nihil.
        </p>
        <div className="flex flex-row">
          <h4 className="pr-8 mt-5">Icon</h4>
          <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            <br />
            Quas deleniti eaque recusandae nemo alias vero vitae enim earum
            <br />
            aut corrupti.</p>
        </div>
      <button className="bg-[#004bae] text-white font-bold p-2 mt-2  text-[15px] w-30 cursor-pointer">READ MORE</button>
      </div>
    </div>
  );
};

export default AboutUs;
