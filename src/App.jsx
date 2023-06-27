import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import StartScreen from './components/StartScreen';
import { useContext } from 'react';
import { QuizzContext } from './context/context-quiz';
import QuizzForm from './components/QuizzForm';

const App = () => {
  const { currentPage } = useContext(QuizzContext);

  if (currentPage === 'startScreen') return <StartScreen />;
  if (currentPage === 'quizzForm') return <QuizzForm />;
};

export default App;
