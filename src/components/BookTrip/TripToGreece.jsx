import HouseIcon from '../../assets/icons/HouseIcon';
import LeafIcon from '../../assets/icons/LeafIcon';
import MapIcon from '../../assets/icons/MapIcon';
import SendIcon from '../../assets/icons/sendIcon';
import tripImg from '../../assets/tripimg.jpeg';
import tripImg2 from '../../assets/tripimg-2.jpeg';
import style from './bookNextTrip.module.css';

const TripToGreece = () => {
  return (
    <section className={style.trip_To_greece__bigcard}>
      <img src={tripImg} alt="trip to greece" />
      <p>Trip To Greece</p>
      <span>14-29 June | by Robbin joseph</span>
      <div className={style.bigcard__svg__container}>
        <div>
          <LeafIcon />
        </div>

        <div>
          <MapIcon />
        </div>

        <div>
          <SendIcon />
        </div>
      </div>

      <div className={style.bigcard__footer}>
        <HouseIcon />
        <span>24 people going</span>
      </div>

      <div className={style.trip_To_greece__smallcard}>
        <section className={style.small__card__img_container}>
          <img src={tripImg2} alt="trip to greece" />
        </section>

        <section className={style.small__card__details}>
          <span>Ongoing</span>

          <p>Trip to rome</p>

          <div className={style.smallcard_progress__bar}>
            <p>
              <span>40%</span>completed
            </p>

            <div className={style.progress_container}>
              <div className={style.progress_bar}></div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default TripToGreece;
