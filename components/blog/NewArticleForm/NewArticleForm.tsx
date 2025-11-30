'use client';

import React, { useState } from 'react';
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  Button,
  Box,
  Typography,
  FormHelperText,
} from '@mui/material';

interface Category {
  id: number;
  name: string;
  isSelected?: boolean;
}

interface Tag {
  id: number;
  name: string;
  selected?: boolean;
}

interface NewArticleFormProps {
  categories: Category[];
  tags: Tag[];
}

const NewArticleForm: React.FC<NewArticleFormProps> = ({ categories, tags }) => {
  const [formData, setFormData] = useState({
    title: '',
    shortDescription: '',
    author: '',
    publishingDate: '',
    category: '',
    tag: [] as string[],
    mainImage: '',
    markdownContent: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { value: string | string[] } }
  ) => {
    const value = event.target.value;
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        mainImage: file.name,
      }));
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Form validation and submission logic will go here
    console.log('Form submitted:', formData);
  };

  const handleCancel = () => {
    // Reset form or navigate away
    setFormData({
      title: '',
      shortDescription: '',
      author: '',
      publishingDate: '',
      category: '',
      tag: [],
      mainImage: '',
      markdownContent: '',
    });
    setErrors({});
  };

  // Filter out "All" category (id: 0) from dropdown options
  const categoryOptions = categories.filter(cat => cat.id !== 0);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: { xs: '2rem 1rem', sm: '2rem', md: '3rem' },
      }}
      aria-label="New article form"
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {/* Title Field - Full Width */}
        <Box>
          <FormControl fullWidth>
            <Typography
              component="label"
              htmlFor="article-title"
              id="article-title-label"
              sx={{
                display: 'block',
                mb: 1,
                fontWeight: 500,
                fontSize: '0.875rem',
              }}
            >
              Title <span aria-label="required">*</span>
            </Typography>
            <TextField
              id="article-title"
              name="title"
              value={formData.title}
              onChange={handleChange('title')}
              fullWidth
              required
              autoFocus
              error={!!errors.title}
              helperText={errors.title}
              aria-required="true"
              aria-describedby={errors.title ? 'title-error' : undefined}
              aria-invalid={!!errors.title}
              aria-labelledby="article-title-label"
              inputProps={{
                'aria-label': 'Article title',
              }}
            />
            {errors.title && (
              <FormHelperText id="title-error" role="alert" aria-live="polite">
                {errors.title}
              </FormHelperText>
            )}
          </FormControl>
        </Box>

        {/* Short Description - Full Width */}
        <Box>
          <FormControl fullWidth>
            <Typography
              component="label"
              htmlFor="short-description"
              id="short-description-label"
              sx={{
                display: 'block',
                mb: 1,
                fontWeight: 500,
                fontSize: '0.875rem',
              }}
            >
              Short Description <span aria-label="required">*</span>
            </Typography>
            <TextField
              id="short-description"
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleChange('shortDescription')}
              fullWidth
              multiline
              rows={4}
              required
              error={!!errors.shortDescription}
              helperText={errors.shortDescription}
              aria-required="true"
              aria-describedby={errors.shortDescription ? 'short-description-error' : undefined}
              aria-invalid={!!errors.shortDescription}
              aria-labelledby="short-description-label"
              inputProps={{
                'aria-label': 'Short description of the article',
              }}
            />
            {errors.shortDescription && (
              <FormHelperText id="short-description-error" role="alert" aria-live="polite">
                {errors.shortDescription}
              </FormHelperText>
            )}
          </FormControl>
        </Box>

        {/* Author and Publishing Date - Side by Side on Desktop, Stacked on Mobile */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3,
          }}
        >
          <Box sx={{ flex: 1 }}>
          <FormControl fullWidth>
            <Typography
              component="label"
              htmlFor="article-author"
              id="article-author-label"
              sx={{
                display: 'block',
                mb: 1,
                fontWeight: 500,
                fontSize: '0.875rem',
              }}
            >
              Author <span aria-label="required">*</span>
            </Typography>
            <TextField
              id="article-author"
              name="author"
              value={formData.author}
              onChange={handleChange('author')}
              fullWidth
              required
              error={!!errors.author}
              helperText={errors.author}
              aria-required="true"
              aria-describedby={errors.author ? 'author-error' : undefined}
              aria-invalid={!!errors.author}
              aria-labelledby="article-author-label"
              inputProps={{
                'aria-label': 'Article author name',
              }}
            />
            {errors.author && (
              <FormHelperText id="author-error" role="alert" aria-live="polite">
                {errors.author}
              </FormHelperText>
            )}
          </FormControl>
        </Box>

          <Box sx={{ flex: 1 }}>
          <FormControl fullWidth>
            <Typography
              component="label"
              htmlFor="publishing-date"
              id="publishing-date-label"
              sx={{
                display: 'block',
                mb: 1,
                fontWeight: 500,
                fontSize: '0.875rem',
              }}
            >
              Publishing Date <span aria-label="required">*</span>
            </Typography>
            <TextField
              id="publishing-date"
              name="publishingDate"
              type="date"
              value={formData.publishingDate}
              onChange={handleChange('publishingDate')}
              fullWidth
              required
              error={!!errors.publishingDate}
              helperText={errors.publishingDate}
              InputLabelProps={{
                shrink: false,
              }}
              aria-required="true"
              aria-describedby={errors.publishingDate ? 'publishing-date-error' : undefined}
              aria-invalid={!!errors.publishingDate}
              aria-labelledby="publishing-date-label"
              inputProps={{
                'aria-label': 'Select publishing date',
              }}
            />
            {errors.publishingDate && (
              <FormHelperText id="publishing-date-error" role="alert" aria-live="polite">
                {errors.publishingDate}
              </FormHelperText>
            )}
          </FormControl>
        </Box>
        </Box>

        {/* Category and Tag - Side by Side on Desktop, Stacked on Mobile */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3,
          }}
        >
          <Box sx={{ flex: 1 }}>
          <FormControl fullWidth required error={!!errors.category}>
            <Typography
              component="label"
              htmlFor="category-select"
              id="category-label"
              sx={{
                display: 'block',
                mb: 1,
                fontWeight: 500,
                fontSize: '0.875rem',
              }}
            >
              Category <span aria-label="required">*</span>
            </Typography>
            <Select
              id="category-select"
              name="category"
              value={formData.category}
              onChange={(e) => handleChange('category')({ target: { value: e.target.value } })}
              displayEmpty
              aria-required="true"
              aria-describedby={errors.category ? 'category-error' : undefined}
              aria-invalid={!!errors.category}
              aria-labelledby="category-label"
              aria-label="Select article category"
            >
              <MenuItem value="" disabled>
                <em>Select a category</em>
              </MenuItem>
              {categoryOptions.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
            {errors.category && (
              <FormHelperText id="category-error" role="alert" aria-live="polite">
                {errors.category}
              </FormHelperText>
            )}
          </FormControl>
        </Box>

          <Box sx={{ flex: 1 }}>
          <FormControl fullWidth required error={!!errors.tag}>
            <Typography
              component="label"
              htmlFor="tag-select"
              id="tag-label"
              sx={{
                display: 'block',
                mb: 1,
                fontWeight: 500,
                fontSize: '0.875rem',
              }}
            >
              Tags <span aria-label="required">*</span>
            </Typography>
            <Select
              id="tag-select"
              name="tag"
              multiple
              value={formData.tag}
              onChange={(e) => {
                const value = typeof e.target.value === 'string' ? [e.target.value] : e.target.value;
                handleChange('tag')({ target: { value } });
              }}
              renderValue={(selected) => {
                if ((selected as string[]).length === 0) {
                  return <em>Select tags</em>;
                }
                return (selected as string[])
                  .map((tagId) => tags.find((tag) => tag.id.toString() === tagId)?.name)
                  .filter(Boolean)
                  .join(', ');
              }}
              aria-required="true"
              aria-describedby={errors.tag ? 'tag-error' : undefined}
              aria-invalid={!!errors.tag}
              aria-labelledby="tag-label"
              aria-label="Select article tags"
            >
              {tags.map((tag) => (
                <MenuItem key={tag.id} value={tag.id.toString()}>
                  {tag.name}
                </MenuItem>
              ))}
            </Select>
            {errors.tag && (
              <FormHelperText id="tag-error" role="alert" aria-live="polite">
                {errors.tag}
              </FormHelperText>
            )}
          </FormControl>
        </Box>
        </Box>

        {/* Main Image Upload - Full Width */}
        <Box>
          <FormControl fullWidth required error={!!errors.mainImage}>
            <Typography
              component="label"
              htmlFor="main-image-input"
              id="main-image-label"
              sx={{
                display: 'block',
                mb: 1,
                fontWeight: 500,
                fontSize: '0.875rem',
              }}
            >
              Main Article Image <span aria-label="required">*</span>
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              <Box
                component="label"
                htmlFor="main-image-input"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                }}
              >
                <input
                  id="main-image-input"
                  name="mainImage"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                  aria-required="true"
                  aria-describedby={errors.mainImage ? 'main-image-error' : 'main-image-helper'}
                  aria-invalid={!!errors.mainImage}
                  aria-labelledby="main-image-label"
                />
                <TextField
                  value={formData.mainImage || ''}
                  placeholder="No file chosen"
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  onClick={() => document.getElementById('main-image-input')?.click()}
                  sx={{
                    cursor: 'pointer',
                    '& .MuiInputBase-root': {
                      cursor: 'pointer',
                    },
                  }}
                  inputProps={{
                    'aria-label': 'Selected image file name',
                  }}
                />
              </Box>
              <FormHelperText
                id={errors.mainImage ? 'main-image-error' : 'main-image-helper'}
                role={errors.mainImage ? 'alert' : undefined}
                aria-live={errors.mainImage ? 'polite' : undefined}
              >
                {errors.mainImage || 'Click to select an image file for the article'}
              </FormHelperText>
            </Box>
          </FormControl>
        </Box>

        {/* Markdown Content - Full Width */}
        <Box>
          <FormControl fullWidth>
            <Typography
              component="label"
              htmlFor="markdown-content"
              id="markdown-content-label"
              sx={{
                display: 'block',
                mb: 1,
                fontWeight: 500,
                fontSize: '0.875rem',
              }}
            >
              Article Content (Markdown) <span aria-label="required">*</span>
            </Typography>
            <TextField
              id="markdown-content"
              name="markdownContent"
              value={formData.markdownContent}
              onChange={handleChange('markdownContent')}
              fullWidth
              multiline
              rows={12}
              required
              error={!!errors.markdownContent}
              helperText={errors.markdownContent || 'Write your article content using Markdown syntax'}
              aria-required="true"
              aria-describedby={errors.markdownContent ? 'markdown-content-error' : 'markdown-content-helper'}
              aria-invalid={!!errors.markdownContent}
              aria-labelledby="markdown-content-label"
              inputProps={{
                'aria-label': 'Article content in Markdown format',
              }}
              sx={{
                '& .MuiInputBase-input': {
                  fontFamily: 'monospace',
                  fontSize: '0.9rem',
                },
              }}
            />
            {errors.markdownContent && (
              <FormHelperText id="markdown-content-error" role="alert" aria-live="polite">
                {errors.markdownContent}
              </FormHelperText>
            )}
          </FormControl>
        </Box>

        {/* Action Buttons - Right Aligned */}
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
            <Button
              type="button"
              variant="outlined"
              onClick={handleCancel}
              fullWidth={false}
              sx={{
                minWidth: { xs: '100%', sm: '120px' },
              }}
              aria-label="Cancel and reset form"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              fullWidth={false}
              sx={{
                minWidth: { xs: '100%', sm: '120px' },
              }}
              aria-label="Submit new article"
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NewArticleForm;

