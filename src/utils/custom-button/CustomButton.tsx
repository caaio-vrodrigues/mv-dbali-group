// src/utils/tooltipe/Tooltipe.tsx

import { Dispatch, SetStateAction } from "react";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import styles from './CustomButton.module.css'; 

type TTooltipe = {
  styleButton?: string;
  styleImg: string;
  img: string | StaticImageData;
  altSrc: string;
  msgToolTipe: string;
  onClick?: Dispatch<SetStateAction<boolean>>,
  tooltipPosisition?: 'top' | 'bottom'; 
};

export const CustomButton = ({ 
  styleImg, img, altSrc, msgToolTipe, onClick = ()=>{}, tooltipPosisition, styleButton
  }: TTooltipe) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={styles.tooltipWrapper}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}>
      <button 
        className={styleButton}
        onClick={()=>onClick(value => !value)}>
          <Image 
            className={styleImg} 
            src={img} alt={altSrc}/>
      </button>
      {isVisible && (
        <span 
          className={`${styles.tooltip} ${tooltipPosisition === 'bottom' && styles.tooltipBottom}`}>
            {msgToolTipe}
        </span>
      )}
    </div>
  );
};