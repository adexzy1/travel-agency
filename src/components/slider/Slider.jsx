import style from './slider.module.css';
import SliderCard from './SliderCard';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { useState } from 'react';

const Slider = () => {
  const [slides, setSlides] = useState([1, 2, 3]);

  return (
    <section className={style.slider__container}>
      <div className={style.slider__wrapper}>
        {slides.map(() => (
          <SliderCard />
        ))}
      </div>

      <div className={style.slider_control1}>
        <MdKeyboardArrowUp />
        <MdKeyboardArrowDown />
      </div>
    </section>
  );
};

export default Slider;
