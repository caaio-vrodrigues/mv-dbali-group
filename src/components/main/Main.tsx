import { useContext } from 'react';

//components
import { Preview } from './preview/Preview';
import { GraphicPreview } from './graphicPreview/GraphicPreview';
import { Orcamentos } from './orcamentos/Orcamentos';

//context
import ContextMaster from '@/context/ContextProvider';

//styles
import styles from './Main.module.css';

export const Main = () => {
  const { showOrcamentos } = useContext(ContextMaster);

  return(
    <main className={`${styles.main}`}>
      <div className={`${styles.wrap}`}>
        <Preview/>
      </div>
      <div className={`${styles.wrap}`}>
        {showOrcamentos ? <Orcamentos/> :<GraphicPreview/>}
      </div>
    </main>
  );
};