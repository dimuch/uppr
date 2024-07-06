import { styled } from '@mui/material';
import Button from '@mui/material/Button';

// $text var
const text = '#44546A';

const gradientActive =
  // eslint-disable-next-line max-len
  'linear-gradient(white, white) padding-box, linear-gradient(135deg, rgba(255, 77, 174, 0.9), rgba(66, 104, 255, 0.9)) border-box';
// eslint-disable-next-line max-len
const gradientDisabled = `linear-gradient(white, white) padding-box, linear-gradient(to right, ${text}, ${text}) border-box`;

const StyledButtonGradient = styled(Button)(({ theme }) => {
  return {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    padding: '0.75rem 1.75rem',
    borderRadius: '1.5rem',
    fontSize: '1rem',
    lineHeight: 1.25,
    fontFamily: 'Raleway-Regular, sans-serif',
    cursor: 'pointer',
    textTransform: 'capitalize',
    color: text,
    background: gradientActive,
    border: '2px solid transparent',

    '&:hover': {
      background: gradientActive,
      border: '2px solid transparent',
    },

    '&:disabled': {
      background: gradientDisabled,
      border: '2px solid transparent',
    },
  };
});

export default StyledButtonGradient;
