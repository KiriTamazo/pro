const Badge = ({ backgroundColor, color, title, className }) => {
  return (
    <span
      style={{ backgroundColor, color }}
      className={`capitalize rounded w-fit px-2 p-1 bg-opacity-20 backdrop-blur-md ${className}`}
    >
      {title}
    </span>
  );
};
export default Badge;
