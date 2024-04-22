import { FaBriefcase } from "react-icons/fa";
const TimelineCard = ({ timeline }) => {
  return (
    <div className="relative gap-4 md:gap-0 flex flex-col xs:flex-row items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
      <div className="flex items-center justify-center w-10 h-10 rounded-full group-[.is-active]:bg-blue text-slate-500 group-[.is-active]:text-white shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ">
        <FaBriefcase />
      </div>
      <div className="w-full md:w-[calc(50%-2.5rem)] bg-slate-50  dark:bg-indigo-500/40 p-6 rounded shadow">
        <div className="flex flex-col xs:flex-row items-start xs:items-center xs:justify-between xs:space-x-2 mb-1">
          <p className="font-semibold  dark:text-slate-300 text-xl">
            {timeline?.companyName}
          </p>
          <time className="font-caveat font-medium dark:text-yellow">
            {timeline?.period}
          </time>
        </div>
        <p className="mt-6 leading-7 dark:text-slate-200">
          {timeline?.experience}
        </p>
      </div>
    </div>
  );
};
export default TimelineCard;
