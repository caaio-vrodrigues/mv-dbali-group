//data
import { previewData } from "@/data/preview-data";

//styles
import styles from './PaymentsCards.module.css';

export const PaymentsCards = () => {
  return(<>
    {previewData.map((data)=>{
      return(
      <article key={data.id} className={styles.wrapArticle}>
        <h1>{data.title}</h1>
        <p>{data.msg}</p>
        <div>
          <h2>Valor à pagar</h2>
          <p>{data.value}</p>
        </div>
        <div>
          <h2>Data limite para pagamento</h2>
          <p>{data.limitData}</p>
        </div>
      </article>
      )
    })}
  </>);
};