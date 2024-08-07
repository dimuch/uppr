import React from 'react';
import { styled } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';

const Accordion = styled(props => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

export default Accordion;
