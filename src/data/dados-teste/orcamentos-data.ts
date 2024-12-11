

// // Exemplo de uso
// console.log(formatUTCDate(new Date(Date.UTC(2024, 5, 11)))); // "11/06/2024"

type TOrcamentosData = {
  id: number,
  num_orcam: string | number,
  cliente: string,
  cnpj_cliente: string,
  situacao_orcamento: string,
  obra: string,
  situacaoObra: string,
  valor_fechado: number,
  valor_estip_gasto: number,
  data_emissao: Date,
  inicio_execucao: Date | null,
  previsao_termino: Date | null,
  pdf_orcamento: string,
  pdf_contrato: string,
  gasto_material_obra: number,
  gasto_servico_obra: number,
  gasto_combustivel: number,
  gasto_alimentacao: number,
}[];

export const orcamentosData:TOrcamentosData = [
  {
    id: 1,
    num_orcam: 1045,
    cliente: 'Cliente 1',
    cnpj_cliente: '888.888.888-8',
    situacao_orcamento: 'fechado',
    obra: 'Obra 1',
    valor_fechado: 1189544,
    valor_estip_gasto: 900000,
    gasto_material_obra: 400100.78,
    gasto_servico_obra: 310870.12,
    gasto_combustivel: 20110.55,
    gasto_alimentacao: 42967.34,
    data_emissao: new Date(Date.UTC(2024, 5, 11)),
    inicio_execucao: new Date(Date.UTC(2024, 5, 11)),
    previsao_termino: new Date(Date.UTC(2024, 5, 11)),
    situacaoObra: 'finalizado',
    pdf_orcamento: '@/pdf/pdf1.pdf',
    pdf_contrato: '@/pdf/pdf2.pdf'
  },
  {
    id: 2,
    num_orcam: 1046,
    cliente: 'Cliente 2',
    cnpj_cliente: '888.888.888-8',
    situacao_orcamento: 'fechado',
    obra: 'Obra 2',
    valor_fechado: 1289544,
    valor_estip_gasto: 910000,
    gasto_material_obra: 520100.48,
    gasto_servico_obra: 290870.55,
    gasto_combustivel: 18110.45,
    gasto_alimentacao: 42967.34,
    data_emissao: new Date(Date.UTC(2024, 5, 11)),
    inicio_execucao: new Date(Date.UTC(2024, 5, 11)),
    previsao_termino: new Date(Date.UTC(2024, 5, 11)),
    situacaoObra: 'finalizado',
    pdf_orcamento: '@/pdf/pdf1.pdf',
    pdf_contrato: '@/pdf/pdf2.pdf'
  },
  {
    id: 3,
    num_orcam: 1047,
    cliente: 'Cliente 3',
    cnpj_cliente: '888.888.888-8',
    situacao_orcamento: 'fechado',
    obra: 'Obra 3',
    valor_fechado: 1000000,
    valor_estip_gasto: 400000,
    gasto_material_obra: 80000,
    gasto_servico_obra: 15000,
    gasto_combustivel: 5000,
    gasto_alimentacao: 8000,
    data_emissao: new Date(Date.UTC(2024, 5, 11)),
    inicio_execucao: new Date(Date.UTC(2024, 5, 11)),
    previsao_termino: new Date(Date.UTC(2024, 5, 11)),
    situacaoObra: 'em obra',
    pdf_orcamento: '@/pdf/pdf1.pdf',
    pdf_contrato: '@/pdf/pdf2.pdf'
  },
  {
    id: 4,
    num_orcam: 1048,
    cliente: 'Cliente 4',
    cnpj_cliente: '888.888.888-8',
    situacao_orcamento: 'fechado',
    obra: 'Obra 4',
    valor_fechado: 1489544,
    valor_estip_gasto: 930000,
    gasto_material_obra: 520100.48,
    gasto_servico_obra: 290870.55,
    gasto_combustivel: 18110.45,
    gasto_alimentacao: 42967.34,
    data_emissao: new Date(Date.UTC(2024, 5, 11)),
    inicio_execucao: new Date(Date.UTC(2024, 5, 11)),
    previsao_termino: new Date(Date.UTC(2024, 5, 11)),
    situacaoObra: 'em obra',
    pdf_orcamento: '@/pdf/pdf1.pdf',
    pdf_contrato: '@/pdf/pdf2.pdf'
  },
  {
    id: 5,
    num_orcam: 1049,
    cliente: 'Cliente 5',
    cnpj_cliente: '888.888.888-8',
    situacao_orcamento: 'fechado',
    obra: 'Obra 5',
    valor_fechado: 1589544,
    valor_estip_gasto: 940000,
    gasto_material_obra: 520100.48,
    gasto_servico_obra: 290870.55,
    gasto_combustivel: 18110.45,
    gasto_alimentacao: 42967.34,
    data_emissao: new Date(Date.UTC(2024, 5, 11)),
    inicio_execucao: new Date(Date.UTC(2024, 5, 11)),
    previsao_termino: new Date(Date.UTC(2024, 5, 11)),
    situacaoObra: 'em obra',
    pdf_orcamento: '@/pdf/pdf1.pdf',
    pdf_contrato: '@/pdf/pdf2.pdf'
  },
  {
    id: 6,
    num_orcam: 1050,
    cliente: 'Cliente 6',
    cnpj_cliente: '888.888.888-8',
    situacao_orcamento: 'aberto',
    obra: 'Obra 6',
    valor_fechado: 1689544,
    valor_estip_gasto: 950000,
    gasto_material_obra: 520100.48,
    gasto_servico_obra: 290870.55,
    gasto_combustivel: 18110.45,
    gasto_alimentacao: 42967.34,
    data_emissao: new Date(Date.UTC(2024, 5, 11)),
    inicio_execucao: null,
    previsao_termino: null,
    situacaoObra: 'aguardando',
    pdf_orcamento: '@/pdf/pdf1.pdf',
    pdf_contrato: '@/pdf/pdf2.pdf'
  },
  {
    id: 7,
    num_orcam: 1051,
    cliente: 'Cliente 7',
    cnpj_cliente: '888.888.888-8',
    situacao_orcamento: 'aberto',
    obra: 'Obra 7',
    valor_fechado: 1689544,
    valor_estip_gasto: 950000,
    gasto_material_obra: 520100.48,
    gasto_servico_obra: 290870.55,
    gasto_combustivel: 18110.45,
    gasto_alimentacao: 42967.34,
    data_emissao: new Date(Date.UTC(2024, 5, 11)),
    inicio_execucao: null,
    previsao_termino: null,
    situacaoObra: 'aguardando',
    pdf_orcamento: '@/pdf/pdf1.pdf',
    pdf_contrato: '@/pdf/pdf2.pdf'
  }
];