const RefrenceCard = ({ project }) => {
  return (
    <div className="bg-slate-100 flex flex-col dark:bg-indigo-500/20 h-full max-w-[22rem] min-h-[20rem] p-2 rounded-md  ">
      <img
        className="rounded-md min-w-[10rem] w-full h-[10rem] object-fill"
        src={project?.img}
        alt=""
      />
      <div className="mt-4 flex flex-col flex-1 mb-2 px-1 space-y-3">
        <h4 className="text-[1.2rem] font-medium">{project.title}</h4>
        <p className="text-sm flex-1 leading-6 tracking-wide mb-4">{project.desc}</p>
        <a
          href=""
          target="_blank"
          className="bg-blue px-2  py-1 block text-center rounded text-slate-100 w-full"
        >
          Go To Website
        </a>
      </div>
    </div>
  );
};
export default RefrenceCard;
