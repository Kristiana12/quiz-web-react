import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import StartScreen from './components/StartScreen';
import { useContext } from 'react';
import { QuizzContext } from './context/context-quiz';
import QuizzForm from './components/QuizzForm';
import Loader from './components/UI/Loader';

const App = () => {
  const { currentPage, status } = useContext(QuizzContext);

  return (
    <>
      {currentPage === 'startScreen' && <StartScreen />}
      {currentPage === 'quizzForm' && <QuizzForm />}
      {status === 'loading' && <Loader />}
    </>
  );
};

export default App;
