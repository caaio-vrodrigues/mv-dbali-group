// src/components/navigation/NavigationMenu.tsx

import React from 'react';
import styles from './NavigationMenu.module.css';

// Definindo a interface para as props do componente
interface NavigationMenuProps {
  onClose: (isOpen: boolean) => void; // A função onClose deve receber um booleano
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({ onClose }) => {
  return (
    <div className={styles.menu}>
      <button className={styles.closeButton} onClick={() => onClose(false)}>Fechar</button>
      <ul className={styles.menuList}>
        <li><a href="#link1">Link 1</a></li>
        <li><a href="#link2">Link 2</a></li>
        <li><a href="#link3">Link 3</a></li>
      </ul>
    </div>
  );
};