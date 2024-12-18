// components/ControlsElements.tsx

import { useState } from 'react';

// img
import Image from 'next/image';

// styles
import styles from './ControlsElements.module.css';

// icon-img
import arrowBackWhite from '@/icon/arrow-back-white.png';
import addWhite from '@/icon/add-white.png';             
import lupaWhite from '@/icon/lupa-white.png';           

// Tipagem para as props do componente
type TControlsElements = {
  funcBack: (value: boolean) => void,
  funcAdd: (value: boolean) => void,
  funcSearch: (value: string) => void, // Mudança para aceitar apenas string
};

export const ControlsElements = ({ funcBack, funcAdd, funcSearch }: TControlsElements) => {
  // Estado local para armazenar o valor da busca
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className={styles.WrapButtons_Add_Back}>
      <button onClick={() => funcBack(false)}> {/* Chama funcBack com false para ocultar */}
        <Image
          className={styles.butBackAdd}
          src={arrowBackWhite}
          alt='Seta para voltar ao layout anterior.'
        />
      </button>
      <button onClick={() => funcAdd(true)}> {/* Chama funcAdd com true para adicionar */}
        <Image
          className={styles.butBackAdd}
          src={addWhite}
          alt='Adicionar novo orçamento.'
        />
      </button>
      <div className={styles.wrapInput}>
        <input 
          type="text" 
          placeholder='Buscar...' 
          value={searchValue} // Controla o valor do input
          onChange={(e) => setSearchValue(e.target.value)} // Atualiza o valor do input
        />
        <button onClick={() => funcSearch(searchValue)}> {/* Chama funcSearch com o valor atual */}
          <Image
            className={styles.lupa}
            src={lupaWhite}
            alt='Buscar novo'
          />
        </button>
      </div>
    </div>
  );
};