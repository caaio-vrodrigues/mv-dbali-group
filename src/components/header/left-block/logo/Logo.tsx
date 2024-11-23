//img
import Image from "next/image";
import logoMV from '@/img/logo-mv.png';
import logoDbali from '@/img/dbali-logo.png';

//styles
import styles from '../logo/Logo.module.css';

export const Logo = () => {
  return (
    <div className={styles.wrapLogo}>
      <Image 
        className={`${styles.imgLogo} ${styles.logoMV}`} 
        src={logoMV} 
        alt="Logo MV"
      />
      <Image 
        className={`${styles.imgLogo} ${styles.logoDBali}`} 
        src={logoDbali} 
        alt="Logo D'Bali"
      />
    </div>
  );
};
  