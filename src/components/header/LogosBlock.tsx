import Image from "next/image";
import logoMV from '@/img/logo-mv.png';
import logoDbali from '@/img/dbali-logo.png';

type TLogosBlock = {
  style: {style1: string, style2: string},
};

export const LogosBlock = ({ style: {style1, style2} }: TLogosBlock) => 
  <div className={`${style1}, ${style2}`}>
    <Image src={logoMV} alt="Logo MV"/>
    <Image src={logoDbali} alt="Logo D'Bali"/>
  </div>