//components
import { LogosBlock } from './LogosBlock';

//styles
import styles from './Header.module.css';

export const Header = () => 
  <header className={styles.headerMain}>
    <LogosBlock style={{style1: styles.blockMenu, style2: styles.test}}/>
    <div className={styles.blockMenu}>
      <h1>{`MV&D'BALI GROUP`}</h1>
    </div>
    <div className={styles.blockMenu}>

    </div>
  </header>