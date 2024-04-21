const RefrenceCard = ({ project }) => {
  return (
    <div className="bg-slate-100 max-w-[20rem] min-h-[20rem] p-2 rounded-md dark:bg-deep-blue/80 ">
      <img
        className="rounded-md min-w-[10rem] w-full h-[10rem] object-fill"
        src={project?.img}
        alt=""
      />
      <div className="mt-4 mb-2 px-1 space-y-3">
        <h4 className="text-[1.2rem] font-medium">Header</h4>
        <p className="text-sm leading-6 tracking-wide">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus ratione dolorum, reiciendis minima velit sint sequi
          sunt cupiditate nulla. Tempora!
        </p>
        <a
          href=""
          target="_blank"
          className="bg-blue px-2 py-1 block text-center rounded text-slate-100 w-full"
        >
          Go To Website
        </a>
      </div>
    </div>
  );
};
export default RefrenceCard;
