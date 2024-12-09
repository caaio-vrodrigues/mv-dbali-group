import { useContext } from 'react';

//components
import { Orcamento } from './orcamento/Orcamento';

//context
import ContextMaster from '@/context/ContextProvider';

//styles
import styles from './Orcamentos.module.css';

//data-test
import { orcamentosData } from '@/data/dados-teste/orcamentos-data';

export const Orcamentos = () => {
  const { showOrcamentos, setShowOrcamentos } = useContext(ContextMaster);
  // console.log(orcamentosData);

  return(
    <section className={`${styles.orcamentosContainer}`}>
      <button 
        onClick={()=>setShowOrcamentos(!showOrcamentos)}>
          Voltar
      </button>
      <div className={`${styles.wrapOrcamentos}`}>
        {orcamentosData.map((data)=>{
          return(<Orcamento key={data.id} data={data}/>)
        })}
      </div>
    </section>
  );
};