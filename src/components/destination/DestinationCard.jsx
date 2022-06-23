import { TiLocationArrow } from 'react-icons/ti';
import style from './destination.module.css';

const DestinationCard = ({ img, location, price, trip }) => {
  return (
    <section className={style.destination__card__wrapper}>
      <div>
        <img src={img} alt={location} />
      </div>
      <div className={style.destination__card__details}>
        <section>
          <p>{location}</p>
          <p>${price}K</p>
        </section>

        <div>
          <TiLocationArrow />
          {trip}
        </div>
      </div>
    </section>
  );
};

export default DestinationCard;
