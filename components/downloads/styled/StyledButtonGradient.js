import { styled } from '@mui/material';
import Button from '@mui/material/Button';

// $text var
const text = '#44546A';
const buttonBackground='#f6f9fc';

const gradientFullButtonActive =
  'linear-gradient(135deg, rgba(255, 77, 174, 0.9), rgba(66, 104, 255, 0.9)) border-box';

// eslint-disable-next-line max-len
const gradientActive = `linear-gradient(to right, ${buttonBackground}, ${buttonBackground}) padding-box, linear-gradient(135deg, rgba(255, 77, 174, 0.9), rgba(66, 104, 255, 0.9)) border-box`;

// eslint-disable-next-line max-len
const gradientDisabled = `linear-gradient(white, white) padding-box, linear-gradient(to right, ${text}, ${text}) border-box`;

const getShouldForwardProp = (prop) => !['isFullGradientButton'].includes(prop);

const StyledButtonGradient = styled(Button,  { shouldForwardProp: getShouldForwardProp })(
  ({ theme:{palette}, isFullGradientButton  }) => {
    const gradient = isFullGradientButton ? gradientFullButtonActive : gradientActive;
    const captionColor = isFullGradientButton ? palette.common.white : text;
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
    color: captionColor,
    background: gradient,
    border: '2px solid transparent',

    '&:hover': {
      background: gradient,
      border: '2px solid transparent',
    },

    '&:disabled': {
      background: gradientDisabled,
      border: '2px solid transparent',
    },
  };
});

export default StyledButtonGradient;
