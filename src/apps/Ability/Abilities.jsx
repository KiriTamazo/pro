import LineGradient from "../../components/LineGradient";
import { ablilities } from "../../data/data";
import { motion } from "framer-motion";

const Abilities = () => {
  return (
    <div className="container h-auto pt-24">
      <section id="abilities" className="pt-10 pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
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
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="grid grid-cols-2  sm:grid-cols-3 justify-center md:grid-cols-5  xl:grid:cols-9 gap-4 mt-16 bg-indigo-500/20 rounded w-full h-full py-4 px-4 max-w-[1200px] mx-auto"
        >
          {ablilities.map((item, i) => (
            <div
              key={i}
              className="bg-indigo-500/40 md:min-w-[150px] md:px-4 md:mx-auto h-24 gap-2 rounded flex items-center justify-center flex-col "
            >
              {" "}
              {item.icon}
              <p className="text-xl"> {item.title}</p>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};
export default Abilities;
