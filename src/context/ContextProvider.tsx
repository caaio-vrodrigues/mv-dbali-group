'use client';

// Native
import React, { createContext, useState } from 'react';

type TContextMasterProvider = {
  children: React.ReactNode
};

type TContextMaster = {
  dataTblFluxoPagamentos: null | [{
    doc: string,
    doc_id: number,
    forma_pagamento: string,
    fornecedor: string,
    id: number,
    obra: string,
    observacao: string,
    parcela_atual: number,
    parcelas_totais: number,
    situacao_pagamento: string,
    valor: number,
  }];
  dataTblTest: null | [{
    id: number,
    fornecedor: string,
    valor: number,
    situacao: string,
    data: Date,
  }];
  setDataTblFluxoPagamentos: React.Dispatch<React.SetStateAction<null | [{
    doc: string,
    doc_id: number,
    forma_pagamento: string,
    fornecedor: string,
    id: number,
    obra: string,
    observacao: string,
    parcela_atual: number,
    parcelas_totais: number,
    situacao_pagamento: string,
    valor: number,
  }]>>;
  setDataTblTest: React.Dispatch<React.SetStateAction<null | [{
    id: number,
    fornecedor: string,
    valor: number,
    situacao: string,
    data: Date,
  }]>>;
};

const ContextMaster = createContext<TContextMaster>({
  dataTblFluxoPagamentos: null,
  setDataTblFluxoPagamentos: () => {},
  dataTblTest: null,
  setDataTblTest: () => {},
});

export default ContextMaster;

export function ContextMasterProvider({ 
  children 
}: TContextMasterProvider): React.ReactNode {
  
  const [dataTblFluxoPagamentos, setDataTblFluxoPagamentos] = useState<null | [{
    doc: string,
    doc_id: number,
    forma_pagamento: string,
    fornecedor: string,
    id: number,
    obra: string,
    observacao: string,
    parcela_atual: number,
    parcelas_totais: number,
    situacao_pagamento: string,
    valor: number,
  }]>(null);

  const [dataTblTest, setDataTblTest] = useState<null | [{
    id: number,
    fornecedor: string,
    valor: number,
    situacao: string,
    data: Date,
  }]>(null);

  return (
    <ContextMaster.Provider value={{
      dataTblFluxoPagamentos, setDataTblFluxoPagamentos, dataTblTest, setDataTblTest
    }}>
      {children}
    </ContextMaster.Provider>
  );
};