import style from './category.module.css';
import CategoryCard from './CategoryCard';
import weather from '../../assets/icons/weather.svg';
import flight from '../../assets/icons/flight.svg';
import mic from '../../assets/icons/mic.svg';
import settings from '../../assets/icons/settings.svg';

const Category = () => {
  return (
    <section className={style.category__wrapper}>
      <div className="title__wrapper">
        <label>CATEGORY</label>
        <h2>We Offer Best Services</h2>
      </div>

      <div className={style.category__list}>
        <CategoryCard
          icon={weather}
          label={'Calculated Weather'}
          text={'Built Wicket longer admire do barton vanity itself do in it.'}
        />

        <CategoryCard
          icon={flight}
          label={'Best Flights'}
          text={'Engrossed listening. Park gate sell they west hard for the.'}
        />

        <CategoryCard
          icon={mic}
          label={'Local Events'}
          text={
            'Barton vanity itself do in it. Preferd to men it engrossed listening. '
          }
        />

        <CategoryCard
          icon={settings}
          label={'Customization'}
          text={
            'We deliver outsourced aviation services for military customers'
          }
        />
      </div>
    </section>
  );
};

export default Category;
