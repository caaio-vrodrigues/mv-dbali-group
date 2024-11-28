import { error } from "console";

export const getData = async () => {
  try{
    const response = await fetch('http://localhost:3001/dados');
    if(!response.ok){
      throw new Error('Falha ao carregar os dados...');
    };

    const data = await response.json();
    return data;
  }catch{
    console.error('Erro ao obter os dados: ', error)
  };
};