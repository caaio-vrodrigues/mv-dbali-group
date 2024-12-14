//components
import { CustomButton } from '@/utils/custom-button/CustomButton';

//hooks
import { useState } from 'react';

//components
import { NavigationMenu } from '../navigation-menu/NavigationMenu';

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
      <CustomButton 
        altSrc='Menu de navegação'
        img={menuBurg}
        msgToolTipe='Menu'
        styleImg=''
        onClick={setIsMenuOpen}
        tooltipPosisition='bottom'/>
      {isMenuOpen && <NavigationMenu onClose={setIsMenuOpen}/>}
      <CustomButton 
        altSrc='Configurações de conta'
        img={accountManage}
        msgToolTipe='Config. Conta'
        styleImg=''
        tooltipPosisition='bottom'/>
      <CustomButton 
        altSrc='Encerrar seção'
        img={logoutIcon}
        msgToolTipe='Sair'
        styleImg=''
        tooltipPosisition='bottom'/>
    </div>
  );
};