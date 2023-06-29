import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import CssBaseline from '@mui/material/CssBaseline';
import QuizzProvider from './context/context-quiz.jsx';
import { createTheme, ThemeProvider } from '@mui/material';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      light: '#3EB8D4',
      main: '#39abc4',
      dark: '#1586A0',
      contmainastText: '#fff',
    },
    background: { default: '#1C1c1c', paper: '#1d1d1d' },
    text: {
      primary: '#EFEFEF',
      secondary: '#1586A0',
    },
    action: {
      active: '#737373',
    },
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<App />}></Route>)
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QuizzProvider>
        <RouterProvider router={router} />
      </QuizzProvider>
    </ThemeProvider>
  </React.StrictMode>
);
