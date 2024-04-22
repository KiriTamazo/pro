import useMediaQuery from "../../hooks/useMediaQuery";
import { motion } from "framer-motion";
import LineGradient from "../../components/LineGradient";

const MySkills = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  return (
    <div className="container md:h-auto overflow-hidden">
      <section id="about me" className="py-10">
        <div className="md:flex-row flex flex-col items-center md:justify-between justify-center md:gap-16  ">
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
            <p className=" text-center md:text-start  font-semibold text-4xl mb-5">
              About <span className="dark:text-yellow">Me</span>
            </p>
            <LineGradient className="mx-auto md:mx-0" width="w-[10rem]" />
            <p className="mt-10 mb-7 leading-7 tracking-wide">
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
      </section>
    </div>
  );
};
export default MySkills;
