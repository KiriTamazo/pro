import React from "react";

const LineGradient = ({ width = "w-full", className }) => {
  return (
    <div
      className={`h-[.22rem] rounded ${width} bg-blue dark:bg-gradient-rainblue ${className}`}
    ></div>
  );
};

export default LineGradient;
