import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";

const Sidebar = () => {
  return (
    <>
      <img
        src="https://www.flickr.com/photos/193398002@N06/51288197164/in/dateposted-public/"
        alt="avatar"
        className="w-32 h-32 mx-auto border rounded-full "
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green-400 ">Abhinav</span> Purohit
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-black-500">
        Web Developer
      </p>
      {/* Resume */}
      <a
        href="/assets/Abhinav's Resume.pdf"
        download="Abhinav's Resume.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-black-500"
      >
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
      </a>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full ">
        <a href="https://www.instagram.com/purohit.abhinav01/">
          <AiFillInstagram className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/abhinav-ap047/">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.github.com/abhinavpurohit47">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Chandigarh,India </span>
        </div>
        <p className="my-2 "> purohitabhinav01@gmail.com </p>
        <p className="my-2"> 8725855528 </p>
      </div>

      {/* Email Button */}

      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:purohitabhinav01@gmail.com")}
      >
        Email me
      </button>
      <button
        onClick={() => {}}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 "
      >
        {/* //TODO remove bg black */}
        Change Theme
      </button>
    </>
  );
};

export default Sidebar;
