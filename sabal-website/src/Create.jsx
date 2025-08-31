import { useState } from 'react'
import './Home.css'
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography";
import { motion, rgba } from "framer-motion";
import { Post } from './Post'

const MovingBox = ({title, date, link, image, left, children}) =>{
  return (
     <Box
      component={motion.div}
      initial={{ x: left ? "100%" : "-100%", opacity: 1 }}     // Start off-screen
      whileInView={{ x: left ? "7%" : "-7%", opacity: 1 }}      // Animate when scrolled into view
      viewport={{ once: true, amount: 0.05}}  // `once` = animate only first time; `amount` = % visible before triggering
      transition={{ duration: .7, ease: "easeOut" }}
    >
      <Post title = {title} date={date} link={link} image={image}>
        {children}
      </Post>
    </Box>
  );
}

function Create() {
  const [count, setCount] = useState(0)

  return (
    <>
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

        <MovingBox title = "this is a post" date = "8/20/2020" link = "https://google.com" image = "/sabalschuster.jpg" left={false}> 
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
