//components
import { PaymentsCards } from './payments-cards/PaymentsCards';
import { Works } from './works/Works';

//styles
import styles from './Preview.module.css';

export const Preview = () => {
  return(
    <div className={`${styles.wrap}`}>
      <section className={`${styles.block} ${styles.blockLeft}`}>
        <a className={styles.aFloatLeft}>
          Fluxo
        </a>
        <PaymentsCards/>
      </section>
      <section className={`${styles.block} ${styles.blockRight}`}>
        <a className={`${styles.aFloatLeft} ${styles.aFloatLeftRight}`}>
          Orçamentos
        </a>
        <Works/>
      </section>
    </div>
  );
};