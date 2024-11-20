//styles
import headerStyles from '@/components/header/Header.module.css';

//components
import { Logo } from './logo/Logo';

export const CenterBlock = () => {
  return(
    <div className={headerStyles.headerBlocks}>
      <Logo/>
    </div>
  );
};