import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Question from './Question';

const Questions = () => {
  return (
    <Container
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Question />
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'right' }}>
          <Button variant="contained">Next</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Questions;
