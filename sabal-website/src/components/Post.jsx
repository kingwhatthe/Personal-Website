import {IconButton, Box, Typography, Link } from "@mui/material"
import React from "react"

const TechIcon = ({icon, link})=>{
  return (
    <IconButton
      component="a"
      href={link}
      target="_blank"  // optional: opens in new tab
      rel="noopener noreferrer"
    >
      <img 
        src={icon} 
        alt="custom icon" 
        style={{ width: 35, height: 35 }} 
      />
    </IconButton>
  )
}

export const TextBox = ({children}) =>{
    return (<>
        <Box sx = {{
            p: '20px',
            m: "40px",
            backgroundColor: "rgba(162, 172, 172, 0.17)",
            borderRadius: "20px"
        }}>
            {children}
            {/* {React.Children.map(children, (child,i) => {
                <Typography>
                    {child}
                </Typography>
            })} */}
            
        </Box>
    </>)
}

export const Post = ({children, title, date, link, image, languages}) => {
    return (<>
    <Box justifyContent="center" display="flex" minHeight="400px" gap={3}
    sx = {{
            backgroundColor: "rgba(48, 52, 147, 0.22)",
            p: 5,
            margin: "150px 0 150px 0",
            borderRadius: "30px",
            flexDirection: {
                md: "row",
                sm: "column",
                xs: "column",
            },
    }}>
        <Box component="img" sx={{
            maxHeight: {
                md: "400px",
                sm: "1000px",
            },
            borderRadius:"50px",          
        }}src={image} alt="Post image"></Box>
        <Box>
            <Box >
                <Box display="flex" justifyContent="space-between" flexDirection="row">
                    <Typography variant="h3">{title} </Typography>
                    
                    {languages?.map((language, i)=>(
                        <TechIcon key={i} link = {language.link} icon = {language.icon}></TechIcon>
                    ))}
                    <Typography variant="h4">{date}</Typography>
                </Box>
                
                <a href={link}>Link to Project</a>
            </Box>
            <TextBox>
                <>
                    {children}
                </>
            </TextBox>
        </Box>
        
    </Box>
    </>);
}