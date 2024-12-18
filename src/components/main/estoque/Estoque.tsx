//components
import { ControlsElements } from '@/utils/controls-elements/ControlsElements';

//styles
import styles from './Estoque.module.css';

export const Estoque = () => {
  return (
    <section className={styles.secEstoque}>
      <div className={styles.superWrapButtons}>
        <ControlsElements funcAdd={()=>{}} funcBack={()=>{}} funcSearch={()=>{}}/>
        <div className={styles.wrapButtonsRight}>
          <button>Entrada de Materiais</button>
          <button>Saída de Materiais</button>
        </div>
      </div>
      <div>
        <h1>Estoque</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>Valor Unt.</th>
              <th>NF Compra</th>
              <th>Vender</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Item 1.1</td>
              <td>10</td>
              <td>R$ 100,00</td>
              <td>NF12345</td>
              <td><input className={styles.inpNumb} type="number"/></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Item 1.2</td>
              <td>5</td>
              <td>R$ 50,00</td>
              <td>NF12346</td>
              <td><input className={styles.inpNumb} type="number"/></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Item 2.1</td>
              <td>20</td>
              <td>R$ 200,00</td>
              <td>NF12347</td>
              <td><input className={styles.inpNumb} type="number"/></td>
            </tr>
            <tr>
              <td>4</td>
              <td>Item 2.2</td>
              <td>15</td>
              <td>R$ 150,00</td>
              <td>NF12348</td>
              <td><input className={styles.inpNumb} type="number"/></td>
            </tr>
            <tr>
              <td>5</td>
              <td>Item 3.1</td>
              <td>30</td>
              <td>R$ 300,00</td>
              <td>NF12349</td>
              <td><input className={styles.inpNumb} type="number"/></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};