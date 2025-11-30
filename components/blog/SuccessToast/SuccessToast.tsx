'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Snackbar, Alert, Box } from '@mui/material';

const SuccessToast: React.FC = () => {
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Check if success parameter is present
    if (!searchParams) return;
    
    const success = searchParams.get('success');
    if (success === 'article-submitted') {
      setOpen(true);
      
      // Remove the query parameter from URL without reload
      const url = new URL(window.location.href);
      url.searchParams.delete('success');
      window.history.replaceState({}, '', url.toString());
      
      // Auto-hide after 3.5 seconds
      const timer = setTimeout(() => {
        setOpen(false);
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={3500}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      sx={{
        '& .MuiSnackbar-root': {
          bottom: '24px',
          right: '24px',
        },
      }}
    >
      <Alert
        onClose={handleClose}
        severity="success"
        sx={{
          backgroundColor: '#d4edda', // Lighter green background
          color: '#155724', // Darker green text
          border: '2px solid #28a745', // Darker green border
          borderRadius: '4px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          minWidth: '300px',
          '& .MuiAlert-icon': {
            color: '#28a745',
          },
          '& .MuiAlert-message': {
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            width: '100%',
          },
          '& .MuiAlert-action': {
            color: '#155724',
            '& .MuiIconButton-root': {
              color: '#155724',
            },
          },
        }}
      >
        <Box
          component="div"
          sx={{
            fontWeight: 'bold',
            fontSize: '1rem',
            lineHeight: 1.2,
            marginBottom: '4px',
          }}
        >
          Success!
        </Box>
        <Box
          component="div"
          sx={{
            fontWeight: 'normal',
            fontSize: '0.875rem',
            lineHeight: 1.4,
          }}
        >
          Article added to the system
        </Box>
      </Alert>
    </Snackbar>
  );
};

export default SuccessToast;

