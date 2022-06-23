import style from './destination.module.css';
import DestinationCard from './DestinationCard';
import Paris from '../../assets/paris.png';
import london from '../../assets/london.png';
import europe from '../../assets/europe.png';

const DestinationList = () => {
  return (
    <section className={style.destination__list__wrapper}>
      <div className="title__wrapper">
        <label>TOP SELLING</label>
        <h2>Top Destinations</h2>
      </div>

      <div className={style.destination__list__container}>
        <DestinationCard
          img={Paris}
          location={'Rome, Italty'}
          price={5.42}
          trip={'10 Days Trip'}
        />

        <DestinationCard
          img={london}
          location={'London, UK'}
          price={4.2}
          trip={'12 Days Trip'}
        />

        <DestinationCard
          img={europe}
          location={'Full Europe'}
          price={15}
          trip={'28 Days Trip'}
        />
      </div>
    </section>
  );
};

export default DestinationList;
