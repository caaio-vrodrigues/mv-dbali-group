//components
import { ControlsElements } from "@/utils/controls-elements/ControlsElements";

//styles
import styles from './FluxoPagamentos.module.css';

export const FluxoPagamentos = () => {
  return(
    <section className={styles.secFluxoPagamentos}>
      <ControlsElements funcAdd={()=>{}} funcBack={()=>{}} funcSearch={()=>{}}/>
      <div className={styles.wrapUl}>
        <ul>
          <li>
            <article>
              <p>Pagamento</p>
              <p>R$ 1.500,00</p>
            </article>
            <article>
              <p>Pagamento</p>
              <p>R$ 1.500,00</p>
            </article>
            <article>
              <p>Pagamento</p>
              <p>R$ 1.500,00</p>
            </article>
          </li>
          <li>
          <article>
              <p>Pagamento</p>
              <p>R$ 1.500,00</p>
            </article>
            <article>
              <p>Pagamento</p>
              <p>R$ 1.500,00</p>
            </article>
            <article>
              <p>Pagamento</p>
              <p>R$ 1.500,00</p>
            </article>
          </li>
          <li>
          <article>
              <p>Pagamento</p>
              <p>R$ 1.500,00</p>
            </article>
            <article>
              <p>Pagamento</p>
              <p>R$ 1.500,00</p>
            </article>
            <article>
              <p>Pagamento</p>
              <p>R$ 1.500,00</p>
            </article>
          </li>
        </ul>
      </div>
    </section>
  );
};