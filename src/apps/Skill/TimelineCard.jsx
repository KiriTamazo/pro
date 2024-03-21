import { FaBriefcase } from "react-icons/fa";

const TimelineCard = ({ timeline }) => {
  return (
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
      <div className="flex items-center justify-center w-10 h-10 rounded-full group-[.is-active]:bg-blue text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        <FaBriefcase />
      </div>
      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-indigo-500/40 p-6 rounded shadow">
        <div className="flex items-center justify-between space-x-2 mb-1">
          <p className="font-semibold text-slate-300 text-xl">
            {timeline?.companyName}
          </p>
          <time className="font-caveat font-medium text-yellow">
            {timeline?.period}
          </time>
        </div>
        <p className="mt-4 text-slate-200">{timeline?.experience}</p>
      </div>
    </div>
  );
};
export default TimelineCard;
