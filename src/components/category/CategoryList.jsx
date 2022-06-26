import style from './category.module.css';
import CategoryCard from './CategoryCard';
import FlightIcon from '../../assets/icons/FlightIcon';
import SettingsIcon from '../../assets/icons/SettingsIcon';
import WeatherIcon from '../../assets/icons/WeatherIcon';
import MicIcon from '../../assets/icons/MicIcon';
import CategoryBgPattern from '../../assets/icons/CategoryBgPattern';

const Category = () => {
  return (
    <section className={style.category__wrapper}>
      <section className={style.catgory__bg__pattern}>
        <CategoryBgPattern />
      </section>

      <div className="title__wrapper">
        <label>CATEGORY</label>
        <h2>We Offer Best Services</h2>
      </div>

      <div className={style.category__list}>
        <CategoryCard
          icon={<WeatherIcon />}
          label={'Calculated Weather'}
          text={'Built Wicket longer admire do barton vanity itself do in it.'}
        />

        <CategoryCard
          icon={<FlightIcon />}
          label={'Best Flights'}
          text={'Engrossed listening. Park gate sell they west hard for the.'}
        />

        <CategoryCard
          icon={<MicIcon />}
          label={'Local Events'}
          text={
            'Barton vanity itself do in it. Preferd to men it engrossed listening. '
          }
        />

        <CategoryCard
          icon={<SettingsIcon />}
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
