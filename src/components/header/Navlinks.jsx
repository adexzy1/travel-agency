const Navlinks = ({ text, link }) => {
  return (
    <li className="nav__links">
      <a href={link}>{text}</a>
    </li>
  );
};

export default Navlinks;
