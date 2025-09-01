import { useState } from 'react'
import Box from "@mui/material/Box"
import {Typography} from "@mui/material";
import { Link, useNavigate} from 'react-router-dom';
import { motion, rgba } from "framer-motion";
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate(); // ✅ put it here

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (page) => {
    if (page) {
      navigate(page); // ✅ navigate correctly
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
        onClose={() => handleClose(null)} // just close if clicked outside
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