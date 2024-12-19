// components/showPdf.ts

export const showPdf = (pdfFile: string) => {
  // Abre o PDF em uma nova aba
  const newWindow = window.open(pdfFile, '_blank');

  if (newWindow) {
    newWindow.focus();
  } else {
    alert('Por favor, verifique se seu navegador permite pop-ups.');
  }
};