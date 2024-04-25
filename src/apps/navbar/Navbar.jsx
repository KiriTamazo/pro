import React, { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import DesktopNav from "./DesktopNav";
import MobileNavbar from "./MobileNavbar";

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggle, setIsMenuToggle] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width:840px");
  const navbarBackground = isTopOfPage
    ? ""
    : "bg-glass bg-white dark:bg-[#010026]";
  return (
    <>
      <header
        className={` ${navbarBackground}   transition-all duration-300 ease-linear  z-40 w-full fixed top-0 left-0 py-3 md:py-6`}
      >
        <nav className="container flex items-center justify-between mx-auto w-5/6">
          <h4 className="text-3xl font-bold">LWHA</h4>
          {isAboveSmallScreens ? (
            <DesktopNav
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          ) : null}
        </nav>
      </header>

      {!isAboveSmallScreens && (
        <MobileNavbar
          setIsMenuToggle={setIsMenuToggle}
          isMenuToggle={isMenuToggle}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      )}
    </>
  );
};

export default Navbar;
