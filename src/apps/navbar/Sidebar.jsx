import { useEffect, useState } from "react";
import { links, mobileNavIcons } from "../../data/data";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-scroll";

const Sidebar = ({ setSelectedPage, selectedPage }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const about = document.getElementById("about me");
      if (window.scrollY > about.offsetHeight / 2) {
        setShowMobileNav(true);
      } else {
        setShowMobileNav(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <AnimatePresence>
      <motion.nav
        initial="hidden"
        animate={showMobileNav ? "animate" : "hidden"}
        exit="hidden"
        variants={{
          hidden: { y: 100, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          exit: { y: 100, opacity: 0 },
        }}
        transition={{ duration: 0.5 }}
        className="fixed w-full px-1 mx-auto py-2 z-[50] bottom-0 left-0 right-0 text-slate-700 bg-slate-200/40 flex items-center justify-evenly backdrop-filter backdrop-blur-lg bg-opacity-10 "
      >
        {links.map((link, i) => {
          const selected = selectedPage === link.toLowerCase();
          return (
            <Link
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              activeClass={"text-deep-blue"}
              onSetActive={(data) => setSelectedPage(data)}
              className={` ${selected ? "text-blue" : ""}
              transition-all duration-500 cursor-pointer text-xl
            `}
              to={`${link.toLowerCase()}`}
              key={link}
            >
              <div
                key={link}
                className="flex-col flex items-center justify-center"
              >
                <span
                  className={`${
                    selected
                      ? "bg-blue/80 [&>svg]:text-slate-700 rounded-full "
                      : ""
                  } w-full min-w-[50px]  py-1 flex items-center justify-center transition-all duration-300 ease-linear`}
                >
                  {mobileNavIcons[i]}
                </span>
                <p
                  className={`${
                    selected
                      ? "not-sr-only opacity-1 translate-y-0"
                      : "sr-only opacity-0 translate-y-5"
                  } font-medium text-[.5rem] transition-all duration-300 ease-linear`}
                >
                  {link}
                </p>
              </div>
            </Link>
          );
        })}
      </motion.nav>
    </AnimatePresence>
    // <aside
    //   className={`fixed right-0 top-0 h-full w-[300px] ${
    //     isMenuToggle === true ? "translate-x-[0]" : "translate-x-[100%]"
    //   } bg-[#100f38] transition-all duration-500 filter-none z-[1111]`}
    // >
    //   <div className="flex justify-end p-12">
    //     <button onClick={() => setIsMenuToggle(!isMenuToggle)}>
    //       <FaTimes className="text-2xl text-white" />
    //     </button>
    //   </div>
    //   {/* Menu item */}
    //   <div className="flex flex-col gap-10 ml-[33%] text-2xl text-white">
    //     {links.map((link, i) => (
    //       <Link
    //         activeClass="text-blue"
    //         sidebar
    //         key={i}
    //         page={link}
    //         selectedPage={selectedPage}
    //         setSelectedPage={selectedPage}
    //       />
    //     ))}
    //   </div>
    // </aside>
  );
};
export default Sidebar;
