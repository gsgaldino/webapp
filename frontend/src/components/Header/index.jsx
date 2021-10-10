import * as React from 'react';
import Drawer from '@mui/material/Drawer';

import logo from '../../assets/logo.svg';
import hamburger from '../../assets/hamburger.svg';
import Waves from './Waves';

import styles from './index.module.css';

export default function Header() {
  const [state, setState] = React.useState(false);

  const handleDrawer = () => {
    setState(!state);
  };

  return (
    <React.Fragment>
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <img
              src={logo}
              alt="mais traduções"
              className={styles.logo}
            />
          </div>
          <div className={styles.item}>
            <img
              className={styles.hamburger}
              src={hamburger}
              alt="hamburger icon"
              onClick={handleDrawer}
            />
            <nav className={styles.menu}>
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
        </div>
      </div>
      <Waves />

      <Drawer
        anchor={"right"}
        open={state}
        onClose={handleDrawer}
      >
        <nav className={styles.menuDrawer}>
          {["quem somos", "vantagens", "orçamento", "contato"].map(item => (
            <a
              href={`#${item}`}
              key={item}
            >
              {item}
            </a>
          ))}
        </nav>
      </Drawer>
    </React.Fragment>
  )
};
