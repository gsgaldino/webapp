import * as React from 'react';
import {
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Input
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import arrowIcon from '../../assets/arrow-rotation.svg';
import styles from './index.module.css';

const ENDPOINT = "http://localhost:9032/api/pdf/upload";
const METHOD = "POST";

export default function FileUpload() {
  const [loading, setLoading] = React.useState(false);
  const [file, setFile] = React.useState();
  const [languages, setLanguages] = React.useState({
    entry: "",
    out: ""
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!file)
      return alert("Você deve selecionar um arquivo primeiro!");

    setLoading(true);
    try {
      const formData = new FormData();

      formData.append('fileUpload', file);

      const response = await fetch(ENDPOINT, {
        method: METHOD,
        body: formData
      });
      console.log(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleFileInputChange = event => {
    setFile(event.target.files[0]);
  };

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
  }

  return (
    <div className={styles.fileUpload}>

      <div className={styles.wrapper}>
        <div className={styles.item}>
          <FormControl variant="filled" fullWidth color="primary">
            <InputLabel>Seleciona o idioma do arquivo</InputLabel>
            <Select
              value={languages?.entry}
              onChange={handleChange}
              name="entry"
              label="Selecione o idioma do arquivo"
              style={selectStyles}
            >
              <MenuItem value={"pt-br"}>Português (Brasil)</MenuItem>
              <MenuItem value={"usa"}>English</MenuItem>
              <MenuItem value={"es"}>Espanhol</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className={`styles.item ${styles.arrow}`}>
          <img
            src={arrowIcon}
            alt="icone setas girando"
          />
        </div>

        <div className={styles.item}>
          <FormControl variant="filled" color="primary" fullWidth>
            <InputLabel>Seleciona o idioma de tradução</InputLabel>
            <Select
              value={languages?.out}
              onChange={handleChange}
              name="out"
              label="Selecione o idioma de tradução"
              style={selectStyles}
            >
              <MenuItem value={"pt-br"}>Português (Brasil)</MenuItem>
              <MenuItem value={"usa"}>English</MenuItem>
              <MenuItem value={"es"}>Espanhol</MenuItem>
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
            onClick={onSubmit}
            loading={loading}
            fullWidth
            style={{
              color: 'var(--white)',
            }}
          >upload pdf</LoadingButton>
        </div>
      </div>

    </div>
  );
};
