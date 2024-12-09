import styles from './Orcamento.module.css';

type TOrcamento = {
  data: {
    id: number,
    num_orcam: string | number,
    cliente: string,
    obra: string,
    valor_fechado: number,
    valor_estip_gasto: number,
    data_emissao: Date,
    inicio_execucao: Date,
    previsao_termino: Date,
    situacaoObra: string,
    pdf_orcamento: string,
    pdf_contrato: string
  }
};

export const Orcamento = ({ data }: TOrcamento) => {
  return(
    <article className={`${styles.artic}`}>
      {data.cliente}
    </article>
  )
}