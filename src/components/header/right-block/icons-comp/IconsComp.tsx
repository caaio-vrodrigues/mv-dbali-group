//hooks
import { useState } from 'react';

//components
import { NavigationMenu } from '../navigation-menu/NavigationMenu';

//img
import Image from 'next/image';

//img-icon
import logoutIcon from '@/icon/logout.png';
import accountManage from '@/icon/account-manage.png';
import menuBurg from '@/icon/menu-burg.png';

//styles
import styles from './IconsComp.module.css';

export const IconsComp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return(
    <div className={styles.iconsWrap}>
      <button onClick={()=>setIsMenuOpen(!isMenuOpen)}>
        <Image src={menuBurg} alt='Menu de navegação'/>
      </button>
      {isMenuOpen && <NavigationMenu onClose={setIsMenuOpen}/>}
      <button>
        <Image src={accountManage} alt='Account management'/>
      </button>
      <button>
        <Image src={logoutIcon} alt='Logout icon'/>
      </button>
    </div>
  );
};