// NotificationPage.js
import React from 'react';
import { Box, Typography, Card, CardContent, Divider } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber'; // 경고 아이콘

function NotificationPage() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" padding="20px" sx={{ backgroundColor: '#ffebee' }}>
      <Card sx={{ width: '100%', maxWidth: '400px', textAlign: 'center', boxShadow: 5, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h5" color="primary" gutterBottom>
            오늘의 알레르기 위험도
          </Typography>

          {/* 위험도 지수 표시 */}
          <Box display="flex" alignItems="center" justifyContent="center" my={2}>
            <WarningAmberIcon sx={{ fontSize: 50, color: '#d32f2f', mr: 1 }} />
            <Typography variant="h4" color="error" fontWeight="bold">
              매우 높음 {/* 예시 위험도 */}
            </Typography>
          </Box>
          <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
            오늘의 알레르기 위험도가 높습니다. 외출 시 주의가 필요합니다.
          </Typography>

          <Divider variant="middle" sx={{ my: 2 }} />

          {/* 행동 지침 */}
          <Typography variant="h6" color="primary" gutterBottom>
            행동 지침
          </Typography>
          <Typography variant="body2" color="textSecondary" align="left" sx={{ mb: 1 }}>
            • 마스크 착용을 권장합니다.
          </Typography>
          <Typography variant="body2" color="textSecondary" align="left" sx={{ mb: 1 }}>
            • 외출 후 손과 얼굴을 깨끗이 씻으세요.
          </Typography>
          <Typography variant="body2" color="textSecondary" align="left" sx={{ mb: 1 }}>
            • 환기를 자제하고 실내 공기 청정을 유지하세요.
          </Typography>
          <Typography variant="body2" color="textSecondary" align="left" sx={{ mb: 1 }}>
            • 알레르기 약을 복용 중이라면 오늘은 추가 복용을 고려하세요.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default NotificationPage;
