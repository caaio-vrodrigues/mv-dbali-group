//styles
import headerStyles from '@/components/header/Header.module.css';

//component
import { IconsComp } from './icons-comp/IconsComp';

export const RightBlock = () => {
  return(
    <div className={headerStyles.headerBlocks}>
      <IconsComp/>
    </div>
  );
};