  import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="flex bg-[#000000] justify-center">
      <div className="flex flex-row py-6 max-lg:px-6 max-lg:gap-8 max-md:flex-col">
        <div className="lg:ml-[50px]">
          <h3 className="ml-3 mb-1 text-[#004bae] font-bold">CONTACT US</h3>
          <h2 className="ml-3 mt-1 text-white text-3xl font-bold">
            Contact Information
          </h2>
          <p className="text-white mt-3 ml-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
            <br />
            necessitatibus numquam et doloremque repellat eligendi, vero
            <br />
            perferendis magnam iusto voluptas, ullam assumenda sint!
          </p>
          <div className="flex flex-row">
            <CiLocationOn color="#004bae" className="ml-3 mt-4" size={40} />
            <div className="flex flex-col">
              <h3 className=" ml-3 mt-3 font-bold text-white">Our Location</h3>
              <h5 className="text-white ml-3">Saket Salcon, Rasvilas, Saket District 
                <br />
                Centre, Sector 6, Pushp Vihar, 
                <br />New Delhi, India - 110017</h5>
            </div>
          </div>
          <div className="flex flex-row">
            <FaPhoneVolume color="#004bae" className="ml-4 mt-5" size={28} />
            <div className="flex flex-col">
              <h3 className=" ml-5 mt-3 font-bold text-white">Our Number</h3>
              <h5 className="text-white ml-5">+91 9302864102</h5>
            </div>
          </div>
          <div className="flex flex-row">
            <MdOutlineEmail color="#004bae" className="ml-3 mt-4" size={40} />
            <div className="flex flex-col">
              <h3 className=" ml-3 mt-3 font-bold text-white">Our Mail</h3>
              <h5 className="text-white ml-3">hello@gmail.com</h5>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-white  lg:ml-[130px]">
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-3 h-[40px] border-[#004bae] border-[1px] bg-[#000000] my-3"
          />
          <div className="flex flex-row w-full gap-2">
            <input
              type="number"
              placeholder="Your Phone Number"
              className="p-3 w-[80%] text-white border-[#004bae] border-[1px] bg-[#000000]"
            />
            <input
              type="email"
              placeholder="Your Mail"
              className="text-white w-[50%] p-3 border-[#004bae] border-[1px] w-full bg-[#000000]"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className=" w-full pl-3 h-[40px] border-[#004bae] border-[1px] bg-[#000000] my-3"
          />
          <textarea
            type="text"
            placeholder="Your Message"
            className=" w-full pl-2 pt-2 h-[100px] border-[#004bae] border-[1px] bg-[#000000] my-3"
          />
          <button className="bg-[#004bae] p-3 font-bold w-full">
            SEND MAIL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
