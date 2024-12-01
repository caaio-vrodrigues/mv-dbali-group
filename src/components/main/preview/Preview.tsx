'use client';
 
//components
import { PaymentsCards } from './payments-cards/PaymentsCards';
import { Works } from './works/Works';
// import { InsertDataComponent } from '@/data/insert/InsertDataComponent';
// import { UpdateDataComponent } from '@/data/update/UpdateDataComponent';
import { GetDataComponent } from '@/data/get/GetDataComponent';

//image
import Image from 'next/image';
import arrowForwardBlack from '@/icon/arrow-forward-black.png';
import arrowForwardWhite from '@/icon/arrow-forward-white.png';

//styles
import styles from './Preview.module.css';

//data
import React, { useContext } from 'react';

//context
import ContextMaster from '@/context/ContextProvider';

export const Preview = () => {
  const { dataTblFluxoPagamentos } = useContext(ContextMaster);
  console.log(dataTblFluxoPagamentos);

  return(
    <div className={`${styles.wrap}`}>
      <section className={`${styles.block} ${styles.blockLeft}`}>
        <a className={`${styles.aFloat} ${styles.aFloatFlow}`}>
          Fluxo 
            <Image 
              className={styles.arrowIcon}
              src={arrowForwardBlack} 
              alt='Flecha para a página Fluxo'/>
        </a>
        <PaymentsCards/>
      </section>
      <section className={`${styles.block} ${styles.blockRight}`}>
        <a className={`${styles.aFloat} ${styles.aFloatWorks}`}>
          Obras 
            <Image
              className={styles.arrowIcon} 
              src={arrowForwardWhite} 
              alt='Flecha para a página Fluxo'/>
        </a>
        <Works/>
      </section>
      {/* <InsertDataComponent/> */}
      {/* <UpdateDataComponent/> */}
      <GetDataComponent/>
    </div>
  );
};