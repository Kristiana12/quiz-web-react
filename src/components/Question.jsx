import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';

const Question = () => {
  return (
    <>
      <StyledHeader>
        <StyledProgressBar value={1} max={15}></StyledProgressBar>
        <Typography variant="h6" component="p">
          Question: &nbsp;
          <Typography
            variant="h6"
            component="span"
            color="primary"
            sx={{ fontWeight: 'bold' }}
          >
            1
          </Typography>{' '}
          / 15
        </Typography>
      </StyledHeader>
      <Stack spacing={4}>
        <Paper variant="outlined" sx={{ padding: '3rem 1.125rem 3.5rem' }}>
          <Typography variant="h4" component="h3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
            praesentium?
          </Typography>
        </Paper>
        <Stack spacing={2}>
          <Paper variant="outlined" sx={{ cursor: 'pointer' }}>
            <Typography variant="body2" component="p">
              Lorem ipsum dolor sit amet consectetur.
            </Typography>
          </Paper>
          <Paper variant="outlined" sx={{ cursor: 'pointer' }}>
            <Typography variant="body2" component="p">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </Typography>
          </Paper>
          <Paper variant="outlined" sx={{ cursor: 'pointer' }}>
            <Typography variant="body2" component="p">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </Typography>
          </Paper>
          <Paper variant="outlined" sx={{ cursor: 'pointer' }}>
            <Typography variant="body2" component="p">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </Typography>
          </Paper>
        </Stack>
      </Stack>
    </>
  );
};

const StyledProgressBar = styled.progress`
  width: 100%;
`;

const StyledHeader = styled.div`
  margin-bottom: 2rem;
`;

export default Question;
