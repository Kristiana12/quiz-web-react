import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ProgressBar from './ProgressBar';

const QuestionHeader = () => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h3" component="h3" textAlign="center">
          {questions[index].category === ''
            ? 'General'
            : questions[index].category}
        </Typography>
      </Grid>
      <ProgressBar />
    </>
  );
};

export default QuestionHeader;
