import { useContext } from 'react';

//components
import { Preview } from './preview/Preview';
import { Orcamentos } from './orcamentos/Orcamentos';
import { Estoque } from './estoque/Estoque';

//context
import ContextMaster from '@/context/ContextProvider';

//styles
import styles from './Main.module.css';

export const Main = () => {
  const { showEstoque } = useContext(ContextMaster);

  return(
    <main className={`${styles.main}`}>
      <div className={`${styles.wrap}`}>
        <Preview/>
      </div>
      <div className={`${styles.wrap}`}>
        {showEstoque ? <Estoque/> : <Orcamentos/>}
      </div>
    </main>
  );
};