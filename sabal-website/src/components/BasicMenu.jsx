
import Box from "@mui/material/Box"
import { useNavigate} from 'react-router-dom';
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

//Used for navigation on non-home page
export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (page) => {
    if (page) {
      navigate(page);
    }
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ p: 0 }}
      >
        <Box
          component="img"
          src="/sabalschuster.jpg"
          alt="sabal pic"
          width="92px"
          borderRadius="5px"
          
        />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(null)}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        <MenuItem onClick={() => handleClose("/")}>Home</MenuItem>
        <MenuItem onClick={() => handleClose("/connect")}>Connect</MenuItem>
        <MenuItem onClick={() => handleClose("/create")}>Create</MenuItem>
        <MenuItem onClick={() => handleClose("/educate")}>Educate</MenuItem>
      </Menu>
    </div>
  );
}