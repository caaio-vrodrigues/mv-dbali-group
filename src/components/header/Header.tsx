//components
import { LeftBlock } from './left-block/LeftBlock';
import { RightBlock } from './right-block/RightBlock';

//styles
import styles from './Header.module.css';

export const Header = () => 
  <header className={styles.header}>
    <LeftBlock/>
    <RightBlock/>
  </header>