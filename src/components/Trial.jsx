import { GrDocumentVerified } from "react-icons/gr";

const Trail = () => {
  return (
    <div className="bg-innovation bg-cover bg-center h-[350px]">
      <div className="lg:pl-[110px]">
        <div className="bg-[#000000] text-white h-[400px] w-[350px]">
          <div className="font-bold text-2xl pl-[38px] pt-[40px]  ">
            Still Confused
            <br />
            About Our
            <br />
            Features? Get A
            <br />
            Free Trial 7 Days
          </div>
          <div className="mb-[30px]">
            <div className="mb-1 ml-9 mt-4  ">
              Lorem, ipsum dolor sit amet consectetur
              <br />
              adipisicing elit.Quisquam exercitationem
            </div>
            <button className="flex flex-row font-bold bg-[#004bae] text-white p-3 ml-[38px] mt-5">
              <GrDocumentVerified className="mt-1 mr-2" /> GET FREE TRIAL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trail;
