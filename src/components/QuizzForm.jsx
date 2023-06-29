import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SelectField from './UI/SelectField';
import Box from '@mui/material/Box';
import { useContext } from 'react';
import { QuizzContext } from '../context/context-quiz';
import MuiButton from './UI/Button';

import styled from 'styled-components';

const categories = [
  {
    value: 'any-category',
    label: 'Any Category',
  },
  {
    value: 'bash',
    label: 'Bash',
  },
  {
    value: 'cms',
    label: 'CMS',
  },
  {
    value: 'docker',
    label: 'Docker',
  },
  {
    value: 'sql',
    label: 'SQL',
  },
  {
    value: 'devops',
    label: 'DevOps',
  },
  {
    value: 'code',
    label: 'Code',
  },
];

const numOfQuestions = [
  {
    value: 5,
    label: '5',
  },
  {
    value: 10,
    label: '10',
  },
  {
    value: 15,
    label: '15',
  },
  {
    value: 20,
    label: '20',
  },
];

const difficulty = [
  {
    value: 'any-difficulty',
    label: 'Any Difficulty',
  },
  {
    value: 'Easy',
    label: 'Easy',
  },
  {
    value: 'Medium',
    label: 'Medium',
  },
  {
    value: 'Hard',
    label: 'Hard',
  },
];

const QuizzForm = () => {
  const { dispatch, usersOptions } = useContext(QuizzContext);

  const fetchQuestionsHandler = async () => {
    console.log('fetch');
    const category =
      usersOptions.category === 'any-category'
        ? ''
        : '&category=' + usersOptions.category;
    const limit = usersOptions.numOfQuestions;
    const difficulty =
      usersOptions.difficulty === 'any-difficulty'
        ? ''
        : '&difficulty=' + usersOptions.difficulty;

    const response = await fetch(
      `https://quizapi.io/api/v1/questions?apiKey=N74ZmgxPhC99JymaaS3XK25AIR16Zhxk2ePrMcjs${category}${difficulty}&limit=${limit}`
    );

    const data = await response.json();
    dispatch({ type: 'fetchQuestions', payload: data });
  };

  return (
    <StyledMain id="form">
      <Grid container spacing={'5rem'}>
        <Grid item xs={12}>
          <Typography
            variant="h5"
            component="h2"
            textAlign={'center'}
            lineHeight={1.6}
          >
            Select the category, the number of questions and the difficulty that
            you want to try.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <SelectField
            options={categories}
            label="Category"
            id="category"
            dispatch={dispatch}
            defaultValue="any-category"
            type="getCategory"
          />
        </Grid>
        <Grid item xs={12}>
          <SelectField
            options={numOfQuestions}
            label="Number of questions"
            id="questions"
            dispatch={dispatch}
            defaultValue="5"
            type="getNumOfQuestions"
          />
        </Grid>
        <Grid item xs={12}>
          <SelectField
            options={difficulty}
            label="Choose difficulty"
            id="difficulty"
            dispatch={dispatch}
            defaultValue="any-difficulty"
            type="getDifficulty"
          />
        </Grid>
        <Grid item xs={12} sx={{ alignSelf: 'center' }}>
          <Box display="flex" justifyContent="center">
            <MuiButton variant="contained" onClick={fetchQuestionsHandler}>
              Start The Quizz!
            </MuiButton>
          </Box>
        </Grid>
      </Grid>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem 1.5rem 0;
`;

export default QuizzForm;
