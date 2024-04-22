import { motion } from "framer-motion";
import LineGradient from "../../components/LineGradient";
import Timeline from "./Timeline";
import RefrenceProjects from "./RefrenceProjects";
const Experiences = () => {
  return (
    <div className="container mx-auto">
      <section id="experiences" className="md:h-auto py-10">
        {/* <div className="gap-16"> */}
        <motion.div
          className="md:w-2/4 mb-16 mx-auto text-center"
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
              My <span className="dark:text-yellow">Experiences</span>
            </p>
            <div className="flex justify-center mt-5">
              <LineGradient width="w-[14rem]" />
            </div>
          </div>
        </motion.div>
        <Timeline />
        <RefrenceProjects />
        {/* </div> */}
      </section>
    </div>
  );
};
export default Experiences;
