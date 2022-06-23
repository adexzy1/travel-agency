import BookTripCard from './BookTripCard';
import style from './bookNextTrip.module.css';
import destination from '../../assets/destination.svg';
import payment from '../../assets/payment.svg';
import airport from '../../assets/airport.svg';

const BookTripList = () => {
  return (
    <section className={style.book__trip__wrapper}>
      <section className={style.book__trip__container}>
        <div className="title__wrapper">
          <label>Easy and Fast</label>
          <h2>Book your next trip in 3 easy steps</h2>
        </div>

        <section className={style.card__list}>
          <BookTripCard
            icon={destination}
            title={'Choose Destination'}
            text={`Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Urna, tortor tempus.`}
          />

          <BookTripCard
            icon={payment}
            title={'Make Payment'}
            text={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.'
            }
          />

          <BookTripCard
            icon={airport}
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
