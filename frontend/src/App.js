import Routes from './routes';
import { ThemeProvider } from '@mui/material/styles';

import theme from './theme';
import './globals.css';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
