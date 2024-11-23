//data
import { worksData } from '@/data/works-data';

//styles
import styles from './Works.module.css';

export const Works = () => {
  return(
    <div className={styles.worksWrap}>
      {worksData.map((data) => {
        return(
          <article key={data.id}>
            <h1>{data.h1}</h1>
            <div>
              <h2>Início da Obra</h2>
              <p>{data.startWork}</p>
            </div>
            
          </article>
        )
      })}
    </div>
  );
};