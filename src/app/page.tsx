
//components
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/footer/Footer';
import { Main } from '@/components/main/Main';

export default function Home() {
  return (<>
    <Header/>
    <Main/>
    <Footer/>
  </>);
};

// CREATE TABLE test_tbl (
//   id INT PRIMARY KEY AUTO_INCREMENT,
//   fornecedor VARCHAR(255),
//   valor FLOAT,
//   situacao VARCHAR(255)
// );

// ALTER TABLE test_tbl ADD COLUMN data DATE;
