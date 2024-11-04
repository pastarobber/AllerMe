import React from 'react';
import { Box, Typography, Card, CardContent, Divider } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function Weather() {
  return (
    <Box
      display="flex"
      flexDirection="column" // 수직 방향으로 배치
      justifyContent="flex-start" // 위쪽으로 정렬
      alignItems="center"
      height="100vh"
      padding="20px"
      sx={{ backgroundColor: '#fff' }} // 배경색을 흰색으로 설정
    >
      <Card
        sx={{
          width: '100%',
          maxWidth: '400px',
          textAlign: 'center',
          boxShadow: 5,
          borderRadius: 3,
          background: 'linear-gradient(to bottom, #203A43, #2C5364)', // 카드의 배경을 그라데이션으로 설정
        }}
      >
        <CardContent>
          <Typography variant="h5" color="#ffffff" gutterBottom>
            오늘의 날씨
          </Typography>
          <Typography variant="h6" color="#ffffff">
            서울
          </Typography>

          <Box display="flex" flexDirection="column" alignItems="center" my={2}>
            <WbSunnyIcon sx={{ fontSize: 70, color: '#fdd835', mb: 1 }} /> {/* 맑은 날씨 아이콘 */}
            <Typography variant="h3" color="#ffffff" fontWeight="bold">
              25°C 
            </Typography>
          </Box>

          <Typography variant="body1" color="#ffffff" sx={{ fontSize: '18px', mb: 1 }}>
            맑음
          </Typography>
          
          <Divider variant="middle" sx={{ my: 2 }} />

          <Typography variant="body2" color="#ffffff">
            습도: 60% 
          </Typography>
          <Typography variant="body2" color="#ffffff">
            바람: 5 km/h 
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Weather;
