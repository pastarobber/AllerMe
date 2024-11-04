import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';

function MapPage() {
  const [userPosition, setUserPosition] = useState(null);
  const [map, setMap] = useState(null); // map 객체를 상태로 추가
  const [selectedPlace, setSelectedPlace] = useState(null);

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
      const container = document.getElementById('hospitalMap');
      const options = {
        center: new window.kakao.maps.LatLng(userPosition.lat, userPosition.lng),
        level: 3,
      };
      const newMap = new window.kakao.maps.Map(container, options);
      setMap(newMap); // map 객체를 상태로 설정

      const places = new window.kakao.maps.services.Places();
      const callback = (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          result.forEach((place) => {
            const markerPosition = new window.kakao.maps.LatLng(place.y, place.x);
            const marker = new window.kakao.maps.Marker({
              position: markerPosition,
              map: newMap,
            });

            const infowindow = new window.kakao.maps.InfoWindow({
              content: `<div style="padding:5px; font-size:14px;">${place.place_name}</div>`,
            });

            window.kakao.maps.event.addListener(marker, 'click', () => {
              setSelectedPlace({
                name: place.place_name,
                phone: place.phone || '전화번호 없음',
                address: place.address_name || '주소 정보 없음',
                position: markerPosition,
              });
              infowindow.open(newMap, marker);
            });
          });
        }
      };

      places.keywordSearch('병원', callback, {
        location: new window.kakao.maps.LatLng(userPosition.lat, userPosition.lng),
        radius: 2000,
      });
    }
  }, [userPosition]);

  const handleShowDirections = () => {
    if (map && userPosition && selectedPlace) {
      const directionsService = new window.kakao.maps.services.Directions();
      const start = new window.kakao.maps.LatLng(userPosition.lat, userPosition.lng);
      const end = selectedPlace.position;

      directionsService.route({
        origin: start,
        destination: end,
        travelMode: window.kakao.maps.services.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const routePath = new window.kakao.maps.Polyline({
            path: result.routes[0].overview_path,
            strokeWeight: 5,
            strokeColor: '#00aaff',
            strokeOpacity: 0.8,
          });
          routePath.setMap(map);
        }
      });
    }
  };

  return (
    <Box padding="20px">
    
      <Box id="hospitalMap" sx={{ width: '100%', height: '500px', marginBottom: '20px' }} />

    
      {selectedPlace && (
        <Card sx={{ padding: '20px', boxShadow: 3, borderRadius: 3 }}>
          <CardContent>
            <Typography variant="h5" color="primary" fontWeight="bold" gutterBottom>
              {selectedPlace.name}
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ marginBottom: '10px' }}>
              <strong>전화번호:</strong> {selectedPlace.phone}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              <strong>주소:</strong> {selectedPlace.address}
            </Typography>
            <Button variant="contained" color="primary" onClick={handleShowDirections} sx={{ marginTop: '15px' }}>
              경로 보기
            </Button>
          </CardContent>
        </Card>
      )}
    </Box>
  );
}

export default MapPage;


