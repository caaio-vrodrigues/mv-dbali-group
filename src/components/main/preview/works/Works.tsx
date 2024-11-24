//data
import { worksData } from '@/data/works-data';

//styles
import styles from './Works.module.css';

export const Works = () => {
  return(<>
    {worksData.map((data) => {
      return(
        <article key={data.id} className={styles.wrapArticle}>
          <h1>{data.h1}</h1>
          <div>
            <h2>Início da Obra</h2>
            <p>{data.startWork}</p>
          </div>
        </article>)
    })}
  </>);
};