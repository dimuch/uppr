import React from 'react';
import { Box, Typography } from '@mui/material';

const CaseStudyTag = ({ tagName, tagColor }) => {
  return (
    <Box
      sx={{
        backgroundColor: `#${tagColor}`,
        position: 'absolute',
        bottom: '24px',
        right: '24px',
        color: 'white',
        padding: '4px 24px 6px',
        borderRadius: '16px',
        lineHeight: 1.2,
      }}
    >
      <Typography
        component="span"
        sx={{
          fontFamily: 'Raleway-SemiBold, sans-serif',
          fontSize: '.8rem',
          fontWeight: 600,
          lineHeight: 1,
        }}
      >
        {tagName}
      </Typography>
    </Box>
  );
};

export default CaseStudyTag;
