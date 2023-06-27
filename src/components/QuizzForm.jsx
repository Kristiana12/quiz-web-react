import FormControl from '@mui/material/FormControl/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { useState } from 'react';
import styled from 'styled-components';

const QuizzForm = () => {
  const [category, setCategory] = useState('');

  // const categories = ["Any Category", "Linux", "Bash", "Docker", "CMS", "SQL", "DevOps", "Code"]

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <StyledMain>
      <Grid container spacing={'3rem'}>
        <Grid item xs={12}>
          <Typography variant="h5" component="h2" textAlign={'center'}>
            Select the category, the number of questions and the difficulty that
            you want to try.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              color="primary"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              onChange={handleChange}
            >
              <MenuItem value={0}>Any Category</MenuItem>
              <MenuItem value={10}>Linux</MenuItem>
              <MenuItem value={120}>Bash</MenuItem>
              <MenuItem value={30}>Docker</MenuItem>
              <MenuItem value={40}>CMS</MenuItem>
              <MenuItem value={50}>SQL</MenuItem>
              <MenuItem value={60}>DevOps</MenuItem>
              <MenuItem value={70}>Code</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 1.5rem;
`;

export default QuizzForm;
