import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import { QuizzContext } from '../../context/context-quiz';

const buttonStyling = {
  cursor: 'pointer',
  transition: '0.5s',
  '&:hover': {
    borderColor: '#00b4d8',
  },
  '&.active': {
    borderColor: '#00b4d8',
    '&[disabled]': {
      backgroundColor: 'rgba(0, 180, 216, 0.125)',
      '&.correct': {
        borderColor: '#2e7d32',
        backgroundColor: 'rgba(76, 175, 79, 0.125)',
      },
      '&.error': {
        borderColor: '#d32f2f',
        backgroundColor: 'rgba(239, 83, 80, 0.125)',
      },
    },
  },
  '&.correct': {
    borderColor: '#2e7d32',
    backgroundColor: 'rgba(76, 175, 79, 0.125)',
  },
};

const Question = ({ question }) => {
  const { dispatch, answer, isCorrect, indexOfCorrectAnswer } =
    useContext(QuizzContext);

  const options = Object.entries(question.answers).map(
    ([prop, value], index) => {
      if (value)
        return (
          <Button
            //Add active class to the selected item
            className={`${answer === prop ? 'active' : ''} ${
              isCorrect && index === indexOfCorrectAnswer ? 'correct' : 'error'
            } ${index === indexOfCorrectAnswer ? 'correct' : ''}`}
            variant="outlined"
            key={uuidv4()}
            sx={buttonStyling}
            onClick={() => {
              dispatch({ type: 'selectAnswer', payload: [prop, index] });
            }}
            disabled={answer ? true : false}
          >
            {value}
          </Button>
        );
    }
  );

  return (
    <>
      <Stack spacing={4}>
        <Paper variant="outlined" sx={{ padding: '2rem 1.125rem' }}>
          <Typography variant="h5" component="h4">
            {question.question}
          </Typography>
        </Paper>
        <Stack spacing={2}>{options}</Stack>
      </Stack>
    </>
  );
};

export default Question;
