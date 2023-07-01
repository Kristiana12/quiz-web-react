import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

const SelectField = function ({
  options,
  label,
  id,
  defaultValue,
  dispatch,
  type,
}) {
  const clickHandler = (event) => {
    dispatch({ type: `${type}`, payload: event.target.value });
  };

  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        sx={{
          '& .MuiOutlinedInput-root': {
            '& > fieldset': {
              borderColor: '#737373',
            },
          },
        }}
        fullWidth
        select
        id={id}
        label={label}
        defaultValue={defaultValue}
        color="primary"
        onChange={clickHandler}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export default SelectField;
