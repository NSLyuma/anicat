import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

export interface StandardComponentProps {
  link: string;
  text: string;
}

function Nav({ link, text }: StandardComponentProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          color: '#000',
          fontSize: '20px',
        }}
      >
        <img src="img/menu.png" alt="menu" />
      </Button>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{ top: '-5px', left: '-5px' }}
      >
        <MenuItem onClick={handleClose} sx={{ padding: '0' }}>
          <Link className="nav_link" to="/">
            Главная
          </Link>
        </MenuItem>

        <MenuItem onClick={handleClose} sx={{ padding: '0' }}>
          <Link className="nav_link" to={`/${link}`}>
            {text}
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Nav;
