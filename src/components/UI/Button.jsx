import Button from '@mui/material/Button';

const MuiButton = ({ children, variant, onClick }) => {
  return (
    <Button onClick={onClick} variant={variant}>
      {children}
    </Button>
  );
};

export default MuiButton;
