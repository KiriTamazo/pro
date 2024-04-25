import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import LineGradient from "../../components/LineGradient";
import { projects } from "../../data/data";
import ProjectCard from "./ProjectCard";
const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
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
const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "0px 100px -50px 0px",
  });
  // const itemVariants = {
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.5,
  //     },
  //   },
  //   hidden: {
  //     opacity: 0,
  //     y: -50,
  //   },
  // };
  return (
    <section id="projects" className="container h-auto py-10">
      {/* Headings */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
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
            <span className="dark:text-yellow">Pro</span>jects
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-[10rem]" />
          </div>
        </div>
        <p className="mt-10 mb-20">Some of my mini projects are here</p>
      </motion.div>
      {/* Projects */}
      <div className="flex justify-center ">
        <motion.div
          key="projects"
          className="grid md:grid-cols-2  gap-4 lg:gap-8"
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
          {projects.map((project, i) => (
            <motion.div key={i} variants={itemVariants}>
              <ProjectCard key={i} project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Projects;
