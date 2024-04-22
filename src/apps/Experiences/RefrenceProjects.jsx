import LineGradient from "../../components/LineGradient";
import { motion, useInView } from "framer-motion";
import RefrenceCard from "./RefrenceCard";
import { projects, refrenceProjects } from "../../data/data";
import { useRef } from "react";
const itemVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    y: -50,
  },
};
const RefrenceProjects = () => {
  const ref = useRef();
  const inView = useInView(ref, {
    once: true,
  });

  return (
    <section className="mt-16">
      <motion.div
        className="md:w-2/4  mb-16 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-semibold text-4xl ">
            Re<span className="dark:text-yellow">frences </span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-[10rem]" />
          </div>
          <p className="mt-4">
            This is the list of projects that i mainly contributed
          </p>
        </div>
      </motion.div>
      {/* Refrence Projects */}
      <motion.div
        key="projects"
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 "
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
          hidden: {
            opacity: 0,
          },
        }}
      >
        {refrenceProjects.map((project, i) => (
          <motion.div
            className="mx-auto w-full min-h-[22.5rem]"
            key={i}
            variants={itemVariants}
          >
            <RefrenceCard key={i} project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
export default RefrenceProjects;
