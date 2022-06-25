import { IoIosSend } from 'react-icons/io';
import { HiOutlineMail } from 'react-icons/hi';
import ContactFormBottomSpiral from '../../assets/icons/ContactFormBottomSpiral';
import ContactFormTopSpiral from '../../assets/icons/ContactFormTopSpiral';
import style from './contactform.module.css';

const ContactForm = () => {
  return (
    <form>
      <div className={style.top__spiral}>
        <ContactFormTopSpiral />
      </div>

      <div className={style.send__icon}>
        <IoIosSend />
      </div>

      <p>
        Subscribe to get information, latest news and other interesting offers
        about Cobham
      </p>

      <div className={style.form__group}>
        <div className={style.form__input__wrapper}>
          <HiOutlineMail />
          <input type="email" placeholder="Your email" />
        </div>

        <button>Subscribe</button>
      </div>

      <div className={style.bottom__spiral}>
        <ContactFormBottomSpiral />
      </div>
    </form>
  );
};

export default ContactForm;
