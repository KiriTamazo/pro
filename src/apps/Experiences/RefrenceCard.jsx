import { TbArrowUpRight } from "react-icons/tb";

const RefrenceCard = ({ project }) => {
  return (
    <a target="_blank" href={project.url} className="bg-slate-100 group shadow-sm hover:scale-105 transition-all duration-300 ease-linear cursor-pointer flex flex-col dark:bg-indigo-500/20 max-w-[22rem] min-h-[22rem] md:min-h-[23.5rem] lg:min-h-[22rem] p-2 rounded-md mx-auto ">
      <img
        className="rounded-md min-w-[10rem] w-full h-[10rem] object-fill"
        src={project?.img}
        alt=""
      />
      <div className="mt-4 flex flex-col flex-1 mb-2 px-2 space-y-3">
        <h4 className="text-[1.1rem] group-hover:text-blue transition-all duration-300 ease-linear font-medium">
          {project.title}{" "}
          <TbArrowUpRight className="inline-block -translate-y-[.15rem]" />
        </h4>
        <p className="text-sm flex-1 leading-6 tracking-wide mb-4">
          {project.desc}
        </p>
      </div>
      <div className="flex justify-start gap-3 mb-2 px-2">
        {project.techstacks.map(({ title, backgroundColor, color }) => (
          <span
            style={{ backgroundColor, color }}
            className="capitalize rounded w-fit px-2 p-1 bg-opacity-20 backdrop-blur-md"
          >
            {title}
          </span>
        ))}
      </div>
    </a>
  );
};
export default RefrenceCard;
