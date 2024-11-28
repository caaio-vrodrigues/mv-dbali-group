//components
import { Preview } from './preview/Preview';

//styles
import styles from './Main.module.css';

export const Main = async () => {
  return (
    <main className={styles.main}>
      <Preview/>
    </main>
  );
};