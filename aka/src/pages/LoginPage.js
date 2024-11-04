
import React from 'react';
import { Box, Button, Typography } from '@mui/material';

function LoginPage() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center" 
      alignItems="center"
      height="100vh"
      padding="20px"
      sx={{ backgroundColor: '#f5f5f5' }} 
    >
      
      <Box textAlign="center" marginBottom="20px">
        <img src="/logo.png" alt="Logo" style={{ width: '150px', height: 'auto' }} />
        <Typography variant="h5" marginTop="10px" color="primary">
          안녕하세요! 알레미 에요
        </Typography>
      </Box>

    
      <Box display="flex" flexDirection="column" width="100%" maxWidth="300px" marginBottom="20px">
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            marginBottom: '10px',
            padding: '12px 0',
            fontWeight: 'bold',
            fontSize: '16px',
            '&:hover': { transform: 'scale(1.05)' }, 
            transition: 'transform 0.3s ease',
          }}
        >
          로그인
        </Button>
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          sx={{
            padding: '12px 0',
            fontWeight: 'bold',
            fontSize: '16px',
            '&:hover': { transform: 'scale(1.05)' }, 
            transition: 'transform 0.3s ease',
          }}
        >
          회원가입
        </Button>
      </Box>
    </Box>
  );
}

export default LoginPage;


