import React from 'react';
import PartnersCard from './PartnersCard';
import axon from '../../assets/axon.png';
import expedia from '../../assets/expedia.png';
import jetstar from '../../assets/jetstar.png';
import qantas from '../../assets/qantas.png';
import alitalia from '../../assets/alitalia.png';
import style from './partners.module.css';

const PartnersList = () => {
  return (
    <section className={style.partners__container}>
      <PartnersCard alt={'axon'} img={axon} />
      <PartnersCard alt={'jststar'} img={jetstar} />
      <PartnersCard alt={'expedia'} img={expedia} />
      <PartnersCard alt={'qantas'} img={qantas} />
      <PartnersCard alt={'alitalia'} img={alitalia} />
    </section>
  );
};

export default PartnersList;
