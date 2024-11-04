import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent, Divider } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';

function MainPage() {
  const [userPosition, setUserPosition] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error("위치 정보를 가져올 수 없습니다.", error);
      }
    );
  }, []);

  useEffect(() => {
    if (userPosition) {
      const container = document.getElementById('map'); 
      const options = {
        center: new window.kakao.maps.LatLng(userPosition.lat, userPosition.lng),
        level: 3,
      };
      const map = new window.kakao.maps.Map(container, options);

      const markerPosition = new window.kakao.maps.LatLng(userPosition.lat, userPosition.lng);
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);

      const infowindow = new window.kakao.maps.InfoWindow({
        content: '<div style="padding:3px 40px;">현재 위치</div>', 
      });
      infowindow.open(map, marker);
    }
  }, [userPosition]);

  const allergyData = [
    { name: '월', value: 3 },
    { name: '화', value: 5 },
    { name: '수', value: 7 },
    { name: '목', value: 4 },
    { name: '금', value: 6 },
  ];

  const handleLogoutClick = () => {
    navigate('/');
  };

  return (
    <Box padding="20px">
      {/* 오늘의 알레르기 지수 */}
      <Card sx={{ marginBottom: '20px', boxShadow: 3, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h6" color="#070F2B" fontWeight="bold" gutterBottom>
            오늘의 알레르기 지수
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Typography variant="body1" color="textSecondary">
            알레르기 지수: <strong style={{ color: '#d32f2f' }}>높은 위험</strong>
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
            알레르기 지수가 높으니 주의가 필요합니다.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ height: '400px', overflow: 'hidden', borderRadius: 3, boxShadow: 3, marginBottom: '20px' }}>
        <Box id="map" sx={{ width: '100%', height: '100%' }} onClick={() => navigate('/map')} />
      </Card>

      <Box display="flex" gap="20px" justifyContent="space-between">
        <Card sx={{ flex: 1, boxShadow: 3, borderRadius: 3, padding: '5px' }}>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Typography 
              variant="h7" 
              fontWeight="bold" 
              color="#070F2B" 
              gutterBottom 
              sx={{ marginLeft: '5px', marginBottom: '5px', marginTop: '5px' }}
            >
              알레르기 위험수준
            </Typography>
            <ResponsiveContainer width="100%" height={140}>
              <LineChart 
                data={allergyData}
                margin={{ top: 5, right: 10, left: -40, bottom: 5 }} // 왼쪽 여백을 줄임
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Card>

        <Card sx={{ flex: 1, boxShadow: 3, borderRadius: 3, padding: '10px' }}>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Typography 
              variant="h7" 
              fontWeight="bold" 
              color="#070F2B" 
              gutterBottom 
              sx={{ marginBottom: '5px' }}
            >
              알래미 이야기
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '8px' }}>
              “오늘 알레르기 지수가 높아서 외출 시 불편했어요.”
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '8px' }}>
              “마스크 덕분에 큰 문제 없이 지낼 수 있었어요.”
            </Typography>
          </Box>
        </Card>
      </Box>

      {/* 로그아웃 섹션 추가 */}
      <Box className="logout-section" sx={{ marginTop: '20px', textAlign: 'center' }}>
        <Divider className="logout-line" />
        <Typography className="logout-text" onClick={handleLogoutClick} sx={{ cursor: 'pointer', color: '#65c9f0', marginTop: '10px' }}>
          로그아웃
        </Typography>
      </Box>
    </Box>
  );
}

export default MainPage;
