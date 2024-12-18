'use client'

import React, { createContext, useState } from 'react';

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
  showFluxoPagamentos: boolean;
  showFornecedores: boolean;
  showEstoque: boolean;
  showOrcamentos: boolean;
  dataTblFluxoPagamentos: IFluxoPagamentos[] | null;
  dataTblTest: ITestData[] | null;
  setShowFluxoPagamentos: React.Dispatch<boolean>;
  setShowFornecedores: React.Dispatch<boolean>;
  setShowEstoque: React.Dispatch<boolean>;
  setShowOrcamentos: React.Dispatch<boolean>;
  setDataTblFluxoPagamentos: React.Dispatch<React.SetStateAction<IFluxoPagamentos[] | null>>;
  setDataTblTest: React.Dispatch<React.SetStateAction<ITestData[] | null>>;
};

const ContextMaster = createContext<TContextMaster>({
  showFluxoPagamentos: false,
  showFornecedores: false,
  showEstoque: false,
  showOrcamentos: false,
  dataTblFluxoPagamentos: null,
  dataTblTest: null,
  setShowFluxoPagamentos: ()=>{},
  setShowFornecedores: ()=>{},
  setShowEstoque: ()=>{},
  setShowOrcamentos: ()=>{},
  setDataTblFluxoPagamentos: ()=>{},
  setDataTblTest: ()=>{},
});

export default ContextMaster;

export function ContextMasterProvider({ children }: TContextMasterProvider): React.ReactNode {
  //testes
  const [dataTblFluxoPagamentos, setDataTblFluxoPagamentos] = useState<IFluxoPagamentos[] | null>(null);
  const [dataTblTest, setDataTblTest] = useState<ITestData[] | null>(null);

  //programa
  const [showFluxoPagamentos, setShowFluxoPagamentos] = useState<boolean>(false);
  const [showOrcamentos, setShowOrcamentos] = useState<boolean>(false);
  const [showEstoque, setShowEstoque] = useState<boolean>(false);
  const [showFornecedores, setShowFornecedores] = useState<boolean>(false);

  return (
    <ContextMaster.Provider value={{
      showFluxoPagamentos, setShowFluxoPagamentos,
      dataTblFluxoPagamentos, setDataTblFluxoPagamentos,
      dataTblTest, setDataTblTest,
      showOrcamentos, setShowOrcamentos,
      showEstoque, setShowEstoque,
      showFornecedores, setShowFornecedores
    }}>
      {children}
    </ContextMaster.Provider>
  );
};