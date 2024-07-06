import React from 'react';
import { styled } from '@mui/material';

import MuiAccordionSummary from '@mui/material/AccordionSummary';
import { CaretRight } from '@phosphor-icons/react';

const AccordionSummary = styled(props => <MuiAccordionSummary expandIcon={<CaretRight size={24} />} {...props} />)(
  ({ theme }) => ({
    backgroundColor: '#f6f9fc',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      margin: 0,
      marginLeft: theme.spacing(1),
    },
  }),
);

export default AccordionSummary;
