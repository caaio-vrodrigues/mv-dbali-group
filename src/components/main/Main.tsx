//components
import { Preview } from './preview/Preview';
import { GraphicPreview } from './graphicPreview/GraphicPreview';

//styles
import styles from './Main.module.css';

export const Main = () => {
  return(
    <main className={`${styles.main}`}>
      <div className={`${styles.wrap}`}>
        <Preview/>
      </div>
      <div className={`${styles.wrap}`}>
        <GraphicPreview/>
      </div>
    </main>
  );
};