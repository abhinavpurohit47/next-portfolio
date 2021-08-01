import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";

import { motion } from "framer-motion";
import { experiences } from "../data";
import ExperienceCard from "../components/ExperienceCard";
import { fadeInUp, routeAnimation, stagger } from "../animations";
// import { Experience } from "../types";

const About: NextPage = () => {
  // console.log(services);

  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col flex-grow px-6 pt-1 bg-gray-500 dark:bg-gray-500"
    >
      <h6 className="p-3 my-3 text-base font-medium text-gray-300 border-4 dark:bg-gray-700 rounded-2xl border-gray-50">
        I &apos;m obsessed with making things and even more obsessed with making
        things better. I love helping people with branding and marketing
        stratergy. When I &apos;m not designing, I &apos;m probably watching or playing
        cricket or messing around on something inspired by Mr.Ratan Tata.
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gray-500 dark:bg-gray-500 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide text-white">
          Experience
        </h4>

        <motion.div
          className="grid gap-6 my-3 md:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {experiences.map((experience) => (
            <motion.div
              className="col-span-2 p-2 bg-gray-100 rounded-lg dark:bg-gray-700 md:col-span-1 "
              key={experience.title}
              variants={fadeInUp}
            >
              <ExperienceCard experience={experience} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

//!called every time  the page refreshed
// export const getServerSideProps: GetServerSideProps = async (
//    context: GetServerSidePropsContext
// ) => {
//    const res = await fetch('http://localhost:3000/api/services')
//    const data = await res.json()
//    console.log(data)
//    return { props: { services: data.services } }
// }

//!called only during the build of the project
//? make sure the server(localhost:3000)[this will receive the request during build] is running on a terminal during the build
//? also need to change the localhost during the deployment | see the todo
// https://aude53.medium.com/set-environment-variables-with-next-js-and-vercel-e544c0460a48

// export const getStaticProps: GetStaticProps = async (
//    context: GetStaticPropsContext
// ) => {
//    // console.log(context);

//    const res = await fetch('http://localhost:3000/api/services')
//    const { services } = await res.json()
//    console.log({ services })
//    return { props: { services: services } }
// }

export default About;
