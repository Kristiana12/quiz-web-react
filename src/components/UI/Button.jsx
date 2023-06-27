import Button from '@mui/material/Button';

// eslint-disable-next-line
const MuiButton = ({ children, variant, onClick }) => {
  return (
    <Button onClick={onClick} variant={variant}>
      {children}
    </Button>
  );
};

export default MuiButton;
