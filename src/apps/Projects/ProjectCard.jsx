import { TbArrowUpRight } from "react-icons/tb";
import Badge from "../../components/Badge";
import { GoEye } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import { LuCode, LuCode2 } from "react-icons/lu";
const ProjectCard = ({ project }) => {
  const { title, img, url, desc } = project;
  return (
    <>
      <a
        target="_blank"
        href={url[0]}
        className="bg-slate-100 group shadow-sm hover:scale-105 transition-all duration-300 ease-linear cursor-pointer flex flex-col gap-4 dark:bg-indigo-500/20  h-fit xs:h-auto sm:max-w-[80%] md:max-w-screen-sm md:min-h-[14.5rem] p-3  lg:h-full md:p-2 rounded-md mx-auto "
      >
        <div className="flex flex-col xs:flex-row gap-2 h-full sm:gap-4">
          <div className="flex-1 relative rounded-md group/img min-w-[10rem] overflow-hidden w-full min-h-[10rem]">
            <img
              className="rounded-md group-hover/img:scale-110 transition-all duration-300 ease-linear flex-1 min-w-[10rem] w-full min-h-[10rem] object-fill"
              src={img}
              alt=""
            />
            <div className="opacity-0 rounded-md  group-hover/img:opacity-100 z-[20] transition-all duration-300 ease-linear absolute inset-0 w-full h-full bg-black/30">
              <a
                className="opacity-0 absolute top-[50%] left-[50%] group-hover/img:opacity-100 flex gap-1 items-center justify-center px-4 py-3 text-sm bg-blue text-deep-blue rounded translate-y-[-50%] translate-x-[-50%]"
                href={url[1]}
                target="_blank"
              >
                <LuCode2 className="w-5 h-5" /> Code
              </a>
              {/**/}
            </div>
          </div>
          <div className="mt-4 xs:mt-0 flex flex-col flex-1 mb-2 px-2 space-y-3">
            <h4 className="text-[1.1rem] group-hover:text-blue transition-all duration-300 ease-linear font-medium">
              {title}{" "}
              <TbArrowUpRight className="inline-block -translate-y-[.15rem]" />
            </h4>
            <p className="text-sm flex-1 leading-6 tracking-wide mb-4">
              {desc}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-start gap-3 md:mb-0  md:gap-4">
          {project.techstacks.map(({ title, backgroundColor, color }, i) => (
            <Badge
              title={title}
              key={i}
              backgroundColor={backgroundColor}
              color={color}
            />
          ))}
        </div>
      </a>
    </>
    // <div className="relative group cursor-pointer  transition duration-500 ease-in-out  rounded-lg overflow-hidden">
    //   <img className="w-96 h-80 object-cover" src={img} alt={title} />
    //   <div
    //     className="absolute  z-20 right-0 left-0 bottom-0  text-slate-900 translate-y-0 h-[44px] group-hover:-translate-y-52 xs:group-hover:-translate-y-48
    //   transition duration-500 ease-in-out   "
    //   >
    //     <p className="bg-indigo-500 text-white text-xl font-semibold py-2 px-2 ">
    //       {title}
    //     </p>
    //     <div className="bg-slate-900/90 flex items-center justify-start flex-col gap-4 xs:group-hover:min-h-[195px] h-[210px] xs:h-[195px]  text-white py-4 px-2 sm:px-4">
    //       <p className="flex-1 h-full">{desc}</p>
    //       <div className="w-[100%] h-fit gap-2 flex  justify-between md:gap-5 items-center">
    //         <a
    //           rel="noreferrer"
    //           href={url[0]}
    //           target="_blank"
    //           className="flex flex-1 justify-center items-center gap-2 px-8 md:px-8 py-3 cursor-pointer bg-yellow rounded-md  text-slate-900"
    //         >
    //           <FaEye />
    //           <p className="hidden xs:block">View</p>
    //         </a>
    //         <a
    //           rel="noreferrer"
    //           href={url[1]}
    //           target="_blank"
    //           className="flex flex-1 justify-center items-center gap-2 px-8 md:px-8 py-3 cursor-pointer bg-indigo-500 rounded-md  text-white"
    //         >
    //           <FaCode />
    //           <p className="hidden xs:block"> Code</p>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
export default ProjectCard;
