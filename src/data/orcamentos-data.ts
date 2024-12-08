import { StaticImport } from "next/dist/shared/lib/get-img-props"; 

// icon-img
import arrowForwardBlack from '@/icon/arrow-forward-black.png'

type TOrcamentossData = {
  id: number,
  h1: string,
  startWork: string,
  endWork: string,
  obra: string
  icon: StaticImport,
  situacaoObra: string
}[];

export const orcamentosData: TOrcamentossData = [
  {
    id: 0,
    h1: 'Orçamento nº 1487',
    startWork: '01/01/2025',
    endWork: '31/06/2025',
    obra: 'Nome/Ref da Obra',
    icon: arrowForwardBlack,
    situacaoObra: 'Em Obra',
  },
  {
    id: 1,
    h1: 'Orçamento nº 1487',
    startWork: '01/01/2025',
    endWork: '31/06/2025',
    obra: 'Nome/Ref da Obra',
    icon: arrowForwardBlack,
    situacaoObra: 'Finalizado',
  },
  {
    id: 2,
    h1: 'Orçamento nº 1487',
    startWork: '01/01/2025',
    endWork: '31/06/2025',
    obra: 'Nome/Ref da Obra',
    icon: arrowForwardBlack,
    situacaoObra: 'Em Obra',
  },
  {
    id: 3,
    h1: 'Orçamento nº 1487',
    startWork: '01/01/2025',
    endWork: '31/06/2025',
    obra: 'Nome/Ref da Obra',
    icon: arrowForwardBlack,
    situacaoObra: 'Finalizado',
  },
  {
    id: 4,
    h1: 'Orçamento nº 1487',
    startWork: '01/01/2025',
    endWork: '31/06/2025',
    obra: 'Nome/Ref da Obra',
    icon: arrowForwardBlack,
    situacaoObra: 'Em Obra',
  },
  {
    id: 5,
    h1: 'Orçamento nº 1487',
    startWork: '01/01/2025',
    endWork: '31/06/2025',
    obra: 'Nome/Ref da Obra',
    icon: arrowForwardBlack,
    situacaoObra: 'Finalizado',
  },
  {
    id: 6,
    h1: 'Orçamento nº 1487',
    startWork: '01/01/2025',
    endWork: '31/06/2025',
    obra: 'Nome/Ref da Obra',
    icon: arrowForwardBlack,
    situacaoObra: 'Em Obra',
  }
];