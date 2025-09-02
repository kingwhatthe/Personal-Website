import { useState } from 'react'
import './Home.css'
import Box from "@mui/material/Box"
import {Typography} from "@mui/material";
import { Link, useNavigate} from 'react-router-dom';
import { motion, rgba } from "framer-motion";
import { Post } from './components/Post'
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import BasicMenu from './components/BasicMenu';
import MovingBox from './components/MovingBox';
import postInfo from './postInfo.json'

function Connect() {
  const [count, setCount] = useState(0)

  document.documentElement.style.background = "radial-gradient(ellipse, rgba(99, 36, 131, 0.68) 5%,rgba(20, 4, 34, 1) 95%)"
  const connections = postInfo.connections;
  return (
    <>
        <Box sx={{
          position: "fixed",
          display: "fixed",
          top: 30,
          left: 30,
          height: "50px",
          zIndex: 1000
        }}>
          <BasicMenu></BasicMenu>

        </Box>
        <Box display="flex" gap = {4} sx ={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "175px",
          marginBottom: "300px",
          textShadow: "5px 5px 5px rgba(0,0,0,0.7)"
        }}>
          <Box sx = {{
            // background: "radial-gradient(ellipse, rgba(255,255,255,0.3) 0%, rgba(0,0,0,0) 70%)",
            p: 5,
          }}>
            <Typography variant='h1'>Connections &#129309;</Typography>
          </Box>

          <Typography sx={{fontStyle:"italic"}}>
            "For small creatures such as we the vastness is bearable only through love."
          </Typography>
          <Typography>
            — Carl Sagan
          </Typography>
        </Box>
          
        {connections?.map((post,i)=>(
            <MovingBox title = {post.title} date = {post.date} link = {post.link} image = {post.image} left={i%2!=0} languages={post.languages}> 
                {post.content ? post.content : "No Post content"}
            </MovingBox>
          ))}
    </>
  )
}

export default Connect
