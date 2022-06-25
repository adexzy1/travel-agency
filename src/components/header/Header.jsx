import style from './header.module.css';
import Navlinks from './Navlinks';
import { CgMenuGridR } from 'react-icons/cg';
import { useState } from 'react';
import Logo from '../../assets/icons/Logo';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className={style.header__wrapper}>
      <section className={style.logo__container}>
        <Logo />
      </section>

      <section
        onClick={() => setToggle((prev) => !prev)}
        className={style.nav__icon}
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

        <section className={style.Btn__container}>
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
