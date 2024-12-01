'use client';

// src/data/get/GetDataComponent.tsx
import React, { useContext, useCallback } from 'react';
import { executeGet } from '@/data/get/executeGet';
import ContextMaster from '@/context/ContextProvider'; // Importando o contexto
import { calcQuinzenal } from './calcQuinzenal';

export const GetDataComponent = () => {
  const { dataTblTest, setDataTblTest } = useContext(ContextMaster); // Obtendo a função do contexto
  const [loading, setLoading] = React.useState(false); // Estado para controle de loading

  console.log("Dados recebidos:", dataTblTest); // Registro dos dados recebidos

  // Verifique a estrutura de dataTblTest e calcule as quinzenas
  const quinzenaResult = Array.isArray(dataTblTest) && dataTblTest.length > 0 ? 
    calcQuinzenal(dataTblTest) : [];
    
  console.log("Resultados das Quinzenas:", quinzenaResult); // Exibir resultados formatados

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
      {Array.isArray(dataTblTest) && dataTblTest.map((data) => { // Verificando se dataTblTest é um array
        return (
          <div key={data.id}>
            {data.id} - {data.valor} - {data.situacao}
          </div>
        );
      })}
      {dataTblTest && !Array.isArray(dataTblTest) && ( // Mensagem para caso dataTblTest não seja um array
        <div>Dados não disponíveis ou em formato inválido.</div>
      )}
    </div>
  );
};