import React from 'react';
import { Box, Button, Typography, TextField, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import InstagramIcon from '@mui/icons-material/Instagram';
import PersonIcon from '@mui/icons-material/Person';

function LoginPage() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/main'); // 로그인 버튼 클릭 시 '/main' 경로로 이동
  };

  return (
    <Box
      className="login-container"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{ padding: '20px', maxWidth: '300px', margin: 'auto', textAlign: 'center', color: '#333' }}
    >
      {/* 이미지 및 환영 텍스트 */}
      <Box textAlign="center" marginBottom="20px">
        <img src="/logo.png" alt="Welcome Mascot" className="welcome-image" style={{ width: '100px', margin: '0 auto 20px' }} />
        <Typography
          variant="h5"
          color="primary"
          sx={{
            fontSize: '15px',     // h2 크기 적용
            marginBottom: '10px', // h2의 하단 여백 적용
            marginTop: '10px', // h2의 하단 여백 적용
            color: '#666',        // 설명 텍스트 색상 적용
            textAlign: 'center',  // 가운데 정렬
          }}
        >
          안녕하세요! 알래미예요
        </Typography>
      </Box>

      {/* 이메일/폰 번호 입력 필드 */}
      <Box display="flex" alignItems="center" marginTop="20px" width="100%" sx={{ position: 'relative' }}>
      <PersonIcon sx={{ color: '#888', position: 'absolute', left: 'calc(10% - 20px)' }} />
      <TextField
        variant="standard"
        placeholder="이메일 또는 폰 번호를 입력하세요"
        fullWidth
        sx={{
          width: '80%',
          margin: 'auto',
          paddingLeft: '15px',
          fontSize: '1rem',
          '& .MuiInput-underline:hover:before': {
            borderBottom: '1px solid #ccc', // 호버 시 밑줄 색상 회색
          },
          '& .MuiInput-underline:after': {
            borderBottom: '1px solid #ccc', // 포커스 시 밑줄 색상 회색
          },
        }}
        inputProps={{
          style: { paddingLeft: '5px' }, // placeholder를 아이콘과 간격 조정
        }}
      />
    </Box>

      {/* 로그인 및 회원가입 버튼 */}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleLoginClick}
        sx={{
          backgroundColor: '#65c9f0',
          marginTop: '20px',
          padding: '12px',
          fontSize: '1rem',
          color: '#fff',
          borderRadius: '4px',
          boxShadow: 'none', // 그림자 제거
          '&:hover': {
            backgroundColor: '#54b3db',
            transform: 'scale(1.03)',
            boxShadow: 'none', // 호버 시에도 그림자 제거
          },
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
          backgroundColor: '#65c9f0',
          marginTop: '20px',
          padding: '12px',
          fontSize: '1rem',
          color: '#fff',
          borderRadius: '4px',
          '&:hover': {
            backgroundColor: '#54b3db',
            transform: 'scale(1.03)',
          },
          transition: 'transform 0.3s ease',
        }}
      >
        회원가입
      </Button>

      {/* 소셜 로그인 */}
      <Typography variant="body2" color="textSecondary" marginTop="20px" marginBottom="10px">
        Or Sign In via
      </Typography>
      <Box display="flex" justifyContent="center" gap="10px">
        <IconButton
          sx={{
            color: '#DB4437',
            border: '1px solid #ccc',
            backgroundColor: '#fff',
            padding: '10px',
            borderRadius: '4px',
            width: '80px',
            height: 'auto',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
              backgroundColor: '#f0f0f0',
            },
            '& svg': { fontSize: '1.2rem' }, // 아이콘 크기 조정
          }}
        >
          <GoogleIcon />
        </IconButton>
        <IconButton
          sx={{
            color: '#000',
            border: '1px solid #ccc',
            backgroundColor: '#fff',
            padding: '10px',
            borderRadius: '4px',
            width: '80px',
            height: 'auto',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
              backgroundColor: '#f0f0f0',
            },
            '& svg': { fontSize: '1.2rem' }, // 아이콘 크기 조정
          }}
        >
          <AppleIcon />
        </IconButton>
        <IconButton
          sx={{
            color: '#E1306C',
            border: '1px solid #ccc',
            backgroundColor: '#fff',
            padding: '10px',
            borderRadius: '4px',
            width: '80px',
            height: 'auto',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
              backgroundColor: '#f0f0f0',
            },
            '& svg': { fontSize: '1.2rem' }, // 아이콘 크기 조정
          }}
        >
          <InstagramIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default LoginPage;
