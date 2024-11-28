'use client';

// Native
import React, { createContext, useState, useEffect } from 'react';

type TContextMasterProvider = {
  children: React.ReactNode
};

type TContextMaster = {
  data: null | [{
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
  setData: React.Dispatch<React.SetStateAction<null | [{
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
};

const ContextMaster = createContext<TContextMaster>({
  data: null,
  setData: ()=>{}
});

export default ContextMaster;

export function ContextMasterProvider({ 
  children 
}: TContextMasterProvider): React.ReactNode {
  const [data, setData] = useState<null | [{
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

  useEffect(() => {
    const getData = async () => {
      try{
        const response = await fetch('http://localhost:3001/dados');
        console.log(response);
        if(!response.ok){
          throw new Error('Falha ao carregar os dados...');
        };

        const data = await response.json();
        setData(data);
      }catch(error){
        console.error('Falha ao buscar os dados: ', error);
      };
    };

    getData();
  }, []);

  return (
    <ContextMaster.Provider value={{
      data, setData
    }}>
      {children}
    </ContextMaster.Provider>
  );
};