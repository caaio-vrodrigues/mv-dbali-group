'use client'
// src/main/graphicPreview/GraphicPreview.tsx
import React, { useEffect } from 'react';
import styles from './GraphicPreview.module.css';

export const GraphicPreview = () => {
  // Simulando dados da tabela test_tbl
  const data = [12, 19, 3, 5, 2, 3]; // Dados do gráfico (simulados)
  const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']; // Rótulos para as barras
  const barWidth = 50; // Largura da barra
  const padding = 10; // Espaçamento entre as barras
  const maxBarHeight = 200; // Altura máxima das barras
  const canvasId = 'myCanvas';

  // Usando useEffect para desenhar o gráfico após a montagem do componente
  useEffect(() => {
    const drawBars = () => {
      const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null; // Pode ser nulo
      if (!canvas) {
        console.error('Canvas not found'); // Verifica se o canvas existe
        return;
      }

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        console.error('Failed to get canvas context'); // Verifica se o contexto foi obtido
        return;
      }

      const baseLine = canvas.height - 30; // Linha de base para as barras

      for (let i = 0; i < data.length; i++) {
        const barHeight = (data[i] / Math.max(...data)) * maxBarHeight; // Calcula a altura da barra em proporção ao maior valor
        ctx.fillStyle = getColor(i); // Define a cor da barra
        ctx.fillRect(i * (barWidth + padding), baseLine - barHeight, barWidth, barHeight); // Desenha a barra
        ctx.fillStyle = "#000"; // Cor do texto
        ctx.fillText(labels[i], i * (barWidth + padding), baseLine + 15); // Desenha o rótulo abaixo da barra
      }
    };

    // Função para obter cores diferentes para as barras
    const getColor = (index: number) => {
      const colors = [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ];
      return colors[index % colors.length];
    };

    drawBars(); // Chama a função para desenhar as barras
  }, []); // Array de dependências vazio para executar apenas na montagem

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Gráfico de Barras Simples</h2>
      <canvas id={canvasId} width="600" height="400" className={styles.canvas}></canvas>
    </div>
  );
};