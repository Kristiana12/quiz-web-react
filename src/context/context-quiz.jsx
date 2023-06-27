import { createContext, useReducer } from 'react';

export const QuizzContext = createContext(null);

const intialState = {
  questions: [],
  status: null,
  currentPage: 'startScreen',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'quizzForm':
      return { ...state, currentPage: 'quizzForm' };
  }
};
/* eslint-disable */
const QuizzProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);
  const { questions, status, currentPage } = state;

  const data = { questions, status, currentPage, dispatch };

  return <QuizzContext.Provider value={data}>{children}</QuizzContext.Provider>;
};
/* eslint-enable */

export default QuizzProvider;
