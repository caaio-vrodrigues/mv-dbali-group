// src/components/Orcamento.tsx

import { GraficoGastos } from '../graficos/grafico-gastos/GraficoGastos';
import { GraficoTempo } from '../graficos/grafico-tempo/GraficoTempo';
import styles from './Orcamento.module.css';
import { formatDate } from '@/utils/formatDate';
import { formatMoeda } from '@/utils/formatMoeda';
import Image from 'next/image';
import estoquewhite from '@/icon/estoque-white.png';
import editwhite from '@/icon/edit-white.png';

type TOrcamento = {
  data: {
    id: number,
    num_orcam: string | number,
    cliente: string,
    cnpj_cliente: string,
    situacao_orcamento: string,
    obra: string,
    valor_fechado: number,
    valor_estip_gasto: number,
    gasto_material_obra: number,
    gasto_servico_obra: number,
    gasto_combustivel: number,
    gasto_alimentacao: number,
    data_emissao: Date,
    inicio_execucao: Date | null,
    previsao_termino: Date | null,
    situacaoObra: string,
    pdf_orcamento: string,
    pdf_contrato: string,
  },
};

export const Orcamento = ({ data }: TOrcamento) => {
  const dataGrafico = {
    gasto_alimentacao: data.gasto_alimentacao,
    gasto_combustivel: data.gasto_combustivel,
    gasto_material_obra: data.gasto_material_obra,
    gasto_servico_obra: data.gasto_servico_obra,
    valor_estip_gasto: data.valor_estip_gasto,
    valor_fechado: data.valor_fechado
  };

  // Converter as datas para string usando formatDate
  const dataGraficoTempo = {
    dataInicio: data.inicio_execucao ? formatDate(data.inicio_execucao) : '', // Converte ou retorna uma string vazia se null
    prazoTermino: data.previsao_termino ? formatDate(data.previsao_termino) : '', // Converte ou retorna uma string vazia se null
  };

  return (
    <article className={`${styles.artic}`}>
      <div className={styles.wrapH1AndButtons}>
        <h1>
          Orçamento nº {data.num_orcam} - <span>{data.obra}</span>
        </h1>
        <div className={styles.wrapButtons}>
          <button>
            <Image
              className={styles.IconsOrcamento}
              src={estoquewhite} 
              alt='Acesso ao estoque.'/>
          </button>
          <button>
            <Image
              className={styles.IconsOrcamento}
              src={editwhite} 
              alt='Editar orçamento.'/>
          </button>
        </div>
      </div>
      <div className={styles.wrapH2InfosCliente}>
        <h2>Emitido:
          <span className={styles.spanH2}>
            {formatDate(data.data_emissao)}
          </span>
        </h2>
        <h2>
          Cliente:
          <span className={styles.spanH2}>
            {data.cliente}
          </span>
        </h2>
        <h2>
          CNPJ:
          <span className={styles.spanH2}>
            {data.cnpj_cliente}
          </span>
        </h2>
        <h2>
          Situação:
          <span className={styles.spanH2}>
            {data.situacao_orcamento}
          </span>
        </h2>
      </div>
      {data.situacao_orcamento === 'fechado' && 
        <div className={styles.contWrapH2}>
          <div className={styles.wrapH2}>
            <h2>
              Valor fechado: 
                <span className={styles.spanH2}>
                  {formatMoeda(data.valor_fechado)}
                </span>
            </h2>
            <h2>
              Custo estipulado: 
              <span className={styles.spanH2}>
                {formatMoeda(data.valor_estip_gasto)}
              </span>
            </h2>
            <div className={styles.wrapGrafico}>
              <GraficoGastos gastos={dataGrafico}/>
            </div>
          </div>
          <div className={styles.wrapH2}>
            <h2>
              Início da obra: 
              <span className={styles.spanH2}>
                {formatDate(data.inicio_execucao)}
              </span>
            </h2>
            <h2>
              Previsão de término: 
              <span className={styles.spanH2}>
                {formatDate(data.previsao_termino)}
              </span>
            </h2>
            <div className={styles.wrapGrafico}>
              <GraficoTempo tempo={dataGraficoTempo}/>
            </div>
          </div>
        </div>}
    </article>
  );
};