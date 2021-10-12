import * as React from 'react';

import Provider from '../Provider';
import { Grid, TextField, } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import styles from './index.module.css';

export default function Form() {
  const [loading] = React.useState(false);

  const handleChange = () => {
    return;
  };

  const inputStyle= {
    background: 'var(--white)',
    borderRadius: '4px'
  };

  return (
    <div className={styles.form}>
      <Provider>
        <div className={styles.title}>
          <h3>Contato</h3>
          <p>Entre em contato conosco!</p>
        </div>

        <form onSubmit={() => { }}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <TextField
                type="text"
                label="Nome e sobrenome"
                fullWidth
                variant="filled"
                filled
                margin="dense"
                onChange={handleChange}
                name="nome_completo"
                required
                style={inputStyle}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                label="E-mail"
                fullWidth
                variant="filled"
                margin="dense"
                style={inputStyle}
                onChange={handleChange}
                name="email"
                required
              />
            </Grid>
            <Grid item xs={6} pr={0.5}>
              <TextField
                type="text"
                label="Cidade"
                fullWidth
                variant="filled"
                margin="dense"
                style={inputStyle}
                onChange={handleChange}
                name="city"
                required
              />
            </Grid>
            <Grid item xs={6} pl={0.5}>
              <TextField
                type="text"
                label="Telefone"
                fullWidth
                variant="filled"
                margin="dense"
                style={inputStyle}
                onChange={handleChange}
                name="mobilephone"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                label="Mensagem"
                fullWidth
                variant="filled"
                margin="dense"
                onChange={handleChange}
                multiline
                rows={6}
                name="mensagem"
                style={inputStyle}
                required
              />
            </Grid>

            <Grid item xs={12} style={{ margin: '10px auto' }}>
              <LoadingButton
                style={{ 
                  position: 'relative',
                  color: 'var(--white)' 
                }}
                color="secondary"
                type="submit"
                variant="contained"
                fullWidth
                loading={loading}
              >ENVIAR</LoadingButton>
            </Grid>

          </Grid>

        </form>
      </Provider>
    </div>
  );
};
