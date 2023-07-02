import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material';
import QuizzProvider from './context/context-quiz';
import QuestionsContainer from './components/Pages/QuestionsContainer';
import QuizzResults from './components/Pages/QuizzResults.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      light: '#01c2e9',
      main: '#00b4d8',
      dark: '#0199b8',
      contrastText: '#fff',
    },
    background: { default: '#1C1c1c', paper: '#1d1d1d' },
    text: {
      primary: '#EFEFEF',
      secondary: '#0199b8',
    },
    action: {
      active: '#979797',
      disabled: '#0199b8',
      disabledBackground: 'rgba(0, 180, 216, 0.125)',
      disabledOpacity: 0.7,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          fontSize: '1.125rem',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#323232',
          borderWidth: 3,
          borderColor: '#0199b8',
          borderRadius: 15,
          padding: '1.125rem',
        },
      },
    },
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="questions" element={<QuestionsContainer />} />
      <Route path="results" element={<QuizzResults />} />
    </Route>
  )
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
