//data
import { paymentsData } from '@/data/payments-data';

//styles
import styles from './PaymentsCards.module.css';

//image
import Image from 'next/image';

//img-icon
import arrowForward from '@/icon/arrow-forward-black.png';

export const PaymentsCards = () => {
  return(<>
    {paymentsData.map((data)=>{
      return(
        <article key={data.id} className={styles.wrapArticle}>
          <h1>{data.title}</h1>
          <div className={styles.wrapTotal}>
            <h2>TOTAL</h2>
            <p>R${data.value}</p>
          </div>
          {data.endPeriod && data.startPeriod ? 
            <div>
              <h2>Período dos Vencimentos</h2>
              <div className={styles.wrapPeriods}>
                <p>{data.startPeriod}</p>
                <Image 
                  className={styles.arrowForwIcon} 
                  src={arrowForward} alt='Flecha para direita'/>
                <p>{data.endPeriod}</p>
              </div>
            </div> 
            : 
            <div>
              <h2>Vencimento</h2>
              <p>{data.startPeriod}</p>
            </div>}
        </article>
      )
    })}
  </>);
};