//components
import { LeftBlock } from './left-block/LeftBlock';
import { CenterBlock } from './center-block/CenterBlock';
import { RightBlock } from './right-block/RightBlock';

//styles
import styles from './Header.module.css';

export const Header = () => 
  <header className={styles.header}>
    <LeftBlock/>
    <CenterBlock/>
    <RightBlock/>
  </header>