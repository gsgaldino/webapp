import Provider from '../Provider';

import icon from '../../assets/component.svg';
import checkIcon from '../../assets/check-icon.svg';
import taxasIcon from '../../assets/taxas.svg';

import styles from './index.module.css';

export default function Advantages() {
  return (
    <div className={styles.advantages}>
      <Provider>
        <div className={styles.title}>
          <h3>Vantagens:</h3>
          <p>Por que contratar a Mais Traduções?</p>
        </div>
        <div className={styles.wrapper}>

          <div className={styles.item}>
            <img src={taxasIcon} alt="icon" />
            <div className={styles.text}>
              <p>A melhor taxa do mercado</p>
            </div>
          </div>
          
          <div className={styles.item}>
            <img src={icon} alt="icon" />
            <div className={styles.text}>
              <p>Os melhores tradutores juramentados nas juntas comerciais</p>
            </div>
          </div>

          <div className={styles.item}>
            <img src={checkIcon} alt="icon" />
            <div className={styles.text}>
              <p>Processos 100% automatizados</p>
            </div>
          </div>

        </div>
      </Provider>
    </div>
  );
};
