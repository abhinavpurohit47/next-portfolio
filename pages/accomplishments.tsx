import { useState } from "react";
import AccomplishmentCard from "../components/AccomplishmentCard";
import { accomplishments as accomplishmentdata, accomplishments } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../animations";

const Accomplishments = () => {
  const [accomplishments, setAccomplishments] = useState(accomplishmentdata);
  const [active, setActive] = useState("all");
  const [showDetail, setShowDetail] = useState<number | null>(null);


  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-5 py-2 overflow-y-scroll"
      style={{ height: "65vh" }}
    >
      <motion.div
        className="relative grid grid-cols-12 gap-4 my-3 dark:text-gray-200"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {accomplishments.map((accomplishments) => (
          <motion.div
            className="col-span-12 p-2 bg-gray-400 rounded-lg dark:bg-gray-800 sm:col-span-6 lg:col-span-4 dark:text-gray-200"
            variants={fadeInUp}
            key={accomplishments.name}
          >
            <AccomplishmentCard
            accomplishments={accomplishments}
              showDetail={showDetail}
              setShowDetail={setShowDetail}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Accomplishments;
