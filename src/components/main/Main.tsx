import { useContext } from 'react';

//components
import { Preview } from './preview/Preview';
import { Orcamentos } from './orcamentos/Orcamentos';
import { Estoque } from './estoque/Estoque';
import { Fornecedores } from './fornecedores/Fornecedores';
import { FluxoPagamentos } from './fluxo-pagamentos/FluxoPagamentos';

//context
import ContextMaster from '@/context/ContextProvider';

//styles
import styles from './Main.module.css';

export const Main = () => {
  const { showEstoque, showFornecedores, showFluxoPagamentos } = useContext(ContextMaster);

  return(
    <main className={`${styles.main}`}>
      <div className={`${styles.wrap}`}>
        <Preview/>
      </div>
      <div className={`${styles.wrap}`}>
        {showEstoque ? <Estoque/> : showFornecedores 
          ? <Fornecedores/> : showFluxoPagamentos ? <FluxoPagamentos/> : <Orcamentos/>}
      </div>
    </main>
  );
};