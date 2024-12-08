'use client'

// src/context/ContextProvider.tsx
import React, { createContext, useState } from 'react';

// Define a interface para os registros de fluxo de pagamentos
interface IFluxoPagamentos {
  doc: string;
  doc_id: number;
  forma_pagamento: string;
  fornecedor: string;
  id: number;
  obra: string;
  observacao: string;
  parcela_atual: number;
  parcelas_totais: number;
  situacao_pagamento: string;
  valor: number;
}

// Define a interface para os registros de teste
interface ITestData {
  id: number;
  fornecedor: string;
  valor: number;
  situacao: string;
  data: Date; // Pode ser string, dependendo de como você manipula datas
}

type TContextMasterProvider = {
  children: React.ReactNode;
};

type TContextMaster = {
  showOrcamentos: boolean;
  dataTblFluxoPagamentos: IFluxoPagamentos[] | null;
  dataTblTest: ITestData[] | null;
  setShowOrcamentos: React.Dispatch<boolean>;
  setDataTblFluxoPagamentos: React.Dispatch<React.SetStateAction<IFluxoPagamentos[] | null>>;
  setDataTblTest: React.Dispatch<React.SetStateAction<ITestData[] | null>>;
};

const ContextMaster = createContext<TContextMaster>({
  showOrcamentos: false,
  dataTblFluxoPagamentos: null,
  dataTblTest: null,
  setShowOrcamentos: () => {},
  setDataTblFluxoPagamentos: () => {},
  setDataTblTest: () => {},
});

export default ContextMaster;

export function ContextMasterProvider({ children }: TContextMasterProvider): React.ReactNode {
  //testes
  const [dataTblFluxoPagamentos, setDataTblFluxoPagamentos] = useState<IFluxoPagamentos[] | null>(null);
  const [dataTblTest, setDataTblTest] = useState<ITestData[] | null>(null);

  //programa
  const [showOrcamentos, setShowOrcamentos] = useState<boolean>(false);

  return (
    <ContextMaster.Provider value={{
      dataTblFluxoPagamentos, setDataTblFluxoPagamentos,
      dataTblTest, setDataTblTest,
      showOrcamentos, setShowOrcamentos,
    }}>
      {children}
    </ContextMaster.Provider>
  );
};