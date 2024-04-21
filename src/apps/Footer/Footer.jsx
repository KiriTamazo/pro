import React from "react";
import SocialMediaIcons from "../../components/SocialMediaIcons";
import useMediaQuery from "../../hooks/useMediaQuery";

const Footer = () => {
  const date = new Date();
  const isAboveSmallScreens = useMediaQuery("(min-width:840px");

  return (
    <footer
      className={`py-5 bg-white/10 ${
        isAboveSmallScreens ? "" : "mb-20"
      } dark:bg-[#100f38a6] mt-5`}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row justify-center md:justify-between gap-4 items-center text-center">
          <p className="font-playfair font-semibold text-2xl dark:text-yellow">
            LWHA
          </p>
          <p className="font-playfair text-md dark:text-yellow">
            &copy; Copy Right {date.getFullYear()} by LWHA. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
