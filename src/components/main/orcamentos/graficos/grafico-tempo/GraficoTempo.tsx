// // src/components/GraficoTempo.tsx

// import React, { useEffect, useState } from 'react';
// import styles from './GraficoTempo.module.css'; // Importando CSS Module

// type TempoProps = {
//   dataInicio: string,
//   prazoTermino: string,
// };

// export const GraficoTempo: React.FC<{ tempo: TempoProps }> = ({ tempo }) => {
//   const { dataInicio, prazoTermino } = tempo;

//   // Função para converter a data no formato dd/mm/yyyy para yyyy-mm-dd
//   const convertDateFormat = (dateStr: string) => {
//     const parts = dateStr.split('/');
//     // Verificação se o formato é válido
//     if (parts.length !== 3) {
//       throw new Error("Data inválida");
//     }
//     return new Date(Date.UTC(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]))); // yyyy, mm (0-indexado), dd
//   };

//   // Estado para armazenar os cálculos de tempo
//   const [tempoCalculado, setTempoCalculado] = useState({
//     tempoGasto: 0,
//     tempoDisponivel: 0,
//     tempoTotal: 0,
//   });

//   useEffect(() => {
//     const calcularTempo = () => {
//       const now = new Date();
//       const inicio = convertDateFormat(dataInicio);
//       const termino = convertDateFormat(prazoTermino);

//       // Verifique se as datas são válidas
//       if (isNaN(inicio.getTime()) || isNaN(termino.getTime())) {
//         console.error("Data de início ou de término inválida");
//         return {
//           tempoGasto: 0,
//           tempoDisponivel: 0,
//           tempoTotal: 0,
//         };
//       }

//       // Verifique se a data de início é anterior à data de término
//       if (inicio >= termino) {
//         console.error("A data de início deve ser anterior à data de término.");
//         return {
//           tempoGasto: 0,
//           tempoDisponivel: 0,
//           tempoTotal: 0,
//         };
//       }

//       const tempoGasto = Math.max(0, Math.min(now.getTime(), termino.getTime()) - inicio.getTime());
//       const tempoTotal = Math.max(0, termino.getTime() - inicio.getTime());
//       const tempoDisponivel = Math.max(0, tempoTotal - tempoGasto);

//       return {
//         tempoGasto,
//         tempoDisponivel,
//         tempoTotal,
//       };
//     };

//     // Chama a função de cálculo e atualiza o estado
//     setTempoCalculado(calcularTempo());
//   }, [dataInicio, prazoTermino]); // Executa quando as datas mudam

//   const { tempoGasto, tempoDisponivel, tempoTotal } = tempoCalculado;

//   // Cálculo da porcentagem de tempo gasto e disponível
//   const porcentagens = {
//     tempoGasto: tempoTotal > 0 ? (tempoGasto / tempoTotal) * 100 : 0,
//     tempoDisponivel: tempoTotal > 0 ? (tempoDisponivel / tempoTotal) * 100 : 0,
//   };

//   // Função para calcular os ângulos de cada segmento
//   const calculateAngles = (percentages: Record<string, number>): [number, number][] => {
//     const angles: [number, number][] = [];
//     let cumulativeAngle = 0;

//     for (const percentage of Object.values(percentages)) {
//       const angle = (percentage / 100) * 360;
//       angles.push([cumulativeAngle, cumulativeAngle + angle]);
//       cumulativeAngle += angle;
//     }

//     return angles;
//   };

//   const angles = calculateAngles(porcentagens);

//   // Função para criar os segmentos do gráfico
//   const createPath = (startAngle: number, endAngle: number): string => {
//     const radius = 100; // Raio do gráfico
//     const x1 = 100 + radius * Math.cos((Math.PI / 180) * startAngle);
//     const y1 = 100 + radius * Math.sin((Math.PI / 180) * startAngle);
//     const x2 = 100 + radius * Math.cos((Math.PI / 180) * endAngle);
//     const y2 = 100 + radius * Math.sin((Math.PI / 180) * endAngle);
//     const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

