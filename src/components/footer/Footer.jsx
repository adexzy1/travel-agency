import Navlinks from '../header/Navlinks';
import style from './footer.module.css';
import { TiSocialFacebook } from 'react-icons/ti';
import { TiSocialTwitter } from 'react-icons/ti';
import { IoLogoInstagram } from 'react-icons/io';
import PlaystoreLogo from '../../assets/icons/PlaystoreLogo';
import AppleLogo from '../../assets/icons/AppleLogo';

const Footer = () => {
  return (
    <footer>
      <section>
        <div className={style.footer__logo__container}>
          <h2>Jadoo.</h2>
          <p>Book your trip in minute, get full Control for much longer.</p>
        </div>

        <div className={style.quick__links}>
          <h5>Company</h5>

          <ul>
            <Navlinks text={'About'} />
            <Navlinks text={'Careers'} />
            <Navlinks text={'Mobile'} />
          </ul>
        </div>

        <div className={style.quick__links}>
          <h5>Contact</h5>

          <ul>
            <Navlinks text={'Help/Faq'} />
            <Navlinks text={'Press'} />
            <Navlinks text={'Affiliates'} />
          </ul>
        </div>

        <div className={style.quick__links}>
          <h5>More</h5>

          <ul>
            <Navlinks text={'Airlinefees'} />
            <Navlinks text={'Airline'} />
            <Navlinks text={'Low fare tips'} />
          </ul>
        </div>

        <div className={style.quick__links}>
          <div className={style.socials}>
            <div>
              <TiSocialFacebook />
            </div>

            <div>
              <IoLogoInstagram />
            </div>

            <div>
              <TiSocialTwitter />
            </div>
          </div>

          <section className={style.disover__our__app}>
            <h4>Discover Our App</h4>

            <div className={style.download__app}>
              <div>
                <PlaystoreLogo />
                <p>
                  <strong>Get IT ON</strong>
                  Google Play
                </p>
              </div>

              <div>
                <AppleLogo />
                <p>
                  <strong>Available on the</strong>
                  Apple Store
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className={style.subfooter}>
        <p>All rights reserved@jadoo.co</p>
      </section>
    </footer>
  );
};

export default Footer;
