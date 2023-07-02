import Trophy from '../../assets/trophy.svg';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useContext } from 'react';
import { QuizzContext } from '../../context/context-quiz';
import MuiButton from '../UI/Button';

const QuizzResults = () => {
  const { correctAnswers, questions } = useContext(QuizzContext);

  const percentage = (correctAnswers / questions.length) * 100;

  return (
    <Container
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
      }}
    >
      <Stack
        spacing={4}
        sx={{
          alignContent: 'center',
          alignItems: 'center',
          margin: '0 auto',
        }}
      >
        <Paper
          sx={{
            maxWidth: '400px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '1.5rem 2rem',
          }}
        >
          <Box sx={{ width: '120px', margin: '2rem auto 1.5rem' }}>
            <img src={Trophy} alt="trophy" />
          </Box>
          <Typography variant="h4" compontent="h5">
            Congrats!
          </Typography>
          <Typography
            variant="h3"
            compontent="h6"
            color="primary"
            sx={{ margin: '1rem 0 1.5rem' }}
          >
            {Math.ceil(percentage)}% Score
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            fontWeight={900}
            marginBottom={2}
          >
            Quiz completed successfully.
          </Typography>
          <Typography variant="body1" component="p" fontWeight={900}>
            You attempted &nbsp;
            <Typography
              variant="body1"
              component="span"
              fontWeight="bold"
              color="primary"
            >
              {questions.length}
              &nbsp; questions
            </Typography>
            &nbsp; and from that &nbsp;
            <Typography
              variant="body1"
              component="span"
              fontWeight="bold"
              color="#9ef01a"
            >
              {correctAnswers} answers
            </Typography>
            &nbsp; were correct.
          </Typography>
        </Paper>
        <MuiButton variant="contained">Start new Quiz!</MuiButton>
      </Stack>
    </Container>
  );
};

export default QuizzResults;
