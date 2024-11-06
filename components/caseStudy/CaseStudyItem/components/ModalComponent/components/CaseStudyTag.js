import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from '../styles.module.scss';

const CaseStudyTag = ({ tagName, tagColor }) => {
  return (
    <Box
      sx={{
        backgroundColor: `#${tagColor}`,
        position: 'absolute',
        bottom: '16px',
        right: '16px',
        color: 'white',
        padding: '4px 24px 6px',
        borderRadius: '16px',
        lineHeight: 1.2,
      }}
    >
      <Typography
        className={styles.tagText}
        component="span"
      >
        {tagName}
      </Typography>
    </Box>
  );
};

export default CaseStudyTag;
