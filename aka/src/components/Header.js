import { AppBar, IconButton, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WbSunnyIcon from '@mui/icons-material/WbSunny'; 

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <div style={{ flexGrow: 1 }}>
        
          <Link to="/main" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3>AllerMe</h3>
          </Link>
        </div>
  
        <Link to="/weather">
          <IconButton color="inherit">
            <WbSunnyIcon />
          </IconButton>
        </Link>

        <Link to="/notifications">
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

