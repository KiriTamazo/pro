import { links } from "../../data/data";
import Link from "./Link";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Sidebar = ({
  setIsMenuToggle,
  isMenuToggle,
  setSelectedPage,
  selectedPage,
}) => {
  return (
    <motion.aside
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
      variants={{
        hidden: { opacity: 0, x: 100 },
        visible: {
          opacity: 1,
          x: 0,
        },
        exit: { opacity: 0, x: 100, transition: 0.9 },
      }}
      className={`bg-[#100f38] right-0 transition-all duration-[.5s] filter-none z-[1111] fixed top-0 h-full overflow-hidden w-[300px] `}
    >
      <div className="flex justify-end p-12">
        <button onClick={() => setIsMenuToggle(!isMenuToggle)}>
          <FaTimes className="text-2xl text-white" />
        </button>
      </div>
      {/* Menu item */}
      <div className="flex flex-col gap-10 ml-[33%] text-2xl text-white">
        {links.map((link, i) => (
          <Link
            activeClass="text-blue"
            sidebar
            key={i}
            page={link}
            selectedPage={selectedPage}
            setSelectedPage={selectedPage}
          />
        ))}
      </div>
    </motion.aside>
  );
};
export default Sidebar;
