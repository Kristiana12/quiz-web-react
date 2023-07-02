import Stack from '@mui/material/Stack';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { QuizzContext } from '../../context/context-quiz';

const ProgressBar = () => {
  const { index, questions } = useContext(QuizzContext);
  return (
    <Grid item xs={12}>
      <Stack spacing={2}>
        <StyledProgressBar
          value={index + 1}
          max={questions.length}
        ></StyledProgressBar>
        <Typography variant="h6" component="p" sx={{ alignSelf: 'end' }}>
          Question: &nbsp;
          <Typography
            variant="h6"
            component="span"
            color="primary"
            sx={{ fontWeight: 'bold' }}
          >
            {index + 1}
          </Typography>
          / {questions.length}
        </Typography>
      </Stack>
    </Grid>
  );
};

const StyledProgressBar = styled.progress`
  width: 100%;
`;

export default ProgressBar;
