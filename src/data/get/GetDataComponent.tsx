'use client';

// src/data/get/GetDataComponent.tsx
import React, { useContext, useCallback } from 'react';
import { executeGet } from '@/data/get/executeGet';
import ContextMaster from '@/context/ContextProvider'; // Importando o contexto

export const GetDataComponent = () => {
  const { dataTblTest, setDataTblTest } = useContext(ContextMaster); // Obtendo a função do contexto
  const [loading, setLoading] = React.useState(false); // Estado para controle de loading

  const handleFetchData = useCallback(async () => {
    setLoading(true); // Definindo loading como true ao iniciar a requisição
    await executeGet(setDataTblTest); // Chamando executeGet passando setDataTblTest
    setLoading(false); // Definindo loading como false após a requisição
  }, [setDataTblTest]); // O callback depende do setDataTblTest

  return (
    <div>
      <h1>Dados da Tabela</h1>
      <button onClick={handleFetchData}>Acessar dados</button> {/* Chamando handleFetchData ao clicar */}
      {loading && <div>Carregando dados...</div>} {/* Exibindo mensagem de loading */}
      {dataTblTest?.map((data) => {
        return (
          <div key={data.id}>
            {data.fornecedor} - {data.valor} - {data.situacao}
          </div>
        );
      })}
    </div>
  );
};