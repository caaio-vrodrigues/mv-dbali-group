

type TOrcamentosData = {
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
}[];

export const orcamentosData:TOrcamentosData = [
  {
    id: 1,
    num_orcam: 1045,
    cliente: 'Cliente 1',
    obra: 'Obra 1',
    valor_fechado: 1189544,
    valor_estip_gasto: 900000,
    data_emissao: new Date('2024-03-13'),
    inicio_execucao: new Date('2024-04-01'),
    previsao_termino: new Date('2024-10-01'),
    situacaoObra: 'finalizado',
    pdf_orcamento: '@/pdf/pdf1.pdf',
    pdf_contrato: '@/pdf/pdf2.pdf'
  },
  {
    id: 2,
    num_orcam: 1046,
    cliente: 'Cliente 2',
    obra: 'Obra 2',
    valor_fechado: 1289544,
    valor_estip_gasto: 910000,
    data_emissao: new Date('2024-03-14'),
    inicio_execucao: new Date('2024-04-02'),
    previsao_termino: new Date('2024-10-02'),
    situacaoObra: 'finalizado',
    pdf_orcamento: '@/pdf/pdf1.pdf',
    pdf_contrato: '@/pdf/pdf2.pdf'
  },
  {
    id: 3,
    num_orcam: 1047,
    cliente: 'Cliente 3',
    obra: 'Obra 3',
    valor_fechado: 1389544,
    valor_estip_gasto: 920000,
    data_emissao: new Date('2024-03-15'),
    inicio_execucao: new Date('2024-04-03'),
    previsao_termino: new Date('2024-10-03'),
    situacaoObra: 'em obra',
    pdf_orcamento: '@/pdf/pdf1.pdf',
    pdf_contrato: '@/pdf/pdf2.pdf'
  },
  {
    id: 4,
    num_orcam: 1048,
    cliente: 'Cliente 4',
    obra: 'Obra 4',
    valor_fechado: 1489544,
    valor_estip_gasto: 930000,
    data_emissao: new Date('2024-03-16'),
    inicio_execucao: new Date('2024-04-04'),
    previsao_termino: new Date('2024-10-04'),
    situacaoObra: 'em obra',
    pdf_orcamento: '@/pdf/pdf1.pdf',
    pdf_contrato: '@/pdf/pdf2.pdf'
  },
  {
    id: 5,
    num_orcam: 1049,
    cliente: 'Cliente 5',
    obra: 'Obra 5',
    valor_fechado: 1589544,
    valor_estip_gasto: 940000,
    data_emissao: new Date('2024-03-17'),
    inicio_execucao: new Date('2024-04-05'),
    previsao_termino: new Date('2024-10-05'),
    situacaoObra: 'em obra',
    pdf_orcamento: '@/pdf/pdf1.pdf',
    pdf_contrato: '@/pdf/pdf2.pdf'
  },
  {
    id: 6,
    num_orcam: 1050,
    cliente: 'Cliente 6',
    obra: 'Obra 6',
    valor_fechado: 1689544,
    valor_estip_gasto: 950000,
    data_emissao: new Date('2024-03-18'),
    inicio_execucao: new Date('2024-04-06'),
    previsao_termino: new Date('2024-10-06'),
    situacaoObra: 'em obra',
    pdf_orcamento: '@/pdf/pdf1.pdf',
    pdf_contrato: '@/pdf/pdf2.pdf'
  }
];