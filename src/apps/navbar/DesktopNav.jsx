import { links } from "../../data/data";
import Link from "./Link";

const DesktopNav = ({ selectedPage, setSelectedPage }) => {
  return (
    <div className="flex justify-between  sm:gap-6 md:gap-10 font-poppins text-sm font-medium">
      {links.map((link, i) => (
        <Link
          key={i}
          page={link}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      ))}
    </div>
  );
};
export default DesktopNav;
