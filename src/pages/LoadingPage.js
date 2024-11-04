import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function LoadingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000);

   
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{ backgroundColor: '#A2DFF7' }}
    >
      <img src="/logo.png" alt="Logo" style={{ width: '150px', height: 'auto' }} />
    </Box>
  );
}

export default LoadingPage;

