import style from './bookNextTrip.module.css';

const BookTripCard = ({ children }) => {
  return <section className={style.card__wrapper}>{children}</section>;
};

export default BookTripCard;
