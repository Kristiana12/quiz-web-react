import Button from '@mui/material/Button';

const MuiButton = ({ children, variant, onClick, href }) => {
  return (
    <Button onClick={onClick} variant={variant}>
      {children}
    </Button>
  );
};

export default MuiButton;
