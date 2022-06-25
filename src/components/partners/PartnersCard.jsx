import style from './partners.module.css';

const PartnersCard = ({ img, alt }) => {
  return (
    <section className={style.Partners__card}>
      <img src={img} alt={alt} />
    </section>
  );
};

export default PartnersCard;
