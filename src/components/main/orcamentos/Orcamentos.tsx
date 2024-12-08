import { useContext } from 'react';

//context
import ContextMaster from '@/context/ContextProvider';

export const Orcamentos = () => {
  const { showOrcamentos, setShowOrcamentos } = useContext(ContextMaster)
  return(
  <section>
    <button onClick={()=>setShowOrcamentos(!showOrcamentos)}>Voltar</button>
    Componente Orcamentos Here!
  </section>);
};