import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const ErrorComponent = () => {
  return (
    <Container
      sx={{ textAlign: 'center', padding: '4rem 1.5rem', maxWidth: '600px' }}
    >
      <Box>
        <Typography
          component="h1"
          variant="h1"
          color="primary"
          fontWeight={900}
        >
          Ooops!
        </Typography>
        <Typography
          component="h2"
          variant="h5"
          sx={{ textTransform: 'uppercase', margin: '2rem 0 2.5rem' }}
        >
          Something went wrong!
        </Typography>
        <Typography component="p" variant="subtitle1">
          Could not fech data from the server, make sure your internet
          connection is stable. Refresh the page and try again.
        </Typography>
      </Box>
    </Container>
  );
};

export default ErrorComponent;
