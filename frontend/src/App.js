import Routes from './routes';
import { ThemeProvider } from '@mui/material/styles';
import DialogContext from './context/DialogContext';

import theme from './theme';
import './globals.css';
import dotenv from 'dotenv';

function App() {
  dotenv.config();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <DialogContext>
          <Routes />
        </DialogContext>
      </ThemeProvider>
    </div>
  );
}

export default App;
