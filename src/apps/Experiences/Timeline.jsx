import { useRef } from "react";
import { experiences } from "../../data/data";
import TimelineCard from "./TimelineCard";
import { motion, useInView } from "framer-motion";
const Timeline = () => {
  const ref = useRef();
  const inView = useInView(ref, {
    once: true,
  });
  return (
    <motion.div
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: 0.4,
            // staggerChildren: 0.2
          },
        },
      }}
      className="space-y-8 relative before:absolute before:inset-0 before:ml-5 md:before:ml-auto xs:before:-translate-x-px xs:before:mr-auto md:before:translate-x-0 before:h-full xs:before:w-0.5 xs:before:bg-gradient-to-b xs:before:from-transparent xs:before:via-slate-300 before:to-transparent"
    >
      {experiences?.map((experience, i) => (
        <TimelineCard key={i} timeline={experience} />
      ))}
    </motion.div>
  );
};
export default Timeline;
