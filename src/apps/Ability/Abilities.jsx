import { useRef } from "react";
import LineGradient from "../../components/LineGradient";
import { ablilities } from "../../data/data";
import { motion, useInView } from "framer-motion";
const Abilities = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });
  return (
    <div className="container h-auto pt-24">
      <section id="abilities" className="pt-10 pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex justify-center flex-col items-center"
        >
          <h1 className="font-playfair  font-semibold text-4xl mb-5">
            My <span className="text-red"> Abilitities</span>
          </h1>
          <LineGradient width="w-[13rem]" />
        </motion.div>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid grid-cols-2  sm:grid-cols-3 justify-center md:grid-cols-5 xl:grid:cols-9 gap-4 mt-16 bg-indigo-500/20 rounded w-full h-full px-6  py-6 max-w-[1200px] mx-auto"
        >
          {ablilities.map((item, i) => (
            <motion.div
              key={i}
              transition={{ duration: 0.2 }}
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              className="bg-indigo-500/40 md:min-w-[150px] md:w-full md:px-4 md:mx-auto h-24 gap-2 rounded flex items-center justify-center flex-col "
            >
              {item.icon}
              <p className="text-xl"> {item.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};
export default Abilities;
