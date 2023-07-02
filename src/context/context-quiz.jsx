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
  correctAnswers: 0,
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
        correctAnswers:
          indexOfSelectedAnswer === indexOfRightAnswer
            ? state.correctAnswers + 1
            : state.correctAnswers,
      };
    case 'nextQuestion':
      return {
        ...state,
        index: state.index + 1,
        answer: null,
        isCorrect: null,
        indexOfCorrectAnswer: null,
      };
    case 'finishQuizz':
      return {
        ...state,
      };
  }
};

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
    correctAnswers,
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
    correctAnswers,
  };

  return <QuizzContext.Provider value={data}>{children}</QuizzContext.Provider>;
};

export default QuizzProvider;
