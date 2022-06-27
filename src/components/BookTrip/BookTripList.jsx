import BookTripCard from './BookTripCard';
import style from './bookNextTrip.module.css';
import TripToGreece from './TripToGreece';
import PaymentIcon from '../../assets/icons/PaymentIcon';
import CarIcon from '../../assets/icons/CarIcon';
import DestinationIcon from '../../assets/icons/DestinationIcon';

const BookTripList = () => {
  return (
    <section className={style.book__trip__wrapper}>
      <TripToGreece />

      <section className={style.card__list}>
        <div className="title__wrapper">
          <label>Easy and Fast</label>
          <h2>
            Book Your Next Trip <br /> In 3 Easy Steps
          </h2>
        </div>

        <BookTripCard>
          <DestinationIcon />
          <div>
            <h5>Choose Destination</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Urna, tortor tempus.
            </p>
          </div>
        </BookTripCard>

        <BookTripCard>
          <PaymentIcon />

          <div>
            <h5>Make Payment</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Urna, tortor tempus.
            </p>
          </div>
        </BookTripCard>

        <BookTripCard>
          <CarIcon />

          <div>
            <h5>Reach Airport on Selected Date</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Urna, tortor tempus.
            </p>
          </div>
        </BookTripCard>
      </section>
    </section>
  );
};

export default BookTripList;
