import BookTripCard from './BookTripCard';
import style from './bookNextTrip.module.css';
import TripToGreece from './TripToGreece';
import PaymentIcon from '../../assets/icons/PaymentIcon';
import CarIcon from '../../assets/icons/CarIcon';
import DestinationIcon from '../../assets/icons/DestinationIcon';

const BookTripList = () => {
  return (
    <section className={style.book__trip__wrapper}>
      <div className="title__wrapper">
        <label>Easy and Fast</label>
        <h2>Book your next trip in 3 easy steps</h2>
      </div>

      <section className={style.book__trip__container}>
        <TripToGreece />

        <section className={style.card__list}>
          <BookTripCard
            icon={<DestinationIcon />}
            title={'Choose Destination'}
            text={`Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Urna, tortor tempus.`}
          />

          <BookTripCard
            icon={<PaymentIcon />}
            title={'Make Payment'}
            text={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.'
            }
          />

          <BookTripCard
            icon={<CarIcon />}
            title={'Reach Airport on Selected Date'}
            text={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.'
            }
          />
        </section>
      </section>
    </section>
  );
};

export default BookTripList;
