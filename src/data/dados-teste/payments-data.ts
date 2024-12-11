type TPaymentsData = {
  id: number,
  title: string,
  value: number,
  startPeriod: string,
  endPeriod?: string
}[];

export const paymentsData:TPaymentsData = [
  {
    id: 1,
    title: 'Hoje',
    value: 15082.40,
    startPeriod: '0/00/000',
  },
  {
    id: 2,
    title: 'Amanhã',
    value: 24894.33,
    startPeriod: '0/00/000',
  },
  {
    id: 3,
    title: 'Semana',
    value: 184811.25,
    startPeriod: '0/00/000',
    endPeriod: '0/00/00'
  },
  {
    id: 4,
    title: 'Próxima Semana',
    value: 355912.81,
    startPeriod: '0/00/000',
    endPeriod: '0/00/00'
  },
  {
    id: 5,
    title: 'Quinzena',
    value: 184811.25,
    startPeriod: '0/00/000',
    endPeriod: '0/00/00'
  },
  {
    id: 6,
    title: 'Mês',
    value: 355912.81,
    startPeriod: '0/00/000',
    endPeriod: '0/00/00'
  }
];