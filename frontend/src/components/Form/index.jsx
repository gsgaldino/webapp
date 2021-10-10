import * as React from 'react';

import Provider from '../Provider';
import { Button, Grid, TextField, } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import styles from './index.module.css';

export default function Form() {
  const [loading, setLoading] = React.useState(false);

  const handleChange = () => {
    return;
  };

  return (
    <div className={styles.form}>
      <Provider>
        <form onSubmit={() => {}}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <TextField
                type="text"
                label="Nome completo"
                fullWidth
                variant="filled"
                filled                
                margin="dense"
                onChange={handleChange}
                name="nome_completo"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="text"
                label="Nome da IES"
                fullWidth
                variant="filled"
                margin="dense"
                onChange={handleChange}
                style={{ marginRight: '6px' }}
                name="company"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="email"
                label="E-mail"
                fullWidth
                variant="filled"
                margin="dense"
                style={{ marginLeft: '6px' }}
                onChange={handleChange}
                name="email"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="text"
                label="Cidade"
                fullWidth
                variant="filled"
                margin="dense"
                style={{ marginRight: '6px' }}
                onChange={handleChange}
                name="city"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="text"
                label="Telefone"
                fullWidth
                variant="filled"
                margin="dense"
                style={{ marginLeft: '8px' }}
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
                required
              />
            </Grid>

            <Grid item xs={12} style={{ margin: '10px auto' }}>
              <LoadingButton 
                color="secondary" 
                type="submit" 
                variant="contained" 
                fullWidth 
                style={{ position: 'relative' }}
                loading={loading}
              >ENVIAR</LoadingButton>
            </Grid>

          </Grid>

        </form>
      </Provider>
    </div>
  );
};
