'use client'

// src/data/get/GetDataComponent.tsx
import React, { useContext, useCallback, useMemo } from 'react';
import { executeGet } from '@/data/get/executeGet';
import ContextMaster from '@/context/ContextProvider';

//cálculos
import { calcPorDia } from '@/data/get/calcPorDia';
import { calcQuinzenal } from './calcQuinzenal';
import { calcMensal } from '@/data/get/calcMensal';
import { calcAnual } from '@/data/get/calcAnual';

type TGetDatComp = {
  arrCalcDia: {
    dia: number,
    mes: number,
    ano: number,
  }[],
};

export const GetDataComponent = ({ arrCalcDia }: TGetDatComp) => {
  const { dataTblTest, setDataTblTest } = useContext(ContextMaster);
  const [loading, setLoading] = React.useState(false);

  // Calcula baseado nos parâmetros dinâmicos
  const diasResult = useMemo(() => {
  return Array.isArray(dataTblTest) && dataTblTest.length > 0 
    ? calcPorDia(dataTblTest, arrCalcDia) 
    : [{ totalAberto: 0 }]; // Valor padrão se não houver dados
  }, [dataTblTest, arrCalcDia]);

  // Calcula as quinzenas apenas se dataTblTest for um array válido
  const quinzenaResult = useMemo(() => {
    return Array.isArray(dataTblTest) && dataTblTest.length > 0 
      ? calcQuinzenal(dataTblTest) 
      : [];
  }, [dataTblTest]);

  // Calcula as mensalidades apenas se dataTblTest for um array válido
  const mesResult = useMemo(() => {
    return Array.isArray(dataTblTest) && dataTblTest.length > 0 
      ? calcMensal(dataTblTest) : [];
  }, [dataTblTest]);

  // Calcula os anuais apenas se dataTblTest for um array válido
  const anoResult = useMemo(() => {
    return Array.isArray(dataTblTest) && dataTblTest.length > 0 
      ? calcAnual(dataTblTest) 
      : [];
  }, [dataTblTest]);

  console.log("Resultados customizado:", diasResult);
  console.log("Resultados das Quinzenas:", quinzenaResult);
  console.log("Resultados Mensais:", mesResult);
  console.log("Resultado Anual:", anoResult);

  const handleFetchData = useCallback(async () => {
    setLoading(true);
    await executeGet(setDataTblTest);
    setLoading(false);
  }, [setDataTblTest]);

  return (<>
      <div>
        <button onClick={handleFetchData}>Acessar dados</button>
        {loading && <div>Carregando dados...</div>}
        {Array.isArray(dataTblTest) && dataTblTest.map((data) => (
          <div key={data.id}>
            {data.id} - {data.valor} - {data.situacao}
          </div>
        ))}
        {dataTblTest && !Array.isArray(dataTblTest) && (
          <div>Dados não disponíveis ou em formato inválido.</div>
        )}
      </div>
      <div>
    </div>
  </>);
};