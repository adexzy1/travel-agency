import sliderImg from '../../assets/slider-img.png';
import style from './slider.module.css';

const SliderCard = () => {
  return (
    <section className={style.slider__card__wrapper}>
      <div className={style.slidercard__img__container}>
        <img src={sliderImg} alt="slider img" />
      </div>

      <div className={style.slider__details__container}>
        <p>
          “On the Windows talking painted pasture yet its express parties use.
          Sure last upon he same as knew next. Of believed or diverted no.”
        </p>

        <strong>Mike taylor</strong>
        <span>Lahore, Pakistan</span>
      </div>
    </section>
  );
};

export default SliderCard;
