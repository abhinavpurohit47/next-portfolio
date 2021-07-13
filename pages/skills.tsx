import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Skills = () => {
  return (
    <div className="flex flex-col">
      <div className="px-6 py-2 text-indigo-800">
        {/*Languages & Tools */}
        <div className="grid gap-9 md:grid-cols-2">
          <div>
            <h5 className="my-3 text-2xl font-bold text-indigo-800">
              Language & Framework
            </h5>
            <div className="my-2">
              {languages.map((language, i) => (
                <Bar value={language} key={i} />
              ))}
            </div>
          </div>
          <div>
            <h5 className="my-3 text-2xl font-bold text-indigo-800">
              Tools & Softwares
            </h5>
            <div className="my-2">
              {tools.map((tool, i) => (
                <Bar value={tool} key={i} />
              ))}
            </div>
            <div className="flex flex-col">
              <h5 className="flex flex-row my-3 text-xl font-bold">
                Key Skills
              </h5>
              <span className="flex flex-row">
                <h2 className="flex flex-row w-1/2 p-2 mr-6 font-medium bg-purple-200 shadow-sm rounded-xl text-purple-dark">
                  • Project Management
                </h2>
                <h2 className="flex flex-row w-1/3 p-2 font-medium bg-purple-200 shadow-sm rounded-xl text-purple-dark">
                  • Marketing
                </h2>
              </span>
              <span className="flex flex-row p-3 rounded-lg">
                <h2 className="flex flex-row w-1/2 p-2 mr-6 font-medium bg-purple-200 shadow-sm rounded-xl text-purple-dark">
                  • Communication
                </h2>
                <h2 className="flex flex-row w-1/3 p-2 font-medium bg-purple-200 shadow-sm rounded-xl text-purple-dark">
                  • Critical Thinking
                </h2>
              </span>
            </div>
            <div className="flex flex-col justify-between my-3 text-2xl font-bold rounded-lg shadow-2xl">
              <h1 className="flex flex-row justify-center my-3 text-indigo-800">
                Communication Languages
              </h1>
              <span className="flex flex-row">
                <h1 className="mx-6 mr-12 text-xl font-bold text-purple">
                  English
                </h1>
                <h3 className="text-lg font-normal text-purple-dark">
                  Full Professional Proficiency
                </h3>
              </span>
              <span className="flex flex-row ">
                <h1 className="mx-6 mr-16 text-xl font-bold text-purple ">
                  Hindi
                </h1>
                <h3 className="float-right text-lg font-normal text-purple-dark">
                  Full Professional Proficiency
                </h3>
              </span>
              <span className="flex flex-row">
                <h1 className="mx-6 mr-12 text-xl font-bold text-purple">
                  Punjabi
                </h1>
                <h3 className="text-lg font-normal text-purple-dark">
                  Full Professional Proficiency
                </h3>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
