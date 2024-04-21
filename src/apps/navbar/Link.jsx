import { Link as Links } from "react-scroll";
const Link = ({
  page,
  selectedPage,
  setSelectedPage,
  activeClass = "text-blue",
  sidebar,
}) => {
  const lowerCasePage = page?.toLowerCase();

  return (
    <>
      <Links
        spy={true}
        smooth={true}
        offset={-300}
        duration={500}
        activeClass={activeClass}
        onSetActive={(data) => setSelectedPage(data)}
        className={`${selectedPage === lowerCasePage ? "text-blue" : ""}
          hover:text-blue ${
            sidebar && "hover:text-blue"
          } transition-all duration-500 cursor-pointer text-xl
          `}
        to={`${lowerCasePage}`}
      >
        {page}
      </Links>
    </>
  );
};
export default Link;
