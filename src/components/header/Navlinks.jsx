import style from './header.module.css';

const Navlinks = ({ text, link }) => {
  return (
    <li className={style.nav__links}>
      <a href={link}>{text}</a>
    </li>
  );
};

export default Navlinks;
