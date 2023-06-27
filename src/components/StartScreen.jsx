import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import { useContext } from 'react';
import { QuizzContext } from '../context/context-quiz';

const StartScreen = () => {
  const { dispatch } = useContext(QuizzContext);
  return (
    <StyledHeader>
      <Grid
        container
        spacing={4}
        sx={{ alignItems: 'center', justifyContent: 'center' }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" component="h1">
            Reinforce your learning and test your knowledge by taking a quiz!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" component="p">
            Taking quizzes can reinforce learning by helping to solidify
            information in memory. Take a Quizz to test your knowledge and learn
            new things as well!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={() => dispatch({ type: 'quizzForm' })}
            variant="contained"
          >
            Get Started!
          </Button>
        </Grid>
      </Grid>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 1.125rem;
  text-align: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 850px;
  margin: 0 auto;
`;

export default StartScreen;
