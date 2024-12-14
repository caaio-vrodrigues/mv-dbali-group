// src/components/navigation/NavigationMenu.tsx

//React
import React, { useContext } from 'react';

//context
import ContextMaster from '@/context/ContextProvider';

//styles
import styles from './NavigationMenu.module.css';

// Definindo a interface para as props do componente
interface NavigationMenuProps {
  onClose: (isOpen: boolean) => void; // A função onClose deve receber um booleano
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({ onClose }) => {
  const { setShowOrcamentos } = useContext(ContextMaster);

  return (
    <div className={styles.menu}>
      <button className={styles.closeButton} onClick={() => onClose(false)}>X</button>
      <ul className={styles.menuList}>
        <li>
          <button onClick={() => {}}>Estoque</button>
        </li>
        <li>
          <button onClick={() => setShowOrcamentos(true)}>Orçamentos</button>
        </li>
        <li>
          <button onClick={() => {}}>Fluxo Pagamentos</button>
        </li>
      </ul>
    </div>
  );
};