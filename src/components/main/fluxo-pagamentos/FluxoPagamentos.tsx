//components
import { ControlsElements } from "@/utils/controls-elements/ControlsElements";
import { CustomButton } from "@/utils/custom-button/CustomButton";
import { AddLancamento } from "./add-lancamento/AddLancamento";

//img
import Image from "next/image";
import pdfBlack from '@/icon/pdf-black.png';
import editBlack from '@/icon/edit-black.png';
import taskGrren from '@/icon/task-green.png';

//styles
import styles from './FluxoPagamentos.module.css';

//pdf
import { showPdf } from "@/utils/showPdf";

//React
import { useContext } from 'react';

//context
import ContextMaster from '@/context/ContextProvider';

export const FluxoPagamentos = () => {
  const {showAddLancamento, setShowAddLancamento} = useContext(ContextMaster);

  const pdfPath ='/pdf/pdf1.pdf';

  return(
    <section className={styles.secFluxoPagamentos}>
      <ControlsElements funcAdd={()=>setShowAddLancamento(value => !value)} funcBack={()=>{}} funcSearch={()=>{}}/>
      <h1>Fluxo Pagamentos</h1>
      {showAddLancamento && <AddLancamento/>}
      <div className={styles.wrapUl}>
        <ul>
          <li>
            <div className={styles.wrapInfosDia}>
              <h2>01/01/2025</h2>
              <h2>Total dia: R$ 12.854,94</h2>
            </div>
            <div className={styles.wrapArticles}>
              <article>
                <div className={styles.wrapBeneficiarioInfos}>
                  <div className={styles.wrapCnpj}>
                    <h3>Mettal 4</h3>
                    <h4>Lucro Presumido</h4>
                    <button className={styles.buttonPath}>
                      <p className={styles.cnpj}>CNPJ: 48.798.651-15</p>
                    </button>
                  </div>
                  <div>
                    <CustomButton 
                      altSrc="Editar lançamento" img={editBlack} msgToolTipe="Editar"
                      styleImg={styles.pdfBoletoIcon} styleButton={styles.buttonPdf}/>
                    <CustomButton
                      altSrc="Visualizar boleto" img={pdfBlack} msgToolTipe="Boleto"
                      styleImg={styles.pdfBoletoIcon} styleButton={styles.buttonPdf}
                      onClick={()=>showPdf(pdfPath)}/>
                  </div>
                </div>
                <div className={styles.wrapSituacao}>
                  <div>
                    <p>Situação: Pago</p>
                    <Image 
                      className={styles.situacaoImg} alt="Situação do pagamento" 
                      src={taskGrren}/>
                  </div>
                  <p>Valor R$ 18.421,81</p>
                </div>
                <div className={styles.wrapPagadorInfos}>
                  <h3>MV Arquitetura e Obras</h3>
                  <button className={styles.buttonPath}>
                    <h4>Obra: Cyrella</h4>
                  </button>
                  <button className={styles.buttonPath}>
                    <h4>Orçamento: 10.075</h4>
                  </button>
                </div>
              </article>
              <article>
                <div className={styles.wrapBeneficiarioInfos}>
                  <h3>Big Center - Simples Nacional</h3>
                  <div>
                    <CustomButton 
                      altSrc="Editar lançamento" img={editBlack} msgToolTipe="Editar"
                      styleImg={styles.pdfBoletoIcon} styleButton={styles.buttonPdf}/>
                    <CustomButton
                      altSrc="Visualizar boleto" img={pdfBlack} msgToolTipe="Boleto"
                      styleImg={styles.pdfBoletoIcon} styleButton={styles.buttonPdf}/>
                  </div>
                </div>
                <span>CNPJ: 48.798.651-15</span>
                <br /><br />
                <p>Pagamento</p>
                <p>R$ 1.500,00</p>
              </article>
              <article>
                <div className={styles.wrapBeneficiarioInfos}>
                  <h3>Aço Fort - Lucro Real</h3>
                  <div>
                    <CustomButton 
                      altSrc="Editar lançamento" img={editBlack} msgToolTipe="Editar"
                      styleImg={styles.pdfBoletoIcon} styleButton={styles.buttonPdf}/>
                    <CustomButton
                      altSrc="Visualizar boleto" img={pdfBlack} msgToolTipe="Boleto"
                      styleImg={styles.pdfBoletoIcon} styleButton={styles.buttonPdf}/>
                  </div>
                </div>
                <span>CNPJ: 48.798.651-15</span>
                <br /><br />
                <p>Pagamento</p>
                <p>R$ 1.500,00</p>
              </article>
              <article>
                <div className={styles.wrapBeneficiarioInfos}>
                  <h3>Santa Rita - Lucro Real</h3>
                  <div>
                    <CustomButton 
                      altSrc="Editar lançamento" img={editBlack} msgToolTipe="Editar"
                      styleImg={styles.pdfBoletoIcon} styleButton={styles.buttonPdf}/>
                    <CustomButton
                      altSrc="Visualizar boleto" img={pdfBlack} msgToolTipe="Boleto"
                      styleImg={styles.pdfBoletoIcon} styleButton={styles.buttonPdf}/>
                  </div>
                </div>
                <span>CNPJ: 48.798.651-15</span>
                <br /><br />
                <p>Pagamento</p>
                <p>R$ 1.500,00</p>
              </article>
            </div>
          </li>
          <li>
            <div className={styles.wrapInfosDia}>
              <span>02/01/2025</span>
            </div>
            <div className={styles.wrapArticles}>
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
              <article>
                <p>Pagamento</p>
                <p>R$ 1.500,00</p>
              </article>
            </div>
          </li>
          <li>
            <div className={styles.wrapInfosDia}>
              <span>03/01/2025</span>
            </div>
            <div className={styles.wrapArticles}>
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
              <article>
                <p>Pagamento</p>
                <p>R$ 1.500,00</p>
              </article>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};