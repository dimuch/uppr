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
    Paper,
    Stepper,
    Step,
    StepLabel,
} from '@mui/material';
import Header from '../../../components/common/header/Header';
import Footer from '../../../components/common/footers/footer/Footer';
import PageNotFound from '../../../components/common/404/404';

const steps = ['Enter Admin Token', 'Enter Username', 'Scan QR Code', 'Verify Setup'];

export default function SetupPage() {
    return <PageNotFound redirectLink="/blog" redirectPage="Повернутись до блогу"/>;


    // const router = useRouter();
    // const searchParams = useSearchParams();
    // const [activeStep, setActiveStep] = useState(0);
    // const [adminToken, setAdminToken] = useState('');
    // const [username, setUsername] = useState('');
    // const [qrCode, setQrCode] = useState('');
    // const [manualEntryKey, setManualEntryKey] = useState('');
    // const [verificationToken, setVerificationToken] = useState('');
    // const [error, setError] = useState('');
    // const [loading, setLoading] = useState(false);
    // const [setupComplete, setSetupComplete] = useState(false);
    // const [tokenVerified, setTokenVerified] = useState(false);
    //
    // // Check if admin token is provided in URL
    // useEffect(() => {
    //     const tokenFromUrl = searchParams?.get('adminToken');
    //     if (tokenFromUrl) {
    //         setAdminToken(tokenFromUrl);
    //         verifyAdminToken(tokenFromUrl);
    //     }
    // }, [searchParams]);
    //
    // const verifyAdminToken = async (token: string) => {
    //     if (!token) {
    //         setError('Admin token is required');
    //         return false;
    //     }
    //
    //     setLoading(true);
    //     setError('');
    //
    //     try {
    //         // Try to access setup API with token to verify it
    //         const response = await fetch(`/api/auth/setup?adminToken=${encodeURIComponent(token)}`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 username: '__verify_token__', adminToken: token
    //             }),
    //         });
    //
    //         // If we get a 403, token is invalid
    //         // If we get a 400 (username error), token is valid
    //         if (response.status === 403) {
    //             setError('Invalid admin token. Access denied.');
    //             setLoading(false);
    //             return false;
    //         }
    //
    //         // Token is valid (we got past the auth check)
    //         setTokenVerified(true);
    //         setActiveStep(1); // Move to username entry step
    //         setLoading(false);
    //         return true;
    //     } catch (err) {
    //         setError('Failed to verify admin token');
    //         setLoading(false);
    //         return false;
    //     }
    // };
    //
    // const handleTokenSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     await verifyAdminToken(adminToken);
    // };
    //
    // const handleUsernameSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //
    //     if (!tokenVerified) {
    //         setError('Please verify admin token first');
    //         return;
    //     }
    //
    //     setError('');
    //     setLoading(true);
    //
    //     try {
    //         const response = await fetch(`/api/auth/setup?adminToken=${encodeURIComponent(adminToken)}`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'x-admin-token': adminToken,
    //             },
    //             body: JSON.stringify({
    //                 username, adminToken
    //             }),
    //         });
    //
    //         const data = await response.json();
    //
    //         if (!response.ok) {
    //             setError(data.error || 'Setup failed');
    //             setLoading(false);
    //             return;
    //         }
    //
    //         setQrCode(data.qrCode);
    //         setManualEntryKey(data.manualEntryKey);
    //         setActiveStep(2); // Move to QR code step
    //         setLoading(false);
    //     } catch (err) {
    //         setError('An error occurred during setup. Please try again.');
    //         setLoading(false);
    //     }
    // };
    //
    // const handleVerify = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     setError('');
    //     setLoading(true);
    //
    //     try {
    //         const response = await fetch('/api/auth/verify', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 username, token: verificationToken
    //             }),
    //         });
    //
    //         const data = await response.json();
    //
    //         if (!response.ok) {
    //             setError(data.error || 'Verification failed');
    //             setLoading(false);
    //             return;
    //         }
    //
    //         setSetupComplete(true);
    //         setActiveStep(3);
    //         setLoading(false);
    //     } catch (err) {
    //         setError('An error occurred during verification. Please try again.');
    //         setLoading(false);
    //     }
    // };
    //
    // const handleGoToLogin = () => {
    //     router.push('/auth/login');
    // };
    //
    // return (
    //     <div>
    //         <Header search location="/auth/setup"/>
    //         <Container maxWidth="md" sx={{
    //             py: 8, minHeight: '60vh'
    //         }}>
    //             <Typography variant="h4" component="h1" gutterBottom sx={{
    //                 mb: 4
    //             }}>
    //                 Setup Google Authenticator
    //             </Typography>
    //
    //             <Stepper activeStep={activeStep} sx={{
    //                 mb: 4
    //             }}>
    //                 {steps.map((label) => (
    //                     <Step key={label}>
    //                         <StepLabel>{label}</StepLabel>
    //                     </Step>
    //                 ))}
    //             </Stepper>
    //
    //             {error && (
    //                 <Alert severity="error" onClose={() => setError('')} sx={{
    //                     mb: 3
    //                 }}>
    //                     {error}
    //                 </Alert>
    //             )}
    //
    //             {/* Step 0: Enter Admin Token */}
    //             {activeStep === 0 && !tokenVerified && (
    //                 <Paper sx={{
    //                     p: 4
    //                 }}>
    //                     <Box
    //                         component="form"
    //                         onSubmit={handleTokenSubmit}
    //                         sx={{
    //                             display: 'flex',
    //                             flexDirection: 'column',
    //                             gap: 3,
    //                         }}
    //                     >
    //                         <Typography variant="h6" gutterBottom>
    //                             Admin Access Required
    //                         </Typography>
    //                         <Typography variant="body2" color="text.secondary" gutterBottom>
    //                             This page is restricted. Please enter the admin token to continue.
    //                         </Typography>
    //
    //                         <TextField
    //                             id="admin-token"
    //                             label="Admin Token"
    //                             type="password"
    //                             value={adminToken}
    //                             onChange={(e) => setAdminToken(e.target.value)}
    //                             required
    //                             fullWidth
    //                             autoFocus
    //                             disabled={loading}
    //                             slotProps={{
    //                                 htmlInput: {
    //                                     'aria-label': 'Admin token for authentication setup access',
    //                                 },
    //                             }}
    //                             helperText="Contact your administrator to obtain the admin token"
    //                         />
    //
    //                         <Button
    //                             type="submit"
    //                             variant="contained"
    //                             fullWidth
    //                             disabled={loading || !adminToken.trim()}
    //                         >
    //                             {loading ? <CircularProgress size={24}/> : 'Verify Token'}
    //                         </Button>
    //                     </Box>
    //                 </Paper>
    //             )}
    //
    //             {/* Step 1: Enter Username */}
    //             {activeStep === 1 && tokenVerified && (
    //                 <Paper sx={{
    //                     p: 4
    //                 }}>
    //                     <Box
    //                         component="form"
    //                         onSubmit={handleUsernameSubmit}
    //                         sx={{
    //                             display: 'flex',
    //                             flexDirection: 'column',
    //                             gap: 3,
    //                         }}
    //                     >
    //                         <Typography variant="body1" gutterBottom>
    //                             Enter your username to generate a QR code for Google Authenticator.
    //                         </Typography>
    //
    //                         <TextField
    //                             id="username"
    //                             label="Username"
    //                             value={username}
    //                             onChange={(e) => setUsername(e.target.value)}
    //                             required
    //                             fullWidth
    //                             autoFocus
    //                             disabled={loading}
    //                             slotProps={{
    //                                 htmlInput: {
    //                                     'aria-label': 'Username for authentication setup',
    //                                 },
    //                             }}
    //                         />
    //
    //                         <Button
    //                             type="submit"
    //                             variant="contained"
    //                             fullWidth
    //                             disabled={loading || !username.trim()}
    //                         >
    //                             {loading ? <CircularProgress size={24}/> : 'Generate QR Code'}
    //                         </Button>
    //                     </Box>
    //                 </Paper>
    //             )}
    //
    //             {/* Step 2: Scan QR Code */}
    //             {activeStep === 2 && (
    //                 <Paper sx={{
    //                     p: 4
    //                 }}>
    //                     <Box
    //                         sx={{
    //                             display: 'flex',
    //                             flexDirection: 'column',
    //                             gap: 3,
    //                             alignItems: 'center',
    //                         }}
    //                     >
    //                         <Typography variant="h6" gutterBottom>
    //                             Scan this QR code with Google Authenticator
    //                         </Typography>
    //
    //                         {qrCode && (
    //                             <Box
    //                                 component="img"
    //                                 src={qrCode}
    //                                 alt="QR Code for Google Authenticator"
    //                                 sx={{
    //                                     maxWidth: '300px',
    //                                     width: '100%',
    //                                     border: '1px solid #e0e0e0',
    //                                     borderRadius: 1,
    //                                 }}
    //                             />
    //                         )}
    //
    //                         <Box sx={{
    //                             width: '100%', mt: 2
    //                         }}>
    //                             <Typography variant="body2" color="text.secondary" gutterBottom>
    //                                 Or enter this key manually:
    //                             </Typography>
    //                             <Paper
    //                                 variant="outlined"
    //                                 sx={{
    //                                     p: 2,
    //                                     fontFamily: 'monospace',
    //                                     textAlign: 'center',
    //                                     backgroundColor: '#f5f5f5',
    //                                     wordBreak: 'break-all',
    //                                 }}
    //                             >
    //                                 {manualEntryKey}
    //                             </Paper>
    //                         </Box>
    //
    //                         <Typography variant="body2" color="text.secondary" sx={{
    //                             mt: 2
    //                         }}>
    //                             After scanning, click Next and enter the 6-digit code from the app.
    //                         </Typography>
    //
    //                         <Box sx={{
    //                             display: 'flex', gap: 2, width: '100%', mt: 2
    //                         }}>
    //                             <Button
    //                                 variant="outlined"
    //                                 onClick={() => {
    //                                     setActiveStep(1);
    //                                     setQrCode('');
    //                                     setManualEntryKey('');
    //                                 }}
    //                                 fullWidth
    //                             >
    //                                 Back
    //                             </Button>
    //                             <Button
    //                                 variant="contained"
    //                                 onClick={() => setActiveStep(3)}
    //                                 fullWidth
    //                             >
    //                                 Next
    //                             </Button>
    //                         </Box>
    //                     </Box>
    //                 </Paper>
    //             )}
    //
    //             {/* Step 3: Verify Setup */}
    //             {activeStep === 3 && !setupComplete && (
    //                 <Paper sx={{
    //                     p: 4
    //                 }}>
    //                     <Box
    //                         component="form"
    //                         onSubmit={handleVerify}
    //                         sx={{
    //                             display: 'flex',
    //                             flexDirection: 'column',
    //                             gap: 3,
    //                         }}
    //                     >
    //                         <Typography variant="h6" gutterBottom>
    //                             Verify Setup
    //                         </Typography>
    //                         <Typography variant="body2" color="text.secondary" gutterBottom>
    //                             Enter the 6-digit code from your Google Authenticator app to verify the setup.
    //                         </Typography>
    //
    //                         <TextField
    //                             id="verification-token"
    //                             label="TOTP Code (6 digits)"
    //                             value={verificationToken}
    //                             onChange={(e) => {
    //                                 const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    //                                 setVerificationToken(value);
    //                             }}
    //                             required
    //                             fullWidth
    //                             autoFocus
    //                             disabled={loading}
    //                             inputMode="numeric"
    //                             slotProps={{
    //                                 htmlInput: {
    //                                     'aria-label': 'TOTP code from Google Authenticator',
    //                                     maxLength: 6,
    //                                     pattern: '[0-9]{6}',
    //                                 },
    //                             }}
    //                         />
    //
    //                         <Box sx={{
    //                             display: 'flex', gap: 2
    //                         }}>
    //                             <Button
    //                                 variant="outlined"
    //                                 onClick={() => {
    //                                     setActiveStep(2);
    //                                     setVerificationToken('');
    //                                 }}
    //                                 fullWidth
    //                                 disabled={loading}
    //                             >
    //                                 Back
    //                             </Button>
    //                             <Button
    //                                 type="submit"
    //                                 variant="contained"
    //                                 fullWidth
    //                                 disabled={loading || verificationToken.length !== 6}
    //                             >
    //                                 {loading ? <CircularProgress size={24}/> : 'Verify'}
    //                             </Button>
    //                         </Box>
    //                     </Box>
    //                 </Paper>
    //             )}
    //
    //             {/* Setup Complete */}
    //             {setupComplete && (
    //                 <Paper sx={{
    //                     p: 4
    //                 }}>
    //                     <Box
    //                         sx={{
    //                             display: 'flex',
    //                             flexDirection: 'column',
    //                             gap: 3,
    //                             alignItems: 'center',
    //                             textAlign: 'center',
    //                         }}
    //                     >
    //                         <Alert severity="success" sx={{
    //                             width: '100%'
    //                         }}>
    //                             Setup completed successfully!
    //                         </Alert>
    //
    //                         <Typography variant="body1">
    //                             Your Google Authenticator is now configured. You can now log in using your username
    //                             and TOTP code.
    //                         </Typography>
    //
    //                         <Button
    //                             variant="contained"
    //                             onClick={handleGoToLogin}
    //                             sx={{
    //                                 mt: 2
    //                             }}
    //                         >
    //                             Go to Login
    //                         </Button>
    //                     </Box>
    //                 </Paper>
    //             )}
    //         </Container>
    //         <Footer top3Article={[]}/>
    //     </div>
    // );
}

