type TPaymentsData = {
  id: number,
  title: string,
  msg: string,
  value: number,
  startPeriod: string,
  endPeriod?: string
}[];

export const paymentsData:TPaymentsData = [
  {
    id: 0,
    title: 'Title 0',
    msg: 'Mensagem referente ao valor que deverá ser pago até a data referenciada',
    value: 0.00,
    startPeriod: '0/00/000',
  },
  {
    id: 1,
    title: 'Title 0',
    msg: 'Mensagem referente ao valor que deverá ser pago até a data referenciada',
    value: 0.00,
    startPeriod: '0/00/000',
  },
  {
    id: 2,
    title: 'Title 0',
    msg: 'Mensagem referente ao valor que deverá ser pago até a data referenciada',
    value: 0.00,
    startPeriod: '0/00/000',
    endPeriod: '0/00/00'
  },
  {
    id: 3,
    title: 'Title 0',
    msg: 'Mensagem referente ao valor que deverá ser pago até a data referenciada',
    value: 0.00,
    startPeriod: '0/00/000',
    endPeriod: '0/00/00'
  }
];