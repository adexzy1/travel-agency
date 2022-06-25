import Slider from '../slider/Slider';
import style from './testimonial.module.css';

const Testimonial = () => {
  return (
    <section className={style.testimonial__wrapper}>
      <section className="title__wrapper">
        <label>Testimonials</label>
        <h2>What people say about Us.</h2>
      </section>

      <div>
        <Slider />
      </div>
    </section>
  );
};

export default Testimonial;
