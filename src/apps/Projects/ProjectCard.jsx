import { FaCode, FaEye } from "react-icons/fa";
const ProjectCard = ({ project }) => {
  const { title, img, url, desc } = project;
  return (
    <div className="relative group  transition duration-500 ease-in-out  rounded-lg overflow-hidden">
      <img className="w-96 h-80 object-cover" src={img} alt={title} />
      <div
        className="absolute  z-20 right-0 left-0 bottom-0  text-slate-900 translate-y-0 h-[45px] group-hover:-translate-y-52 xs:group-hover:-translate-y-48
      transition duration-500 ease-in-out   "
      >
        <p className="bg-indigo-500 text-white text-xl font-semibold py-2 px-2 ">
          {title}
        </p>
        <div className="bg-slate-900/90 flex items-center justify-start flex-col gap-4 group-hover:min-h-[350px] xs:group-hover:min-h-[300px]  text-white pt-4 pb-8 px-2 sm:px-4">
          <p>{desc}</p>

          <div className="w-[100%] h-[100%] gap-2 flex  justify-between md:gap-5 items-center">
            <a
              rel="noreferrer"
              href={url[0]}
              target="_blank"
              className="flex items-center gap-2 px-8 md:px-8 py-3 cursor-pointer bg-indigo-500 rounded-md  text-white"
            >
              <FaEye />
              <p className="hidden xs:block"> View</p>
            </a>
            <a
              rel="noreferrer"
              href={url[1]}
              target="_blank"
              className="flex items-center gap-2 px-8 md:px-8 py-3 cursor-pointer bg-indigo-500 rounded-md  text-white"
            >
              <FaCode />
              <p className="hidden xs:block"> Code</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
