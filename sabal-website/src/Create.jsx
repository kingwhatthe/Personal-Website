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
import jsLogo from './assets/js.png'
import reactLogo from './assets/react.svg'
import BasicMenu from './components/BasicMenu';
import MovingBox from './components/MovingBox';

function Create() {
  const [count, setCount] = useState(0)
  const langs = [
          {
            icon: jsLogo,
            link: "js.com"
          },
          {
            icon: reactLogo,
            link: "react.com"
          }
        ]
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
          <Box sx = {{background: "radial-gradient(ellipse, rgba(255,255,255,0.3) 0%, rgba(0,0,0,0) 70%)",
            p: 5,
          }}>
            <Typography variant='h1'>Creation</Typography>
          </Box>

          <Typography sx={{fontStyle:"italic"}}>
            "Creation is like cooking; go make some lemonade"
          </Typography>
          <Typography>
            -Sabal Schuster
          </Typography>
        </Box>
          
        <MovingBox title = "this is a post" date = "8/20/2020" link = "https://google.com" image = "/sabalschuster.jpg" left={false} languages={langs}> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis doloribus ad placeat aut dicta repudiandae illo debitis accusantium exercitationem atque odit deserunt eveniet fugiat id voluptates, voluptatibus reiciendis? Quod.
        </MovingBox>
        <MovingBox title = "this is a post" date = "8/20/2020" link = "https://google.com" image = "/sabalschuster.jpg" left={true}> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis doloribus ad placeat aut dicta repudiandae illo debitis accusantium exercitationem atque odit deserunt eveniet fugiat id voluptates, voluptatibus reiciendis? Quod.
        </MovingBox>
        <MovingBox title = "this is a post" date = "8/20/2020" link = "https://google.com" image = "/sabalschuster.jpg" left={false}> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis doloribus ad placeat aut dicta repudiandae illo debitis accusantium exercitationem atque odit deserunt eveniet fugiat id voluptates, voluptatibus reiciendis? Quod.
        </MovingBox>
    </>
  )
}

export default Create
