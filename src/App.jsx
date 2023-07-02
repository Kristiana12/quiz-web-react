import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import QuizzForm from './components/Quizz/QuizzForm';
import Loader from './components/UI/Loader';

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  //when fetching questions loader should show up
  const contentBasedOnLoading = loading ? (
    <Loader />
  ) : (
    <>
      <Header />
      <QuizzForm setLoading={setLoading} />
    </>
  );

  return (
    <>{location.pathname === '/' ? <>{contentBasedOnLoading}</> : <Outlet />}</>
  );
};

export default App;
