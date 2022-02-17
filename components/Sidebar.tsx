import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <Image
        src="/images/Profile.jpg"
        alt="avatar"
        className="mx-auto border rounded-full "
        height="128px"
        width="128px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-purple ">Abhinav</span>{" "}
        <span className="text-gray-600 dark:text-gray-200">Purohit</span>
      </h3>
      <p className="px-2 py-1 my-3 text-gray-200 bg-gray-600 rounded-full dark:bg-black-500">
        Full Stack Developer
      </p>
      {/* Resume */}
      <a
        href="/assets/Resume.pdf"
        download="Resume.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 text-gray-200 bg-gray-600 rounded-full cursor-pointer dark:bg-black-500"
      >
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
      </a>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-purple md:w-full ">
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
        className="py-4 my-5 bg-gradient-to-r from-purple to-purple-dark dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" />{" "}
          <span className="text-pink-200">Chandigarh,India </span>
        </div>
        <p className="my-2 text-pink-200"> purohitabhinav01@gmail.com </p>
        <p className="my-2 text-pink-200"> 8725855528 </p>
      </div>

      {/* Email Button */}

      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-purple to-purple-dark hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:purohitabhinav01@gmail.com")}
      >
        Email me
      </button>
      {/* <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-purple to-purple-dark focus:outline-none hover:scale-105 "
      > */}
        {/* //TODO remove bg black */}
        {/* Change Theme */}
      {/* </button> */}
    </>
  );
};

export default Sidebar;
