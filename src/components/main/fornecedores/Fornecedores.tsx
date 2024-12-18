import styles from './Fornecedores.module.css';

//components
import { ControlsElements } from '@/utils/controls-elements/ControlsElements';
import { InfosButton } from '@/utils/infos-button/InfosButton';

export const Fornecedores = () => {
  return(
    <section className={styles.secFornecedores}>
      <ControlsElements funcAdd={()=>{}} funcBack={()=>{}} funcSearch={()=>{}}/>
      <div className={styles.wrapH1AndTable}>
        <h1>Fornecedores</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome Fant.</th>
              <th>CNPJ</th>
              <th>Legislação</th>
              <th>Infos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Forn 1</td>
              <td>151515-8</td>
              <td>Simples N.</td>
              <td><InfosButton/></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Forn 2</td>
              <td>151515-8</td>
              <td>Lucro R.</td>
              <td><InfosButton/></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Forn 3</td>
              <td>151515-8</td>
              <td>Lucro R.</td>
              <td><InfosButton/></td>
            </tr>
            <tr>
              <td>4</td>
              <td>Forn 4</td>
              <td>151515-8</td>
              <td>Simples N.</td>
              <td><InfosButton/></td>
            </tr>
            <tr>
              <td>5</td>
              <td>Forn 5</td>
              <td>151515-8</td>
              <td>Simples N.</td>
              <td><InfosButton/></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};