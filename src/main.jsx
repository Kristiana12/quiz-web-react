import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import CssBaseline from '@mui/material/CssBaseline';
import QuizzProvider from './context/context-quiz.jsx';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      light: '#3EB8D4',
      main: '#3EB8D4',
      dark: '#1586A0',
      contrastText: '#fff',
    },
    background: { default: '#1C1c1c', paper: '#1d1d1d' },
    text: {
      primary: '#EFEFEF',
      secondary: '#1586A0',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QuizzProvider>
        <App />
      </QuizzProvider>
    </ThemeProvider>
  </React.StrictMode>
);
