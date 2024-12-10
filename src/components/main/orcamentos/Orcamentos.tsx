import { useContext } from 'react';

//components
import { Orcamento } from './orcamento/Orcamento';

//context
import ContextMaster from '@/context/ContextProvider';

//styles
import styles from './Orcamentos.module.css';

//data-test
import { orcamentosData } from '@/data/dados-teste/orcamentos-data';

//image
import Image from 'next/image';

//img-icon
import arrowBackBlack from '@/icon/arrow-back-white.png';
import addBlack from '@/icon/add-white.png';

export const Orcamentos = () => {
  const { showOrcamentos, setShowOrcamentos } = useContext(ContextMaster);
  // console.log(orcamentosData);

  return(
    <section className={`${styles.orcamentosContainer}`}>
      <div className={`${styles.WrapButtons_Add_Back}`}>
        <button
          onClick={()=>setShowOrcamentos(!showOrcamentos)}>
            <Image className={styles.butBackAdd} src={arrowBackBlack} alt='Seta para voltar ao layout anterior.'/>
        </button>
        <button
          onClick={()=>setShowOrcamentos(!showOrcamentos)}>
            <Image className={styles.butBackAdd} src={addBlack} alt='Adicionar novo orçamento.'/>
        </button>
      </div>
      <div className={`${styles.wrapOrcamentos}`}>
        {orcamentosData.map((data)=>{
          return(<Orcamento key={data.id} data={data}/>)
        })}
      </div>
    </section>
  );
};