// Data
import { orcamentosData } from '@/data/dados-teste/orcamentos-data';

// Styles
import styles from './OrcamentosPreview.module.css';

// Image
import Image from 'next/image';

// icon-image
import infosBlack from '@/icon/info-black.png';

// Definindo o tipo para os itens do orçamento
type TPreviewOrcmItem = {
  id: number,
  num_orcam: string | number,
  cliente: string,
  obra: string,
  valor_fechado: number,
  valor_estip_gasto: number,
  data_emissao: Date,
  inicio_execucao: Date | null,
  previsao_termino: Date | null,
  situacaoObra: string,
  pdf_orcamento: string,
  pdf_contrato: string
};

// Componente que representa cada orçamento
const PreviewOrcamItem = ({ 
  id, inicio_execucao, num_orcam, obra, 
  situacaoObra, previsao_termino,
}: TPreviewOrcmItem) => {
  const formatDate = (date:Date) => {
    return date.toLocaleDateString('pt-BR',{
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }
    );
  };

  return (
    <article key={id} className={styles.wrapArticle}>
      <div className={`${styles.contH1}`}>
        <h1>Orçamento nº {num_orcam} - <span>{obra}</span></h1>
        <div className={styles.tooltipWrapper}>
          <button>
            <Image
              src={infosBlack}
              alt='Ícone para mais informações'
              className={styles.infosBlack} />
          </button>
          <span className={styles.tooltip}>Orçamento</span>
        </div>
      </div>
      <div className={`${styles.contH2}`}>
        {inicio_execucao && 
          <div className={`${styles.wrapH2}`}>
            <h2>Início da execução</h2>
            <p>{formatDate(inicio_execucao)}</p>
          </div>}
        {previsao_termino && 
          <div className={`${styles.wrapH2}`}>
            <h2>Previsão de término</h2>
            <p>{formatDate(previsao_termino)}</p>
          </div>}
        <div className={styles.wrapH3}>
          <h3>Status:</h3>
          <p className={`${situacaoObra === 'em obra' ? styles.h3Red : situacaoObra === 'aguardando'? styles.h3Blue : styles.h3Green}`}>{situacaoObra}</p>
        </div>
      </div>
    </article>
  );
};

export const OrcamentosPreview = () => {
  return (
    <>
      {orcamentosData.map((data) => (
        <PreviewOrcamItem key={data.id} {...data} />
      ))}
    </>
  );
};