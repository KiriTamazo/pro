import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { motion } from "framer-motion";
import LineGradient from "../../components/LineGradient";
import Timeline from "./Timeline";

const MySkills = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  return (
    <div className="container md:h-auto overflow-hidden">
      <section id="about me" className="pt-10 pb-24">
        <div className="md:flex-row flex flex-col items-center md:justify-between justify-center md:gap-16 mt-32 ">
          <motion.div
            className="md:w-1/3 flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5, once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <p className="font-playfair  font-semibold text-4xl mb-5">
              About <span className="text-red">Me</span>
            </p>
            <LineGradient width="w-[10rem]" />
            <p className="mt-10 mb-7 ">
              I am seeking an opportunity to extend my web development and
              design skills and knowledge, particularly in the Front-End field,
              with the goal of becoming a Junior React Front-End Developer. I am
              passionate about creating user-friendly and interactive web
              applications, and I have a strong understanding of HTML, CSS,
              JavaScript, React, and Redux. Additionally, I am familiar with
              other libraries such as Tailwind CSS, Bootstrap, and MUI. I am
              confident that I can make a valuable contribution to the success
              of your organization.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5, once: true }}
            transition={{ duration: 0.75 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-16 md:mt-0 pl-2"
          >
            {isAboveMediumScreen ? (
              <div className=" relative z-0 ">
                <img
                  src="./image/profile.png"
                  alt="skills"
                  className="z-10 bg-blue xl:max-w-[500px] sm:max-w-[400px] md:max-w-[420px] rounded-md"
                />
              </div>
            ) : (
              <img
                src="./image/main.png"
                alt="profile"
                className=" transition duration-500 z-10 w-full max-w-[400px] md:max-w-[450px]  rounded-t-[400px] "
              />
            )}
          </motion.div>
        </div>

        {/* Skills */}
        <div className="mt-16 gap-16 md:gap-32">
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
              <p className="font-playfair font-semibold text-4xl ">
                My <span className="text-red">Experiences</span>
              </p>
              <div className="flex justify-center mt-5">
                <LineGradient width="w-[14rem]" />
              </div>
            </div>
          </motion.div>

          <Timeline />
          {/* Experiences */}
          {/* <motion.div
            className=" mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5, once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative h-32">
              <div className=" z-10 md:block flex flex-col justify-center items-center h-full cursor-pointer">
                <p className="font-playfair font-semibold font-5xl">01</p>
                <p className="font-playfair font-semibold font-3xl md:mt-5">
                  NGS Dashboard
                </p>
              </div>
              <div className="rounded w-full md:w-3/4 h-full bg-blue absolute right-0 top-0 z-[-1]">
                <img
                  className="rounded w-full h-full max-h-full md:max-h-max brightness-50 object-cover"
                  src="./image/ngs-dashboard.png"
                  alt="ngs-dashboard"
                />
              </div>
            </div>
            <p className="mt-5">
              I helped develop the NGS group's dashboard by creating
              visualizations and coding. I also provided feedback and
              suggestions to improve the dashboard.
            </p>
          </motion.div> */}
          {/* Innovative */}
          {/* <motion.div
            className=" mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5, once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative h-32">
              <div className="z-10 md:block flex flex-col justify-center items-center h-full cursor-pointer">
                <p className="font-playfair font-semibold font-5xl">02</p>
                <p className="font-playfair font-semibold font-3xl md:mt-3">
                  Shwe Real Estate
                </p>
              </div>
              <div className=" rounded w-full md:w-3/4 h-full bg-red absolute right-0 top-0 z-[-1]">
                <img
                  src="./image/shwe-real-estate.png"
                  className="brightness-50 rounded w-full h-full md:max-h-max max-h-full brightness object-cover"
                  alt=""
                />
              </div>
            </div>
            <p className="mt-5">
              I designed and implemented essential layout components, such as
              the navbar, sidebar, header, breadcrumb, and footer, for both the
              Shwe Real Estate website and dashboard. My contributions improved
              the website's functionality and user experience through visually
              appealing and user-friendly designs
            </p>
          </motion.div> */}
          {/* Imaginative */}
        </div>
      </section>
    </div>
  );
};

export default MySkills;
