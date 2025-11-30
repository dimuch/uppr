'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Alert,
  CircularProgress,
  FormControl,
} from '@mui/material';
import Header from '../../../components/common/header/Header';
import Footer from '../../../components/common/footers/footer/Footer';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams?.get('redirect') || '/blog/new-article';

  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Check if already authenticated
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/status');
        const data = await response.json();
        if (data.authenticated) {
          router.push(redirect);
        }
      } catch (err) {
        // Ignore errors, user needs to login
      }
    };
    checkAuth();
  }, [router, redirect]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, token }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Login failed');
        setLoading(false);
        return;
      }

      // Login successful, redirect
      router.push(redirect);
    } catch (err) {
      setError('An error occurred during login. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div>
      <Header search location="/auth/login" />
      <Container maxWidth="sm" sx={{ py: 8, minHeight: '60vh' }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            mt: 4,
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Login
          </Typography>

          <FormControl fullWidth>
            <Typography
              component="label"
              htmlFor="username"
              id="username-label"
              sx={{
                display: 'block',
                mb: 1,
                fontWeight: 500,
                fontSize: '0.875rem',
                color: 'text.primary',
              }}
            >
              Username
            </Typography>
            <TextField
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              fullWidth
              autoFocus
              disabled={loading}
              error={!!error}
              aria-required="true"
              aria-labelledby="username-label"
              slotProps={{
                htmlInput: {
                  'aria-label': 'Username',
                },
              }}
            />
          </FormControl>

          <FormControl fullWidth>
            <Typography
              component="label"
              htmlFor="token"
              id="token-label"
              sx={{
                display: 'block',
                mb: 1,
                fontWeight: 500,
                fontSize: '0.875rem',
                color: 'text.primary',
              }}
            >
              Code
            </Typography>
            <TextField
              id="token"
              name="token"
              value={token}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '').slice(0, 6);
                setToken(value);
              }}
              required
              fullWidth
              disabled={loading}
              error={!!error}
              inputMode="numeric"
              aria-required="true"
              aria-labelledby="token-label"
              slotProps={{
                htmlInput: {
                  'aria-label': 'TOTP code from Google Authenticator',
                  maxLength: 6,
                  pattern: '[0-9]{6}',
                },
              }}
            />
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading || !username || token.length !== 6}
            sx={{ mt: 2 }}
          >
            {loading ? <CircularProgress size={24} /> : 'Login'}
          </Button>

        </Box>
      </Container>
      <Footer top3Article={[]} />
    </div>
  );
}

