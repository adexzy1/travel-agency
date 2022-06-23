import bgBlob from '../../assets/Decore.svg';
import heroImg from '../../assets/heroimg.svg';
import underline from '../../assets/underline.svg';
import { BiPlay } from 'react-icons/bi';
import style from './hero.module.css';

const Hero = () => {
  return (
    <section className={style.hero__wrapper}>
      <section className={style.hero__pattern_wrapper}>
        <img src={bgBlob} alt="bg" />
      </section>

      <section className={style.hero__details__container}>
        <div className={style.hero__img__wrapper}>
          <img src={heroImg} alt="hero" />
        </div>

        <div className={style.hero__details}>
          <h5>Best Destinations around the world</h5>

          <h1>
            Travel,{' '}
            <span className="underline">
              enjoy
              <img className={style.underline} src={underline} alt="undrline" />
            </span>{' '}
            and live a new and full life
          </h1>

          <p>
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>

          <div className={style.btn__container}>
            <button className={style.find__out__more}>Find out more</button>

            <>
              <button className={style.play__btn}>
                <BiPlay />
              </button>

              <span>Play Demo</span>
            </>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
