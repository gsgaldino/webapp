import Provider from '../Provider';

import styles from './index.module.css';

export default function Main() {
  return (
    <div className={styles.main}>
      <Provider>

        <h3>Tenha o seu documento traduzido, sem dores de cabeça e de forma <span>automática</span>.</h3>
        <p>Selecione o idioma e envie seu arquivo para um orçamento 100% gratuito!</p>

      </Provider>
    </div>
  );
};
