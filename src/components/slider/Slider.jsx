import style from './slider.module.css';
import SliderCard from './SliderCard';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { MdKeyboardArrowUp } from 'react-icons/md';

const Slider = () => {
  const slides = [1, 2, 3, 4, 5];

  return (
    <section className={style.slider__container}>
      <div className={style.slider__wrapper}>
        <SliderCard />
      </div>

      <div className={style.slider_control}>
        <MdKeyboardArrowUp />
        <MdKeyboardArrowDown />
      </div>
    </section>
  );
};

export default Slider;
