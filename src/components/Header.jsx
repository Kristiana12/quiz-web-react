import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import MuiButton from './UI/Button';
import SouthRoundedIcon from '@mui/icons-material/SouthRounded';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <StyledHeader>
      <Grid
        container
        spacing={4}
        sx={{ alignItems: 'center', justifyContent: 'center' }}
      >
        <Grid item xs={12}>
          <Typography variant="h4" component="h1" lineHeight={1.6}>
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
          <Link to="form" spy={true} smooth={true} duration={500}>
            <MuiButton href="#form" variant="contained">
              Get Started!
            </MuiButton>
          </Link>
        </Grid>
        <Grid item xs={12}>
          <SouthRoundedIcon
            className="bounce-animation"
            color="primary"
            sx={{ fontSize: 60, marginTop: '5rem' }}
          />
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

  .bounce-animation {
    animation: bounce 2.5s infinite;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
  }
`;

export default Header;
