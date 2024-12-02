//image
import Image from 'next/image';

// icon
import emailIcon from '@/icon/email-contact-black.png';

//styles
import footStyles from '@/components/footer/Footer.module.css';
import styles from './RightBlock.module.css';

export const RightBlock = () => {
  return(
    <section className={`${footStyles.footBlocks} ${styles.rightBlock}`}>
      <Image 
        className={`${styles.iconEmail}`}
        src={emailIcon} 
        alt='Ícone para acessar o e-mail da empresa.'/>
    </section>
  )
}