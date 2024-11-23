//components
import { PaymentsCards } from './payments-cards/PaymentsCards';

//styles
import styles from './Preview.module.css';

export const Preview = () => {
  return(
    <div className={`${styles.wrap}`}>
      <section className={`${styles.block} ${styles.blockLeft}`}>
        <PaymentsCards/>
      </section>
      <section className={`${styles.block}`}>
      </section>
    </div>
  );
};