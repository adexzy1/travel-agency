import style from './bookNextTrip.module.css';

const BookTripCard = ({ icon, title, text }) => {
  return (
    <section className={style.card__wrapper}>
      <div>
        <img src={icon} alt={title} />
      </div>

      <div>
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
    </section>
  );
};

export default BookTripCard;
