import './Home.css'
import Box from "@mui/material/Box"
import {Typography} from "@mui/material";
import * as React from 'react';
import postInfo from './postInfo.json'
import BasicMenu from './components/BasicMenu';
import MovingBox from './components/MovingBox';

function Create() {
  //Change color for Iphones
  React.useEffect(() => {
    const metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", "#080422");
    }
  }, []);

  //load from json
  const projects = postInfo.projects;
  
  //change background color
  document.documentElement.style.background = "radial-gradient(ellipse, rgba(36, 69, 131, 0.681) 5%,rgb(8, 4, 34) 95%)";
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
            "We think we have solved the mystery of creation. Maybe we should patent the universe and charge everyone royalties for their existence."
          </Typography>
          <Typography>
            — Stephen Hawking
          </Typography>
        </Box>
        
        {/* Displays posts */}
        {projects?.map((post,i)=>(
            <MovingBox title = {post.title} date = {post.date} link = {post.link} image = {post.image} left={i%2!=0} languages={post.languages}> 
                {post.content ? post.content : "No Post content"}
            </MovingBox>
          ))}
    </>
  )
}

export default Create
