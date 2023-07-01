import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Question from './Question';
import { useContext } from 'react';
import { QuizzContext } from '../context/context-quiz';
import MuiButton from './UI/Button';
import ProgressBar from './ProgressBar';

const QuestionsContainer = () => {
  const { questions, index, answer, dispatch } = useContext(QuizzContext);
  console.log(questions);

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
            <MuiButton
              variant="contained"
              onClick={() => dispatch({ type: 'nextQuestion' })}
            >
              Next
            </MuiButton>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default QuestionsContainer;
