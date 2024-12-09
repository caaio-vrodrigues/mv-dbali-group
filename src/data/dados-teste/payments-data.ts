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
    title: 'HOJE',
    value: 15082.40,
    startPeriod: '0/00/000',
  },
  {
    id: 2,
    title: 'AMANHÃ',
    value: 24894.33,
    startPeriod: '0/00/000',
  },
  {
    id: 3,
    title: 'SEMANA',
    value: 184811.25,
    startPeriod: '0/00/000',
    endPeriod: '0/00/00'
  },
  {
    id: 4,
    title: 'PRÓXIMA SEMANA',
    value: 355912.81,
    startPeriod: '0/00/000',
    endPeriod: '0/00/00'
  },
  {
    id: 5,
    title: 'QUINZENA',
    value: 184811.25,
    startPeriod: '0/00/000',
    endPeriod: '0/00/00'
  },
  {
    id: 6,
    title: 'MÊS',
    value: 355912.81,
    startPeriod: '0/00/000',
    endPeriod: '0/00/00'
  }
];