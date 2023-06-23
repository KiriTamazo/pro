import React from "react";
import Typist from "react-text-typist";
import { motion } from "framer-motion";
import SocialMediaIcons from "../../components/SocialMediaIcons";
import { Link } from "react-scroll";
import { FaDownload } from "react-icons/fa";
const Landing = ({ setSelectedPage }) => {
  return (
    <div className="container md:h-full overflow-hidden">
      <section
        id="home"
        className="md:flex md:justify-between md:items-center  md:h-full gap-16 py-10 "
      >
        {/* Image Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:order-2 flex justify-center basis-3/5 z-10 mt-16  md:mt-8"
        >
          <img
            src="image/profile-vector.png"
            className="max-w-[250px] md:max-w-[400px]  xl:max-w-[500px] max-h-[500px]"
            alt="profile"
          />
        </motion.div>
        {/* Main section */}
        <div className="z-30 basis-2/5 mt-12 md:mt:32">
          {/* Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="text-center md:text-start"> Hello There! </p>

            <p className="xl:text-6xl text-4xl font-playfair z-10 text-center md:text-start leading-[3rem]">
              I'm La Woon <br />
              <span
                className="text-yellow mt-4
            "
              >
                Htet Aung
              </span>
            </p>

            <p className="font-semibold font-opensans text-xl mt-5 mb-7  text-center md:text-start">
              I Am{" "}
              <Typist
                className="text-blue"
                typingSpeed="200"
                deletingSpeed="100"
                cursorSmooth
                sentences={[
                  "Junior React Developer",
                  " Into Front-End Development",
                ]}
              />
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row mt-5 gap-8 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ onece: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Link
              smooth={true}
              duration={500}
              className="bg-blue md:text-start text-center text-deep-blue rounded-sm py-3   px-7  font-semibold hover:scale-90 hover:text-white transition duration-500 cursor-pointer"
              to="contact"
            >
              Contact Me
            </Link>
            <a
              href="LWHA_Resume.pdf"
              target="_blank"
              download
              className="rounded-sm bg-blue py-0.5 px-0.5 hover:scale-90 transition duration-500"
            >
              <div className="bg-deep-blue hover:text-yellow transition duration-500 w-full h-full flex rounded-sm items-center justify-center font-playfair py-3 px-10">
                <FaDownload className="mr-2" /> CV
              </div>
            </a>
          </motion.div>
          <motion.div
            className="flex mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <SocialMediaIcons />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
