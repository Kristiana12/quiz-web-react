import { createContext, useReducer } from 'react';

export const QuizzContext = createContext(null);

const intialState = {
  questions: [],
  usersOptions: {
    category: 'any-category',
    numOfQuestions: 5,
    difficulty: 'any-difficulty',
  },
  index: 0,
  answer: null,
  isCorrect: null,
  indexOfCorrectAnswer: null,
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
      };
    case 'selectAnswer':
      const selectedAnswer = action.payload[0];
      const indexOfSelectedAnswer = action.payload[1];
      //Get current Quizz data
      const currentQuizz = state.questions[state.index];

      //Get the index of the correct answer
      const indexOfRightAnswer = Object.entries(
        currentQuizz['correct_answers']
      ).findIndex(([_, value]) => value === 'true');

      return {
        ...state,
        answer: selectedAnswer,
        isCorrect: indexOfSelectedAnswer === indexOfRightAnswer,
        indexOfCorrectAnswer: indexOfRightAnswer,
      };
    case 'nextQuestion':
      return {
        ...state,
        index: state.index + 1,
        answer: null,
        isCorrect: null,
        indexOfCorrectAnswer: null,
      };
  }
};

/* eslint-disable */
const QuizzProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);
  const {
    questions,
    currentPage,
    usersOptions,
    index,
    answer,
    isCorrect,
    indexOfCorrectAnswer,
  } = state;
  // console.log(results);

  const data = {
    questions,
    currentPage,
    dispatch,
    usersOptions,
    index,
    answer,
    isCorrect,
    indexOfCorrectAnswer,
  };

  return <QuizzContext.Provider value={data}>{children}</QuizzContext.Provider>;
};
/* eslint-enable */

export default QuizzProvider;
