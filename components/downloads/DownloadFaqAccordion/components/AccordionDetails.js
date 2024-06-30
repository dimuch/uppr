import { styled } from '@mui/material';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  margin: 0,
  paddingLeft: '3.5rem',
  paddingBottom: '1.25rem',
  backgroundColor: '#f6f9fc',
}));

export default AccordionDetails;
