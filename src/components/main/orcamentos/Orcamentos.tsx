//hooks
import { useState } from 'react';

// components
import { Orcamento } from './orcamento/Orcamento';
import { ControlsElements } from '@/utils/controls-elements/ControlsElements';

// styles
import styles from './Orcamentos.module.css';

// data-test
import { orcamentosData } from '@/data/dados-teste/orcamentos-data';

export const Orcamentos = () => {
  const [visibleCount, setVisibleCount] = useState(3); // Estado para contar os orçamentos visíveis
  const [showOrcamento, setShowOrcamentos] = useState(true);
  const [searchTerm, setSearchTerm] = useState(''); // Estado para armazenar o termo de busca

  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + 3); // Aumenta o contador em 3 a cada clique
  };

  // Implementação das funções passadas para ControlsElements
  const funcBack = (value: boolean) => {
    setShowOrcamentos(value);
  };

  const funcAdd = () => { 
    console.log("Adicionar novo orçamento");
  };

  const funcSearch = (value: string) => { // Garantindo que o tipo é string
    setSearchTerm(value);
    console.log("Buscando por:", value);
    console.log(showOrcamento)
    // Aqui você pode implementar a lógica de busca
  };

  return (
    <section className={`${styles.orcamentosContainer}`}>
      <ControlsElements 
        funcBack={funcBack} 
        funcAdd={funcAdd} 
        funcSearch={funcSearch} 
      /> 
      <div className={`${styles.wrapOrcamentos}`}>
        {orcamentosData
          .filter(data => data.cliente.includes(searchTerm)) // Acessando a propriedade 'cliente' (ajuste conforme necessário)
          .slice(0, visibleCount)
          .map((data) => (
            <Orcamento key={data.id} data={data} />
          ))}
      </div>
      {visibleCount < orcamentosData.length && ( // Verifica se existem mais orçamentos para mostrar
        <button className={styles.butShowMore} onClick={showMore}>
         Mostrar mais +
        </button>
      )}
    </section>
  );
};