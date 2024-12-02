//styles
import footStyles from '@/components/footer/Footer.module.css';
import styles from './LeftBlock.module.css';

export const LeftBlock = () => {
  return(
    <section className={`${footStyles.footBlocks} ${styles.leftBlock}`}>
      <h1>Descrições</h1>
      <div>
        <h2>Objetivo: </h2>
        <p>{`Esse sistema web é um modelo feito para atender as necessidades das empresas MV Arquitetura e Obras representada pelo srº Valdemir e a empresa D'Bali Engenharia representada pelo srº Vinicius.`}</p>
        <h2>{`Desenvolvimento e Design no Front-End:`}</h2>
        <p>Caio Vinicius Rodrigues</p>
        <h2>Programação Back-End:</h2>
        <p>Caio Vinicius Rodrigues</p>
        <h2>Administração de Banco de Dados:</h2>
        <p>Caio Vinicius Rodrigues</p>
      </div>
    </section>
  )
}