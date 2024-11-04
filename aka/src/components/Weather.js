import React from 'react';
import { Box, Typography, Card, CardContent, Divider } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


function Weather() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" padding="20px" sx={{ backgroundColor: '#e0f7fa' }}>
      <Card sx={{ width: '100%', maxWidth: '400px', textAlign: 'center', boxShadow: 5, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h5" color="primary" gutterBottom>
            오늘의 날씨
          </Typography>
          <Typography variant="h6" color="textSecondary">
            서울
          </Typography>

          <Box display="flex" flexDirection="column" alignItems="center" my={2}>
            
            <WbSunnyIcon sx={{ fontSize: 70, color: '#fdd835', mb: 1 }} /> {/* 맑은 날씨 아이콘 */}
            <Typography variant="h3" color="textPrimary" fontWeight="bold">
              25°C 
            </Typography>
          </Box>

         
          <Typography variant="body1" color="textSecondary" sx={{ fontSize: '18px', mb: 1 }}>
            맑음
          </Typography>
          
          <Divider variant="middle" sx={{ my: 2 }} />

          <Typography variant="body2" color="textSecondary">
            습도: 60% 
          </Typography>
          <Typography variant="body2" color="textSecondary">
            바람: 5 km/h 
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Weather;
