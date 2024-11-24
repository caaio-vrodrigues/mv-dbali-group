//data
import { paymentsData } from '@/data/payments-data';

//styles
import styles from './PaymentsCards.module.css';

export const PaymentsCards = () => {
  return(<>
    {paymentsData.map((data)=>{
      return(
      <article key={data.id} className={styles.wrapArticle}>
        <h1>{data.title}</h1>
        <p>{data.msg}</p>
        <div>
          <h2>Valor à pagar</h2>
          <p>{data.value}</p>
        </div>
        <div>
          {data.endPeriod && data.startPeriod ? 
            <div>
              <h2>Período dos Vencimentos</h2>
              <p>{`${data.startPeriod} -> ${data.endPeriod}`}</p>
            </div> 
            : 
            <div>
              <h2>Vencimento</h2>
              <p>{data.startPeriod}</p>
            </div>}
        </div>
      </article>
      )
    })}
  </>);
};