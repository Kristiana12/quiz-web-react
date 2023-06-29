import { createContext, useReducer } from 'react';

export const QuizzContext = createContext(null);

const intialState = {
  questions: [],
  status: 'loading',
  usersOptions: {
    category: 'any-category',
    numOfQuestions: 5,
    difficulty: 'any-difficulty',
    index: 0,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'getCategory':
      return {
        ...state,
        usersOptions: { ...state.usersOptions, category: action.payload },
      };
    case 'getNumOfQuestions':
      return {
        ...state,
        usersOptions: { ...state.usersOptions, numOfQuestions: action.payload },
      };
    case 'getDifficulty':
      return {
        ...state,
        usersOptions: { ...state.usersOptions, difficulty: action.payload },
      };
    case 'fetchQuestions':
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
      };
  }
};

/* eslint-disable */
const QuizzProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);
  const { questions, status, currentPage, usersOptions } = state;

  const data = { questions, status, currentPage, dispatch, usersOptions };
  console.log(questions);

  return <QuizzContext.Provider value={data}>{children}</QuizzContext.Provider>;
};
/* eslint-enable */

export default QuizzProvider;
