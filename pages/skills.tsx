import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "../animations";

const Skills = () => {
  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col"
    >
      <div className="px-6 py-2 text-indigo-800 ">
        {/*Languages & Tools */}
        <div className="grid gap-9 md:grid-cols-2">
          <div>
            <h5 className="my-3 text-2xl font-bold text-indigo-800 dark:text-indigo-400">
              Language & Framework
            </h5>
            <div className="my-2">
              {languages.map((language, i) => (
                <Bar value={language} key={i} />
              ))}
            </div>
          </div>
          <div>
            <h5 className="my-3 text-2xl font-bold text-indigo-800 dark:text-indigo-400">
              Tools & Softwares
            </h5>
            <div className="my-2">
              {tools.map((tool, i) => (
                <Bar value={tool} key={i} />
              ))}
            </div>
            <motion.div
              className="flex flex-col justify-between my-3 text-2xl font-bold rounded-lg shadow-2xl"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              <h1 className="flex flex-row justify-center my-3 text-indigo-800 dark:text-indigo-400">
                Communication Languages
              </h1>
              <span className="flex flex-row">
                <h1 className="mx-6 mr-12 text-xl font-bold text-purple dark:text-purple-400">
                  English
                </h1>
                <h3 className="text-lg font-normal text-purple-dark dark:text-purple-100">
                  Full Professional Proficiency
                </h3>
              </span>
              <span className="flex flex-row ">
                <h1 className="mx-6 mr-16 text-xl font-bold text-purple dark:text-purple-400">
                  Hindi
                </h1>
                <h3 className="float-right text-lg font-normal text-purple-dark dark:text-purple-100">
                  Full Professional Proficiency
                </h3>
              </span>
              <span className="flex flex-row">
                <h1 className="mx-6 mr-12 text-xl font-bold text-purple dark:text-purple-400">
                  Punjabi
                </h1>
                <h3 className="text-lg font-normal text-purple-dark dark:text-purple-100">
                  Full Professional Proficiency
                </h3>
              </span>
            </motion.div>
          </div>
        </div>

        <br />
        <br />
        <div className="flex flex-wrap ">
          <motion.div
            className="flex flex-wrap justify-center"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h5 className="flex flex-row my-3 mr-8 text-xl font-bold dark:text-indigo-400">
              Key Skills
            </h5>
            <span className="flex flex-row">
              <h2 className="flex flex-row w-1/2 p-2 pt-5 font-medium bg-purple-200 shadow-sm mr-7 rounded-xl text-purple-dark">
                Project Management
              </h2>
              <h2 className="flex flex-row w-1/3 p-2 pt-6 font-medium bg-purple-200 shadow-sm rounded-xl text-purple-dark">
                Marketing
              </h2>
            </span>
            <span className="flex flex-row p-2 rounded-lg">
              <h2 className="flex flex-row w-1/2 p-2 pt-6 mr-8 font-medium bg-purple-200 shadow-sm rounded-xl text-purple-dark">
                Communication
              </h2>
              <h2 className="flex flex-row w-1/3 p-5 font-medium bg-purple-200 shadow-sm rounded-xl text-purple-dark">
                Critical Thinking
              </h2>
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
