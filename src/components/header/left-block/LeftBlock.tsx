//components
import { Logo } from './logo/Logo';

//styles
import headerStyles from '@/components/header/Header.module.css';
import styles from '../left-block/LeftBlock.module.css';

export const LeftBlock = () => {
  return (
    <div className={`${headerStyles.headerBlocks} ${styles.leftBlock}`}>
      <Logo/>
    </div>
  );
};