//     return `M100,100 L${x1},${y1} A${radius},${radius} 0 ${largeArcFlag} 1 ${x2},${y2} Z`;
//   };

//   // Cores para os segmentos
//   const colors = [
//     '#1E90FF', // Tempo Gasto
//     '#32CD32', // Tempo Disponível
//   ];

//   return (
//     <>
//       <svg
//         className={styles.svgGraphic}
//         viewBox="0 0 220 220"
//         aria-labelledby="graficoTempoTitle graficoTempoDesc"
//       >
//         <title id="graficoTempoTitle">Gráfico de Tempo</title>
//         <desc id="graficoTempoDesc">
//           Um gráfico de pizza mostrando a distribuição de tempo gasto e disponível.
//         </desc>
//         {angles.map((angle, index) => (
//           <path
//             key={index}
//             d={createPath(angle[0], angle[1])}
//             fill={colors[index]}
//             className={styles.pieSegment}
//           />
//         ))}
//       </svg>
//       <div className={styles.legenda}>
//         <h2>Dias totais para execução da obra: {(((tempoTotal) / (1000 * 60 * 60) / 24)).toFixed(0)} dias</h2>
//         <ul className={styles.listaLegenda}>
//           <li>
//             <div className={styles.wrapLiInside}>
//               <span
//                 className={styles.circulo}
//                 style={{ backgroundColor: colors[0] }}>
//               </span>
//               <h4>Tempo Gasto: </h4>
//             </div>
//             <p>{((tempoGasto / (1000 * 60 * 60) / 24)).toFixed(0)} dias</p>
//             <p className={styles.pPercent}>Percentual equivalente: {porcentagens.tempoGasto.toFixed(2)}%</p>
//           </li>
//           <li>
//             <div className={styles.wrapLiInside}>
//               <span
//                 className={styles.circulo}
//                 style={{ backgroundColor: colors[1] }}>
//               </span>
//               <h4>Tempo Disponível: </h4>
//             </div>
//             <p>{((tempoDisponivel / (1000 * 60 * 60) / 24)).toFixed(0)} dias</p>
//             <p className={styles.pPercent}>Percentual equivalente: {porcentagens.tempoDisponivel.toFixed(2)}%</p>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// };

// src/components/GraficoTempo.tsx

// src/components/GraficoTempo.tsx

// src/components/GraficoTempo.tsx

import React, { useEffect, useState } from 'react';
import styles from './GraficoTempo.module.css'; // Importando CSS Module

type TempoProps = {
  dataInicio: string,
  prazoTermino: string,
};

