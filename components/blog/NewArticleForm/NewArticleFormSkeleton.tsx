'use client';

import React from 'react';
import { Box, Skeleton } from '@mui/material';

const NewArticleFormSkeleton: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: { xs: '2rem 1rem', sm: '2rem', md: '3rem' },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {/* Title Field Skeleton */}
        <Box>
          <Skeleton variant="text" width={80} height={24} sx={{ mb: 1 }} />
          <Skeleton variant="rectangular" height={56} />
        </Box>

        {/* Short Description Skeleton */}
        <Box>
          <Skeleton variant="text" width={150} height={24} sx={{ mb: 1 }} />
          <Skeleton variant="rectangular" height={120} />
        </Box>

        {/* Author and Publishing Date Skeletons */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Skeleton variant="text" width={80} height={24} sx={{ mb: 1 }} />
            <Skeleton variant="rectangular" height={56} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Skeleton variant="text" width={140} height={24} sx={{ mb: 1 }} />
            <Skeleton variant="rectangular" height={56} />
          </Box>
        </Box>

        {/* Category and Tag Skeletons */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Skeleton variant="text" width={100} height={24} sx={{ mb: 1 }} />
            <Skeleton variant="rectangular" height={56} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Skeleton variant="text" width={60} height={24} sx={{ mb: 1 }} />
            <Skeleton variant="rectangular" height={56} />
          </Box>
        </Box>

        {/* Main Image Upload Skeleton */}
        <Box>
          <Skeleton variant="text" width={180} height={24} sx={{ mb: 1 }} />
          <Skeleton variant="rectangular" height={56} />
        </Box>

        {/* Markdown Content Skeleton */}
        <Box>
          <Skeleton variant="text" width={220} height={24} sx={{ mb: 1 }} />
          <Skeleton variant="rectangular" height={300} />
        </Box>

        {/* Action Buttons Skeleton */}
        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'stretch', sm: 'flex-end' },
              gap: 2,
              mt: 2,
              flexDirection: { xs: 'column', sm: 'row' },
            }}
          >
            <Skeleton
              variant="rectangular"
              height={36}
              sx={{ width: { xs: '100%', sm: 120 } }}
            />
            <Skeleton
              variant="rectangular"
              height={36}
              sx={{ width: { xs: '100%', sm: 120 } }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NewArticleFormSkeleton;

