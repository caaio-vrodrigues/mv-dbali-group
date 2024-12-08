//data
import { orcamentosData } from '@/data/orcamentos-data';

//styles
import styles from './OrcamentosPreview.module.css';

//Image
import Image from 'next/image';

export const Orcamentos = () => {
  return(<>
    {orcamentosData.map((data) => {
      console.log(orcamentosData)
      return(
        <article key={data.id} className={styles.wrapArticle}>
          <div className={`${styles.contH1}`}>
            <h1>{data.h1} - <span>{data.obra}</span></h1>
            <Image 
              src={data.icon} 
              alt='Ícone para mais informações'
              className={`${styles.arrowForwardBlack}`}/>
          </div>
          <div className={`${styles.contH2}`}>
            <div className={`${styles.wrapH2}`}>
              <h2>Início da execução</h2>
              <p>{data.startWork}</p>
            </div>
            <div className={`${styles.wrapH2}`}>
              <h2>Previsão de término</h2>
              <p>{data.endWork}</p>
            </div>
            <h3 className={`${data.situacaoObra === 'Em Obra' ? styles.h3Red : styles.h3Green}`}>{data.situacaoObra}</h3>
          </div>
        </article>)
    })}
  </>);
};