import { useState } from 'react'
import Box from "@mui/material/Box"
import {Typography} from "@mui/material";
import { Link, useNavigate} from 'react-router-dom';
import { motion, rgba } from "framer-motion";
import { Post } from './Post'
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const MovingBox = ({title, date, link, image, left, children, languages}) =>{
  return (
     <Box
      component={motion.div}
      initial={{ x: left ? "100%" : "-100%", opacity: 1 }}     // Start off-screen
      whileInView={{ x: left ? "7%" : "-7%", opacity: 1 }}      // Animate when scrolled into view
      viewport={{ once: true, amount: 0.05}}  // `once` = animate only first time; `amount` = % visible before triggering
      transition={{ duration: .7, ease: "easeOut" }}
    >
      <Post title = {title} date={date} link={link} image={image} languages={languages}>
        {children}
      </Post>
    </Box>
  );
}
export default MovingBox