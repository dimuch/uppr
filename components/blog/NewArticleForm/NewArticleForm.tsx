'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    TextField,
    Select,
    MenuItem,
    FormControl,
    Button,
    Box,
    Typography,
    FormHelperText,
    SelectChangeEvent,
} from '@mui/material';
import { validateArticleForm } from '../../../services/articleFormValidation';

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

/** Default publishing date/time as YYYY-MM-DD HH:mm:ss (local time, seconds :00). */
function getDefaultPublishingDateTime(): string {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const h = String(d.getHours()).padStart(2, '0');
    const min = String(d.getMinutes()).padStart(2, '0');
    return `${y}-${m}-${day} ${h}:${min}:00`;
}

/** Normalize datetime-local value to YYYY-MM-DD HH:mm:ss for the server. */
function normalizePublishingDate(value: string): string {
    const s = String(value).trim().replace('T', ' ');
    if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(s)) return s;
    if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/.test(s)) return `${s}:00`;
    return s;
}

const NewArticleForm: React.FC<NewArticleFormProps> = ({ categories, tags }) => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        title: '',
        shortDescription: '',
        author: '',
        publishingDate: getDefaultPublishingDateTime(),
        articleColor: 'FF603B',
        category: '',
        tag: [] as string[],
        mainImage: '',
        markdownContent: '',
    });

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (field: string) => (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | {
            target: { value: string | string[] | number }
        }
    ) => {
        let value = event.target.value;
        // Convert category to string if it's a number
        if (field === 'category' && typeof value === 'number') {
            value = String(value);
        }
        // Keep publishing date as YYYY-MM-DD HH:mm:ss for the server
        if (field === 'publishingDate' && typeof value === 'string') {
            value = normalizePublishingDate(value);
        }
        setFormData(prev => ({
            ...prev,
            [field]: value,
        }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => {
                const newErrors = {
                    ...prev
                };
                delete newErrors[field];
                return newErrors;
            });
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            setFormData(prev => ({
                ...prev,
                mainImage: file.name,
            }));
            // Clear error when file is selected
            if (errors.mainImage) {
                setErrors(prev => {
                    const newErrors = {
                        ...prev
                    };
                    delete newErrors.mainImage;
                    return newErrors;
                });
            }
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (isSubmitting) return;

        // Check if file is actually selected
        const formDataToValidate = {
            ...formData,
            mainImage: selectedFile ? selectedFile.name : '',
        };

        // Validate form data
        const validationResult = validateArticleForm(formDataToValidate);

        if (!validationResult.isValid) {
            // Set errors to display validation messages
            setErrors(validationResult.errors);

            // Scroll to first error field
            const firstErrorField = Object.keys(validationResult.errors)[0];
            if (firstErrorField) {
                const errorElement = document.getElementById(
                    firstErrorField === 'tag' ? 'tag-select' :
                        firstErrorField === 'category' ? 'category-select' :
                            firstErrorField === 'mainImage' ? 'main-image-input' :
                                firstErrorField === 'shortDescription' ? 'short-description' :
                                    firstErrorField === 'markdownContent' ? 'markdown-content' :
                                        firstErrorField === 'publishingDate' ? 'publishing-date' :
                                            firstErrorField === 'author' ? 'article-author' :
                                                'article-title'
                );
                if (errorElement) {
                    errorElement.scrollIntoView({
                        behavior: 'smooth', block: 'center'
                    });
                    errorElement.focus();
                }
            }
            return;
        }

        // Form is valid, proceed with submission
        if (validationResult.sanitizedData) {
            setIsSubmitting(true);

            try {
                // Submit as FormData so the uploaded image file is sent to the API
                const formDataToSend = new FormData();
                const { title, shortDescription, author, publishingDate, articleColor, category, tag, markdownContent } =
                    validationResult.sanitizedData;
                formDataToSend.append('title', title);
                formDataToSend.append('shortDescription', shortDescription);
                formDataToSend.append('author', author);
                formDataToSend.append('publishingDate', publishingDate);
                formDataToSend.append('articleColor', articleColor); // hex without #
                formDataToSend.append('category', category);
                formDataToSend.append('tag', JSON.stringify(tag));
                formDataToSend.append('markdownContent', markdownContent);
                if (selectedFile) {
                    formDataToSend.append('mainImage', selectedFile);
                }

                const response = await fetch('/api/articles/submit', {
                    method: 'POST',
                    body: formDataToSend,
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error || 'Failed to submit article');
                }

                // Logout user to reset auth state
                try {
                    await fetch('/api/auth/logout', {
                        method: 'POST',
                    });
                } catch (logoutError) {
                    console.error('Logout error:', logoutError);
                }

                // Navigate to blog page with success parameter
                router.push('/blog?success=article-submitted');

            } catch (error) {
                console.error('Submission error:', error);
                setErrors({
                    general: error instanceof Error ? error.message : 'Failed to submit article. Please try again.'
                });
                setIsSubmitting(false);
            }
        }
    };

    const handleCancel = () => {
        // Reset form or navigate away
        setFormData({
            title: '',
            shortDescription: '',
            author: '',
            publishingDate: getDefaultPublishingDateTime(),
            articleColor: 'FF603B',
            category: '',
            tag: [],
            mainImage: '',
            markdownContent: '',
        });
        setSelectedFile(null);
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
                padding: {
                    xs: '2rem 1rem', sm: '2rem', md: '3rem'
                },
            }}
            aria-label="New article form"
        >
            <Box sx={{
                display: 'flex', flexDirection: 'column', gap: 3
            }}>
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
                                color: errors.title ? 'error.main' : 'text.primary',
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
                            slotProps={{
                                htmlInput: {
                                    'aria-label': 'Article title',
                                },
                            }}
                        />
                    </FormControl>
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
                                color: errors.mainImage ? 'error.main' : 'text.primary',
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
                                    style={{
                                        display: 'none'
                                    }}
                                    aria-required="true"
                                    aria-describedby={errors.mainImage ? 'main-image-error' : 'main-image-helper'}
                                    aria-invalid={!!errors.mainImage}
                                    aria-labelledby="main-image-label"
                                />
                                <TextField
                                    value={formData.mainImage || ''}
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
                                    slotProps={{
                                        htmlInput: {
                                            'aria-label': 'Selected image file name',
                                        },
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
                                color: errors.shortDescription ? 'error.main' : 'text.primary',
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
                            slotProps={{
                                htmlInput: {
                                    'aria-label': 'Short description of the article',
                                },
                            }}
                        />
                    </FormControl>
                </Box>

                {/* Author and Publishing Date - Side by Side on Desktop, Stacked on Mobile */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: {
                            xs: 'column', md: 'row'
                        },
                        gap: 3,
                    }}
                >
                    <Box sx={{
                        flex: 1
                    }}>
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
                                    color: errors.author ? 'error.main' : 'text.primary',
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
                                slotProps={{
                                    htmlInput: {
                                        'aria-label': 'Article author name',
                                    },
                                }}
                            />
                        </FormControl>
                    </Box>

                    <Box sx={{
                        flex: 1
                    }}>
                        <FormControl fullWidth>
                            <Typography
                                component="label"
                                htmlFor="article-color-picker"
                                id="article-color-label"
                                sx={{
                                    display: 'block',
                                    mb: 1,
                                    fontWeight: 500,
                                    fontSize: '0.875rem',
                                    color: errors.articleColor ? 'error.main' : 'text.primary',
                                }}
                            >
                                Article colour
                            </Typography>
                            <Box
                                id="article-color"
                                sx={{
                                    width: '100%',
                                    height: 56,
                                }}
                            >
                                <input
                                    id="article-color-picker"
                                    name="articleColor"
                                    type="color"
                                    value={`#${formData.articleColor}`}
                                    onChange={(e) => {
                                        const hex = e.target.value.replace(/^#/, '');
                                        setFormData(prev => ({ ...prev, articleColor: hex }));
                                    }}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        padding: '2px 4px',
                                        border: '1px solid #ccc',
                                        borderRadius: 4,
                                        cursor: 'pointer',
                                        boxSizing: 'border-box',
                                    }}
                                    aria-labelledby="article-color-label"
                                />
                            </Box>
                        </FormControl>
                    </Box>

                    <Box sx={{
                        flex: 1
                    }}>
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
                                    color: errors.publishingDate ? 'error.main' : 'text.primary',
                                }}
                            >
                                Publishing Date &amp; time <span aria-label="required">*</span>
                            </Typography>
                            <TextField
                                id="publishing-date"
                                name="publishingDate"
                                type="datetime-local"
                                value={formData.publishingDate.replace(' ', 'T')}
                                onChange={handleChange('publishingDate')}
                                fullWidth
                                required
                                error={!!errors.publishingDate}
                                helperText={errors.publishingDate}
                                aria-required="true"
                                aria-describedby={errors.publishingDate ? 'publishing-date-error' : undefined}
                                aria-invalid={!!errors.publishingDate}
                                aria-labelledby="publishing-date-label"
                                slotProps={{
                                    htmlInput: {
                                        'aria-label': 'Select publishing date',
                                        placeholder: '',
                                    },
                                }}
                                sx={{
                                    '& input[type="datetime-local"]::-webkit-calendar-picker-indicator': {
                                        cursor: 'pointer',
                                    },
                                    '& input[type="datetime-local"]::before': {
                                        content: '""',
                                    },
                                    '& input[type="datetime-local"]:invalid::-webkit-datetime-edit': {
                                        color: 'transparent',
                                    },
                                    '& input[type="datetime-local"]:focus::-webkit-datetime-edit': {
                                        color: 'inherit',
                                    },
                                }}
                            />
                        </FormControl>
                    </Box>
                </Box>

                {/* Category and Tag - Side by Side on Desktop, Stacked on Mobile */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: {
                            xs: 'column', md: 'row'
                        },
                        gap: 3,
                    }}
                >
                    <Box sx={{
                        flex: 1
                    }}>
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
                                    color: errors.category ? 'error.main' : 'text.primary',
                                }}
                            >
                                Category <span aria-label="required">*</span>
                            </Typography>
                            <Select
                                id="category-select"
                                name="category"
                                value={formData.category}
                                onChange={(e: SelectChangeEvent<string>) => {
                                    const value = String(e.target.value); // Ensure it's always a string
                                    handleChange('category')({
                                        target: {
                                            value
                                        }
                                    });
                                }}
                                displayEmpty
                                aria-required="true"
                                aria-describedby={errors.category ? 'category-error' : undefined}
                                aria-invalid={!!errors.category}
                                aria-labelledby="category-label"
                                aria-label="Select article category"
                            >
                                {categoryOptions.map((category) => (
                                    <MenuItem key={category.id} value={String(category.id)}>
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

                    <Box sx={{
                        flex: 1
                    }}>
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
                                    color: errors.tag ? 'error.main' : 'text.primary',
                                }}
                            >
                                Tags <span aria-label="required">*</span>
                            </Typography>
                            <Select<string[]>
                                id="tag-select"
                                name="tag"
                                multiple
                                value={formData.tag}
                                onChange={(e: SelectChangeEvent<string[]>) => {
                                    const value = typeof e.target.value === 'string' ? [e.target.value] : e.target.value;
                                    setFormData(prev => ({
                                        ...prev,
                                        tag: value,
                                    }));
                                    // Clear error when user starts selecting
                                    if (errors.tag) {
                                        setErrors(prev => {
                                            const newErrors = {
                                                ...prev
                                            };
                                            delete newErrors.tag;
                                            return newErrors;
                                        });
                                    }
                                }}
                                renderValue={(selected: string[]) => {
                                    if (selected.length === 0) {
                                        return '';
                                    }
                                    return selected
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
                                color: errors.markdownContent ? 'error.main' : 'text.primary',
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
                            slotProps={{
                                htmlInput: {
                                    'aria-label': 'Article content in Markdown format',
                                },
                            }}
                            sx={{
                                '& .MuiInputBase-input': {
                                    fontFamily: 'monospace',
                                    fontSize: '0.9rem',
                                },
                            }}
                        />
                    </FormControl>
                </Box>

                {/* Action Buttons - Right Aligned */}
                <Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: {
                                xs: 'stretch', sm: 'flex-end'
                            },
                            gap: 2,
                            mt: 2,
                            flexDirection: {
                                xs: 'column', sm: 'row'
                            },
                        }}
                    >
                        <Button
                            type="button"
                            variant="outlined"
                            onClick={handleCancel}
                            sx={{
                                minWidth: {
                                    xs: '100%', sm: '120px'
                                },
                            }}
                            aria-label="Cancel and reset form"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            disabled={isSubmitting}
                            sx={{
                                minWidth: {
                                    xs: '100%', sm: '120px'
                                },
                            }}
                            aria-label="Submit new article"
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default NewArticleForm;

