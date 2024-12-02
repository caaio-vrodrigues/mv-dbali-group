//image
import Image from 'next/image';

//icons
import copyright from '@/icon/copyright-black.png';

//styles
import footStyles from '@/components/footer/Footer.module.css';
import styles from './CenterBlock.module.css';

export const CenterBlock = () => {
  return(
    <section className={`${footStyles.footBlocks} ${styles.centerBlock}`}>
      <Image
        className={`${styles.iconCopy}`}
        src={copyright} 
        alt='Símbolo de Copyright.'/>
      <h1>Caio Vinicius Rodrigues</h1>
    </section>
  )
}