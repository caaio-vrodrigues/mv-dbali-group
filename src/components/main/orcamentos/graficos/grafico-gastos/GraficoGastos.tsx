// src/components/GraficoGastos.tsx

import React from 'react';
import styles from './GraficoGastos.module.css'; // Importando CSS Module

//utils
import { formatMoeda } from '@/utils/formatMoeda';

type GastoProps = {
  valor_fechado: number,
  valor_estip_gasto: number,
  gasto_material_obra: number,
  gasto_servico_obra: number,
  gasto_combustivel: number,
  gasto_alimentacao: number,
};

export const GraficoGastos: React.FC<{ gastos: GastoProps }> = ({ gastos }) => {
  const {
    valor_estip_gasto,
    gasto_material_obra,
    gasto_servico_obra,
    gasto_combustivel,
    gasto_alimentacao,
  } = gastos;

  // Cálculo da porcentagem de cada gasto em relação ao valor estipulado
  const porcentagens = {
    GastoMaterial: (gasto_material_obra / valor_estip_gasto) * 100,
    GastoServiço: (gasto_servico_obra / valor_estip_gasto) * 100,
    GastoCombustível: (gasto_combustivel / valor_estip_gasto) * 100,
    GastoAlimentação: (gasto_alimentacao / valor_estip_gasto) * 100,
  };

  // Cálculo do percentual restante disponível
  const gastoTotal = gasto_material_obra + gasto_servico_obra +
    gasto_combustivel + gasto_alimentacao;

  const percentualDisponivel = 
    ((valor_estip_gasto - gastoTotal) / valor_estip_gasto) * 100;

  const valorDisponivel = valor_estip_gasto - gastoTotal;

  // Função para calcular os ângulos de cada segmento
  const calculateAngles = (
    percentages: Record<string, number>
  ): [number, number][] => {
    const angles: [number, number][] = [];
    let cumulativeAngle = 0;

    for (const percentage of Object.values(percentages)) {
      const angle = (percentage / 100) * 360;
      angles.push([cumulativeAngle, cumulativeAngle + angle]);
      cumulativeAngle += angle;
    }

    return angles;
  };

  const angles = calculateAngles({
    ...porcentagens,
    'Disponível': percentualDisponivel,
  });

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
    '#1E90FF', // Gasto Material
    '#187741', // Gasto Serviço
    '#8b3535', // Gasto Combustível
    '#8d7408', // Gasto Alimentação
    '#e8e6a0', // Disponível
  ];

  // Legenda do gráfico de gastos
  const legendData = [
    { 
      label: 'Gasto Material', 
      value: porcentagens.GastoMaterial, 
      color: colors[0],
      realValue: gasto_material_obra,
    },
    { 
      label: 'Gasto Serviço', 
      value: porcentagens.GastoServiço, 
      color: colors[1],
      realValue: gasto_servico_obra,
    },
    { 
      label: 'Gasto Combustível', 
      value: porcentagens.GastoCombustível, 
      realValue: gasto_combustivel,
      color: colors[2],
    },
    { 
      label: 'Gasto Alimentação', 
      value: porcentagens.GastoAlimentação, 
      realValue: gasto_alimentacao,
      color: colors[3],
    },
    { 
      label: 'Disponível', 
      value: percentualDisponivel, 
      realValue: valorDisponivel,
      color: colors[4],
    },
  ];

  return (
    <div>
      <svg
        width="220"
        height="220"
        viewBox="0 0 220 220"
        aria-labelledby="graficoGastosTitle graficoGastosDesc"
      >
        <title id="graficoGastosTitle">Gráfico de Gastos</title>
        <desc id="graficoGastosDesc">
          Um gráfico de pizza mostrando a distribuição de gastos em relação
          ao valor estipulado.
        </desc>
        {angles.map((angle, index) => (
          <path
            key={index}
            d={createPath(angle[0], angle[1])}
            fill={colors[index]}
            className={styles.pieSegment} // Classe do CSS Module
          />
        ))}
      </svg>
      <div className={styles.legenda}>
        <ul className={styles.listaLegenda}>
          {legendData.map((item, index) => (
            <li key={index}>
              <div className={styles.wrapLiInside}>
                <span
                  className={styles.circulo}
                  style={{ backgroundColor: item.color }}>
                </span>
                <h4>{`${item.label}: `}</h4>
              </div>
              <p>R$ {formatMoeda(item.realValue)}</p>
              <p>{item.value.toFixed(2)}%</p>
            </li>
          ))}
        </ul>
        <h2>Gastos totais: {formatMoeda(gastoTotal)}</h2>
      </div>
    </div>
  );
};