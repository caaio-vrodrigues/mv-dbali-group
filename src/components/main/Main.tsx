//components
import { Preview } from './preview/Preview';

//styles
import styles from './Main.module.css';

export const Main = () => {
  return (
    <main className={styles.main}>
      <Preview/>
    </main>
  );
};