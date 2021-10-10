import Provider from '../Provider';

import logo from '../../assets/logo.svg';
import styles from './index.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Provider>
        <img src={logo} alt="logo" />
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <nav className={styles.nav}>
              {["quem somos", "vantagens", "orçamento", "contato"].map(item => (
                <a
                  href={`#${item}`}
                  key={item}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div className={styles.item}>
            <a href="#">política de privacidade</a>
          </div>
        </div>

        <div className={styles.posFooter}>
          <p>Mais Traduções© 2021 - Todos os direitos reservados</p>
        </div>
      </Provider>
    </div>
  );
};