import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Question from '../Quizz/Question';
import { QuizzContext } from '../../context/context-quiz';
import MuiButton from '../UI/Button';
import ProgressBar from '../Quizz/ProgressBar';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const QuestionsContainer = () => {
  const { questions, index, answer, dispatch } = useContext(QuizzContext);
  const navigate = useNavigate();

  const displayedButton =
    index + 1 === questions.length ? (
      <MuiButton
        variant="contained"
        onClick={() => {
          dispatch({ type: 'finishQuizz' });
          navigate('/results');
        }}
      >
        Finish Quiz
      </MuiButton>
    ) : (
      <MuiButton
        variant="contained"
        onClick={() => dispatch({ type: 'nextQuestion' })}
      >
        Next
      </MuiButton>
    );

  return (
    <Container
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '7rem',
      }}
    >
      <Grid container spacing={8} sx={{ maxWidth: '800px', margin: '0 auto' }}>
        <Grid item xs={12}>
          <Typography variant="h3" component="h3" textAlign="center">
            {questions[index].category === ''
              ? 'General'
              : questions[index].category}
          </Typography>
        </Grid>
        <ProgressBar />
        <Grid item xs={12}>
          <Question question={questions[index]} />
        </Grid>
        {answer && (
          <Grid item xs={12} sx={{ textAlign: 'right' }}>
            {displayedButton}
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default QuestionsContainer;
