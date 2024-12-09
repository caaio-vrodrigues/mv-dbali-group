//components
import { PaymentsCards } from './payments-cards/PaymentsCards';
import { OrcamentosPreview } from './orcamentos-preview/OrcamentosPreview';
// import { InsertDataComponent } from '@/data/insert/InsertDataComponent';
// import { UpdateDataComponent } from '@/data/update/UpdateDataComponent';
// import { GetDataComponent } from '@/data/get/GetDataComponent';



//image
import Image from 'next/image';

// icon-img
import arrowForwardWhite from '@/icon/arrow-forward-white.png';

//data
import React, { useContext } from 'react';

//context
import ContextMaster from '@/context/ContextProvider';

//styles
import styles from './Preview.module.css';

export const Preview = () => {
  const { showOrcamentos, setShowOrcamentos } = useContext(ContextMaster);

  return(<>
    <section className={`${styles.block} ${styles.blockLeft}`}>
      <button 
        onClick={()=>{}}
        className={`${styles.buttonFloat}`}>
        Fluxo
          <Image
            className={styles.arrowIcon}
            src={arrowForwardWhite}
            alt='Flecha para a página Fluxo'/>
      </button>
      <PaymentsCards/>
    </section>
    <section className={`${styles.block} ${styles.blockRight}`}>
      <button 
        onClick={()=>setShowOrcamentos(!showOrcamentos)}
        className={`${styles.buttonFloat}`}>
        Orçamentos
          <Image
            className={styles.arrowIcon}
            src={arrowForwardWhite}
            alt='Flecha para a página Fluxo'/>
      </button>
      <OrcamentosPreview/>
    </section>
    {/* <InsertDataComponent/> */}
    {/* <UpdateDataComponent/> */}
    {/* <GetDataComponent arrCalcDia={[
      {dia: 1, mes: 1, ano: 2024},
      {dia: 3, mes: 1, ano: 2024},
      {dia: 4, mes: 1, ano: 2024},
      {dia: 2, mes: 2, ano: 2024},
      {dia: 11, mes: 2, ano: 2024},
      {dia: 13, mes: 1, ano: 2024},
      {dia: 19, mes: 10, ano: 2024},
      {dia: 21, mes: 10, ano: 2024},
      {dia: 30, mes: 12, ano: 2024},
    ]}/> */}
  </>);
};