import Provider from '../Provider';

import styles from './index.module.css';

export default function Background({ children }) {
  return (
    <div className={styles.background}>
      <Provider>
        {children}
      </Provider>
    </div>
  );
};