export const GraficoTempo: React.FC<{ tempo: TempoProps }> = ({ tempo }) => {
  const { dataInicio, prazoTermino } = tempo;

  // Função para converter a data no formato dd/mm/yyyy para yyyy-mm-dd
  const convertDateFormat = (dateStr: string) => {
    const parts = dateStr.split('/');
    if (parts.length !== 3) {
      throw new Error("Data inválida");
    }
    return new Date(Date.UTC(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0])));
  };

  const [tempoCalculado, setTempoCalculado] = useState({
    tempoGasto: 0,
    tempoDisponivel: 0,
    tempoTotal: 0,
  });

  useEffect(() => {
    const calcularTempo = () => {
      const now = new Date();
      const inicio = convertDateFormat(dataInicio);
      const termino = convertDateFormat(prazoTermino);

      if (isNaN(inicio.getTime()) || isNaN(termino.getTime())) {
        console.error("Data de início ou de término inválida");
        return { tempoGasto: 0, tempoDisponivel: 0, tempoTotal: 0 };
      }

      if (inicio >= termino) {
        console.error("A data de início deve ser anterior à data de término.");
        return { tempoGasto: 0, tempoDisponivel: 0, tempoTotal: 0 };
      }

      const tempoGasto = Math.max(0, Math.min(now.getTime(), termino.getTime()) - inicio.getTime());
      const tempoTotal = Math.max(0, termino.getTime() - inicio.getTime());
      const tempoDisponivel = Math.max(0, tempoTotal - tempoGasto);

      return {
        tempoGasto,
        tempoDisponivel,
        tempoTotal,
      };
    };

    setTempoCalculado(calcularTempo());
  }, [dataInicio, prazoTermino]);

  const { tempoGasto, tempoDisponivel, tempoTotal } = tempoCalculado;

  // Cálculo da porcentagem de tempo total e tempo gasto
  const porcentagens = {
    tempoTotal: tempoTotal > 0 ? (tempoTotal / (tempoTotal + tempoGasto)) * 100 : 0, // Total do tempo
    tempoGasto: tempoTotal > 0 ? (tempoGasto / (tempoTotal + tempoGasto)) * 100 : 0, // Gasto
  };

  // Função para calcular os ângulos de cada segmento
  const calculateAngles = (percentages: Record<string, number>): [number, number][] => {
    const angles: [number, number][] = [];
    let cumulativeAngle = 0;

    for (const percentage of Object.values(percentages)) {
      const angle = (percentage / 100) * 360;
      angles.push([cumulativeAngle, cumulativeAngle + angle]);
      cumulativeAngle += angle;
    }

    return angles;
  };

  const angles = calculateAngles(porcentagens);

  // Função para criar os segmentos do gráfico
  const createPath = (startAngle: number, endAngle: number): string => {
    const radius = 100; // Raio do gráfico
    const x1 = 100 + radius * Math.cos((Math.PI / 180) * startAngle);
    const y1 = 100 + radius * Math.sin((Math.PI / 180) * startAngle);
    const x2 = 100 + radius * Math.cos((Math.PI / 180) * endAngle);
    const y2 = 100 + radius * Math.sin((Math.PI / 180) * endAngle);
    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

    return `M100,100 L${x1},${y1} A${radius},${radius} 0 ${largeArcFlag} 1 ${x2},${y2} Z`;
  };

  // Cores para os segmentos
  const colors = [
    '#e8e6a0', // Tempo Total
    '#1E90FF'  // Tempo Gasto
  ];

  const diasRestantes = tempoDisponivel / (1000 * 60 * 60 * 24); // Converte de milissegundos para dias

  return (
    <>
      <svg
        className={styles.svgGraphic}
        viewBox="0 0 220 220"
        aria-labelledby="graficoTempoTitle graficoTempoDesc"
      >
        <title id="graficoTempoTitle">Gráfico de Tempo</title>
        <desc id="graficoTempoDesc">
          Um gráfico de pizza mostrando a distribuição do tempo total para a obra e o tempo gasto.
        </desc>
        {angles.map((angle, index) => (
          <path
            key={index}
            d={createPath(angle[0], angle[1])}
            fill={colors[index]}
            className={styles.pieSegment}
          />
        ))}
      </svg>
      <div className={styles.legenda}>
        <h2>Dias restantes para execução da obra: {diasRestantes.toFixed(0)} dias</h2>
        <ul className={styles.listaLegenda}>
          <li>
            <div className={styles.wrapLiInside}>
              <span
                className={styles.circulo}
                style={{ backgroundColor: colors[0] }}>
              </span>
              <h4>Tempo Total: </h4>
            </div>
            <p>{(tempoTotal / (1000 * 60 * 60 * 24)).toFixed(0)} dias</p>
            <p className={styles.pPercent}>Percentual equivalente: {porcentagens.tempoTotal.toFixed(2)}%</p>
          </li>
          <li>
            <div className={styles.wrapLiInside}>
              <span
                className={styles.circulo}
                style={{ backgroundColor: colors[1] }}>
              </span>
              <h4>Tempo Gasto: </h4>
            </div>
            <p>{(tempoGasto / (1000 * 60 * 60 * 24)).toFixed(0)} dias</p>
            <p className={styles.pPercent}>Percentual equivalente: {porcentagens.tempoGasto.toFixed(2)}%</p>
          </li>
        </ul>
      </div>
    </>
  );
};