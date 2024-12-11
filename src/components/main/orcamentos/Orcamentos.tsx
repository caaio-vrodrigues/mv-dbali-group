//hooks
import { useState, useContext } from 'react';

// components
import { Orcamento } from './orcamento/Orcamento';

// context
import ContextMaster from '@/context/ContextProvider';

// styles
import styles from './Orcamentos.module.css';

// data-test
import { orcamentosData } from '@/data/dados-teste/orcamentos-data';

// image
import Image from 'next/image';

// img-icon
import arrowBackBlack from '@/icon/arrow-back-white.png';
import addBlack from '@/icon/add-white.png';
import lupaWhite from '@/icon/lupa-white.png';

export const Orcamentos = () => {
  const { showOrcamentos, setShowOrcamentos } = useContext(ContextMaster);
  const [visibleCount, setVisibleCount] = useState(3); // Estado para contar os orçamentos visíveis

  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + 3); // Aumenta o contador em 3 a cada clique
  };

  return (
    <section className={`${styles.orcamentosContainer}`}>
      <div className={`${styles.WrapButtons_Add_Back}`}>
        <button onClick={() => setShowOrcamentos(!showOrcamentos)}>
          <Image className={styles.butBackAdd} src={arrowBackBlack} alt='Seta para voltar ao layout anterior.' />
        </button>
        <button onClick={() => setShowOrcamentos(!showOrcamentos)}>
          <Image className={styles.butBackAdd} src={addBlack} alt='Adicionar novo orçamento.' />
        </button>
        <div className={styles.wrapInput}>
          <input type="text" placeholder='Buscar orçamento' />
          <button onClick={() => {}}>
            <Image className={styles.lupa} src={lupaWhite} alt='Buscar orçamento.' />
          </button>
        </div>
      </div>
      <div className={`${styles.wrapOrcamentos}`}>
        {orcamentosData.slice(0, visibleCount).map((data) => {
          return (<Orcamento key={data.id} data={data} />);
        })}
      </div>
      {visibleCount < orcamentosData.length && ( // Verifica se existem mais orçamentos para mostrar
        <button className={styles.butShowMore} onClick={showMore}>
          Mostrar Mais
        </button>
      )}
    </section>
  );
};