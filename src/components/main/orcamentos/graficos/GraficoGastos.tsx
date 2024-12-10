// src/components/GraficoGastos.tsx

import React from 'react';
import styles from './GraficoGastos.module.css'; // Importando CSS Module

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
  const gastoTotal = gasto_material_obra + gasto_servico_obra + gasto_combustivel + gasto_alimentacao;
  const percentualDisponivel = (valor_estip_gasto - gastoTotal) / valor_estip_gasto * 100;

  // Função para calcular os ângulos de cada segmento
  const calculateAngles = (percentages) => {
    const angles = [];
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
  const createPath = (startAngle, endAngle) => {
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
    '#4682B4', // Gasto Serviço
    '#5F9EA0', // Gasto Combustível
    '#6495ED', // Gasto Alimentação
    '#D3D3D3', // Disponível
  ];

  return (
    <div>
      <svg width="220" height="220" viewBox="0 0 220 220" aria-labelledby="graficoGastosTitle graficoGastosDesc">
        <title id="graficoGastosTitle">Gráfico de Gastos</title>
        <desc id="graficoGastosDesc">Um gráfico de pizza mostrando a distribuição de gastos em relação ao valor estipulado.</desc>
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
        <h3>Legenda</h3>
        <ul className={styles.listaLegenda}>
          <li><span className={styles.circulo} style={{ backgroundColor: colors[0] }}></span> Gasto Material: {porcentagens.GastoMaterial.toFixed(2)}%</li>
          <li><span className={styles.circulo} style={{ backgroundColor: colors[1] }}></span> Gasto Serviço: {porcentagens.GastoServiço.toFixed(2)}%</li>
          <li><span className={styles.circulo} style={{ backgroundColor: colors[2] }}></span> Gasto Combustível: {porcentagens.GastoCombustível.toFixed(2)}%</li>
          <li><span className={styles.circulo} style={{ backgroundColor: colors[3] }}></span> Gasto Alimentação: {porcentagens.GastoAlimentação.toFixed(2)}%</li>
          <li><span className={styles.circulo} style={{ backgroundColor: colors[4] }}></span> Disponível: {percentualDisponivel.toFixed(2)}%</li>
        </ul>
      </div>
    </div>
  );
};