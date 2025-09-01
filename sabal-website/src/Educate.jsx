import { useState } from 'react'
import './Home.css'
import Box from "@mui/material/Box"
import {Typography} from "@mui/material";
import { Link, useNavigate} from 'react-router-dom';
import { motion, positionalKeys, rgba } from "framer-motion";
import { Post } from './components/Post'
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import BasicMenu from './components/BasicMenu';
import MovingBox from './components/MovingBox';
import postInfo from './postInfo.json'

function Educate() {
  const [count, setCount] = useState(0)
  const educations = postInfo.educations;
//   const langs = [
//           {
//             icon: jsLogo,
//             link: "js.com"
//           },
//           {
//             icon: reactLogo,
//             link: "react.com"
//           }
//         ];
    document.documentElement.style.background = "radial-gradient(ellipse, rgba(131, 99, 36, 0.68) 5%,rgba(34, 26, 4, 1) 95%)"
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
            <Typography variant='h1'>Education 📖✏️</Typography>
          </Box>

          <Typography sx={{fontStyle:"italic"}}>
            "The more that you read, the more things you will know, the more that you learn, the more places you’ll go.”
          </Typography>
          <Typography>
            — Dr. Seuss
          </Typography>
        </Box>
          {educations?.map((post,i)=>(
            <MovingBox title = {post.title} date = {post.date} link = {post.link} image = {post.image} left={i%2!=0} languages={post.languages}> 
                {post.content ? post.content : "No Post content"}
            </MovingBox>
          ))}
        
        {/* <MovingBox title = "this is a post" date = "8/20/2020" link = "https://google.com" image = "/sabalschuster.jpg" left={true}> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis doloribus ad placeat aut dicta repudiandae illo debitis accusantium exercitationem atque odit deserunt eveniet fugiat id voluptates, voluptatibus reiciendis? Quod.
        </MovingBox>
        <MovingBox title = "this is a post" date = "8/20/2020" link = "https://google.com" image = "/sabalschuster.jpg" left={false}> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis doloribus ad placeat aut dicta repudiandae illo debitis accusantium exercitationem atque odit deserunt eveniet fugiat id voluptates, voluptatibus reiciendis? Quod.
        </MovingBox> */}
    </>
  )
}

export default Educate
