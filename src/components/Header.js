import { AppBar, IconButton, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MapIcon from '@mui/icons-material/Map';
import WbSunnyIcon from '@mui/icons-material/WbSunny'; 

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
      <div style={{ flexGrow: 1 }}>
        <Link to="/main" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3
            style={{
              margin: 0,          // 기본 마진 제거
              marginLeft: '10px',
              marginTop: '5px',    // 상단 마진 설정
              color: 'white',      // 글자 색상 흰색으로 설정
              fontSize: '30px',
            }}
          >
            AllerMe
          </h3>
        </Link>
      </div>
        <Link to="/weather">
          <IconButton color="inherit" sx={{ '& svg': { fontSize: '1.9rem' } }}>
            <WbSunnyIcon sx={{ color: '#fff' }}/>
          </IconButton>
        </Link>

        <Link to="/map">
          <IconButton color="inherit" sx={{ '& svg': { fontSize: '1.9rem' } }}>
            <MapIcon sx={{ color: '#fff' }}/>
          </IconButton>
        </Link>

        <Link to="/notifications">
          <IconButton color="inherit" sx={{ '& svg': { fontSize: '1.9rem' } }}>
            <NotificationsIcon sx={{ color: '#fff' }} />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
