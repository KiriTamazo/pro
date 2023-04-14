import React from "react";
import { socialLinks } from "../data/data";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center  my-10 gap-4 md:gap-7">
      {socialLinks.map((link, i) => {
        return (
          <a
            key={i}
            href={link.to}
            className={`cursor-pointer hover:-translate-y-2 transition duration-500 text-2xl rounded-sm  p-1`}
            style={{ backgroundColor: link.color }}
            target="_blank"
          >
            {link.icon}
          </a>
        );
      })}
    </div>
  );
};

export default SocialMediaIcons;
