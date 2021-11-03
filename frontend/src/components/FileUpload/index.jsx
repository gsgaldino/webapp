import * as React from 'react';
import {
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Input,
  Snackbar,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LoadingButton from '@mui/lab/LoadingButton';

// import { useDialog } from '../../context/DialogContext';

import arrowIcon from '../../assets/arrow-rotation.svg';
import styles from './index.module.css';

// import api from '../../services/api';

const availableLanguages = [
  {
    language: 'Português (Brasil)',
    prefix: 'pt-br'
  },
  {
    language: 'Espanhol',
    prefix: 'es'
  },
  {
    language: 'Inglês',
    prefix: 'us'
  },
  {
    language: 'Italiano',
    prefix: 'it'
  },
  {
    language: 'Chinês',
    prefix: 'ch'
  }
];

export default function FileUpload() {
  const linkRef = React.useRef();
  const [loading] = React.useState(false);
  const [file, setFile] = React.useState();
  // const { isOpen, setIsOpen } = useDialog();
  const [languages, setLanguages] = React.useState({
    entry: "",
    out: ""
  });
  const [snackbar, setSnackbar] = React.useState({
    open: false,
    message: ""
  });

  const validateSubmit = () => {
    // TODO add o restante das validações
    if (!languages.entry)
      return setSnackbar({
        open: true,
        message: "Informe o idioma de origem."
      });

    if (!languages.out)
      return setSnackbar({
        open: true,
        message: "Informe o idioma de tradução."
      });
  };

  const handleSubmit = async (event) => {
    validateSubmit();
    // TODO - snackbar

    // if (!file)
    //   return alert("Você deve selecionar um arquivo primeiro!");

    // const formData = new FormData();
    // formData.append('fileUpload', file);

    // try {
    //   const response = await fetch("http://localhost:3333/api/pdf/upload", {
    //     method: "POST",
    //     body: formData
    //   });

    //   const blob = await response.blob();
    //   const href = window.URL.createObjectURL(blob);
    //   const a = linkRef.current;
    //   a.download = 'Traduzido.pdf';
    //   a.href = href;
    //   a.click();
    //   a.href = '';

    // } catch (error) {
    //   throw error;
    // }
  };

  const handleSnackbarClose = event => {
    return setSnackbar({
      ...snackbar,
      open: false
    });
  };

  const handleFileInputChange = e => setFile(e.target.files[0]);

  const handleChange = event => {
    const { name, value } = event.target;

    setLanguages({
      ...languages,
      [name]: value
    });
  };

  const selectStyles = {
    background: "#fff",
    borderRadius: "4px"
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleSnackbarClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleSnackbarClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div className={styles.fileUpload}>

      <div className={styles.wrapper}>
        <div className={styles.item}>
          <FormControl variant="filled" fullWidth color="secondary">
            <InputLabel>Seleciona o idioma do arquivo</InputLabel>
            <Select
              value={languages?.entry}
              onChange={handleChange}
              name="entry"
              label="Selecione o idioma do arquivo"
              style={selectStyles}
            >
              {
                availableLanguages.map(item => (
                  <MenuItem value={item.prefix}>{item.language}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </div>

        <div className={`styles.item ${styles.arrow}`}>
          <img
            src={arrowIcon}
            alt="icone setas girando"
          />
          <a ref={linkRef} href="/" style={{ display: "none" }}>insisible</a>
        </div>

        <div className={styles.item}>
          <FormControl variant="filled" color="secondary" fullWidth>
            <InputLabel>Seleciona o idioma de tradução</InputLabel>
            <Select
              value={languages?.out}
              onChange={handleChange}
              name="out"
              label="Selecione o idioma de tradução"
              style={selectStyles}
            >
              {
                availableLanguages.map(item => (
                  <MenuItem value={item.prefix}>{item.language}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </div>
      </div>

      <div className={styles.inputWrapper}>
        <label htmlFor="contained-button-file" className={styles.containerBtn}>
          <Input
            accept="application/pdf"
            id="contained-button-file"
            type="file"
            name="fileUpload"
            onChange={handleFileInputChange}
            style={{
              display: "none"
            }}
          />
          <Button
            variant="outlined"
            component="span"
            color="primary"
            className={styles.cta}
          >
            escolher arquivo
          </Button>
          <p>{file?.name}</p>
        </label>

        <div className={styles.cta}>
          <LoadingButton
            variant="contained"
            color="secondary"
            onClick={handleSubmit}
            loading={loading}
            fullWidth
            style={{
              color: 'var(--white)',
            }}
          >upload pdf</LoadingButton>
        </div>
      </div>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={snackbar.message}
        action={action}
      />
    </div>
  );
};
