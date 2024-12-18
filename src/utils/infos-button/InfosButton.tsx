//image
import Image from "next/image";

//icon-img
import infosBlack from '@/icon/info-black.png';

//styles
import styles from './Infos.module.css';

export const InfosButton = () => {
  return(
    <button className={styles.infosButton} onClick={()=>{}}>
      <Image 
        className={styles.iconInfos}
        src={infosBlack} alt="Mais informações"/>
    </button>
  );
};