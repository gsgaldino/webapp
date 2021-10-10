import Header from '../../components/Header';
import Main from '../../components/Main';
import Background from '../../components/Background';
import FileUpload from '../../components/FileUpload';
import Advantages from '../../components/Advantages';
import Form from '../../components/Form';
import Footer from '../../components/Footer';

import arrowDownIcon from '../../assets/arrow-down.svg';

import styles from './index.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />

      <Background>
        <Main />
        <FileUpload />

        <div className={styles.arrowDown}>
          <img src={arrowDownIcon} alt="seta para baixo" />
        </div>

        <Advantages />
        <Form />
      </Background>

      <Footer />
    </div>
  )
};
