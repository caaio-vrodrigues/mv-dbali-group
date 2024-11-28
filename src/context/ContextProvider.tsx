'use client';

// Native
import React, { createContext, useState, useEffect } from 'react';

type TContextMasterProvider = {
  children: React.ReactNode
};

type TContextMaster = {
  data: any
  setData: (data: any) => any
};

const ContextMaster = createContext<TContextMaster>({
  data: null,
  setData(){},
});

export default ContextMaster;

export function ContextMasterProvider({ 
  children 
}: TContextMasterProvider): React.ReactNode {
  const [data, setData] = useState<any>(null);

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

















//////////////////////////////

// import { error } from "console";

// //native
// import React, { createContext, useState, useContext, useEffect } from "react"

// // type TContexProvider = {
// //   children: React.ReactNode
// // };

// const ContextMaster = createContext();

// export const ContextProvider = ({ children }) => {
//   const [data, setData] = useState();

//   useEffect(() => {
//     const getData = async () => {
//       try{
//         const response = await fetch('http://localhost:3000/dados');
//         if(!response.ok){
//           throw new Error('Falhar ao carregar os dados...');
//         };

//         const data = await response.json();
//         setData(data);
//       }catch{
//         console.error('Erro ao acessar os dados: ', error);
//       };
//     }
//     getData();
//   }, []);

//   return(
//     <ContextMaster.Provider value={data}>
//       {children}
//     </ContextMaster.Provider>
//   )
// };

// export const useContextProvider = () => {
//   return useContext(ContextMaster);
// };