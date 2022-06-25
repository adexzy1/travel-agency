import style from './category.module.css';

const CategoryCard = ({ icon, label, text }) => {
  return (
    <section className={style.card__wrapper}>
      {icon}
      <label>{label}</label>
      <p>{text}</p>
    </section>
  );
};

export default CategoryCard;
