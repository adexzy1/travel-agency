import Slider from '../slider/Slider';
import style from './testimonial.module.css';

const Testimonial = () => {
  return (
    <section className={style.testimonial__wrapper}>
      <div>
        <section className="title__wrapper">
          <label>Testimonials</label>
          <h2>
            What People Say <br /> About Us.
          </h2>
        </section>

        <div className={style.slider__control2}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <Slider />
    </section>
  );
};

export default Testimonial;
