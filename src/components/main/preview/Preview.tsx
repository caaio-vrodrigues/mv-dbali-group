//components
import { PaymentsCards } from './payments-cards/PaymentsCards';
import { Works } from './works/Works';

//styles
import styles from './Preview.module.css';

export const Preview = () => {
  return(
    <div className={`${styles.wrap}`}>
      <section className={`${styles.block} ${styles.blockLeft}`}>
        <PaymentsCards/>
      </section>
      <section className={`${styles.block} ${styles.blockRight}`}>
        <Works/>
      </section>
    </div>
  );
};