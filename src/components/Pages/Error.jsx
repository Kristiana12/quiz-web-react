import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Error = () => {
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
          404 - Page not found
        </Typography>
        <Typography component="p" variant="subtitle1">
          The page you are looking for might have been removed, has its name
          changed or is temporarily unavailable.
        </Typography>
        <Button variant="contained" sx={{ marginTop: '3rem' }}>
          <StyledLink to="/">Go to Homepage</StyledLink>
        </Button>
      </Box>
    </Container>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export default Error;
