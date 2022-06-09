import style from './header.module.css';
import logo from '../../assets/Logo.svg';
import Navlinks from './Navlinks';
import { CgMenuGridR } from 'react-icons/cg';
import { useState } from 'react';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className={style.wrapper}>
      <section className={style.logo}>
        <img src={logo} alt="logo" />
      </section>

      <section
        onClick={() => setToggle((prev) => !prev)}
        className={style.navIcon}
      >
        <CgMenuGridR />
      </section>

      <nav className={`${style.nav} ${toggle && style.toggle}`}>
        <ul>
          <Navlinks text={'Desitnations'} link={'#'} />
          <Navlinks text={'Hotels'} link={'#'} />
          <Navlinks text={'Flights'} link={'#'} />
          <Navlinks text={'Bookings'} link={'#'} />
        </ul>

        <section className={style.BtnContainer}>
          <Navlinks text={'Login'} link={'#'} />
          <button>Sign up</button>
          <select name="language">
            <option value="EN">EN</option>
            <option value="GB">GB</option>
          </select>
        </section>
      </nav>
    </header>
  );
};

export default Header;
