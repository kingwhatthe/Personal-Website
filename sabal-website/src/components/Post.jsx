import {IconButton, Box, Typography, Link, Button } from "@mui/material"
import React from "react"

const TechIcon = ({icon, link})=>{
  return (
    <IconButton
      component="a"
      href={link}
      target="_blank"  // optional: opens in new tab
      rel="noopener noreferrer"
      p="0"
      sx={{
         width: "50px", 
         height: "50px"
      }}
    >
      <Box 
        component='img'
        src={icon} 
        alt="custom icon" 
        sx={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "2px"}} 
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
    // Convert children to plain text
    const text = React.Children.toArray(children).join(" ");

    // Count words by splitting on whitespace
    const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

    return (<>
    <Box justifyContent="center" display="flex" gap={3}
    sx = {{
            backgroundColor: "rgba(139, 139, 141, 0.22)",
            p: 5,
            margin: "150px 0 150px 0",
            borderRadius: "30px",
            flexDirection: {
                md: wordCount>=100 ? "column" : "row",
                sm: "column",
                xs: "column",
            },
    }}>
        <Box component="img" sx={{
            maxHeight: {
                md: wordCount>=100 ? "1000px" : "400px",
                sm: "1000px",
            },
            width: {
                md: wordCount>=100 ? "100%" : "50%",
                sm: "100%",
                xs: "100%",
            },
            height: {
                md: wordCount>=100 ? "100%" : "50%",
                sm: "100%",
                xs: "100%",
            },
            objectFit:"contain",
            borderRadius:"50px",          
        }}src={image} alt="Post image">
        </Box>
        <Box>
            <Box>
                <Box display="flex" flexDirection="row" gap={1} flexWrap="wrap">
                    {/* Row 1 */}
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h3">{title}</Typography>
                    </Box>

                    {/* Row 2 */}
                    <Box display="flex" flexWrap="wrap" gap={1}>
                    {languages?.map((language, i) => (
                        <TechIcon key={i} link={language.link} icon={language.icon} />
                    ))}
                    </Box>
                    </Box>
                <Box display="flex" alignItems="flex-start" flexDirection="column" gap = {2}>
                    <Typography variant="h4">{date}</Typography>
                    {link ?
                    <Button variant="contained" href={link}>Go to Project</Button>
                    : <></>}
                </Box>
                
            </Box>
            {wordCount<100 ? 
            <TextBox>
                <>
                    {children}
                </>
            </TextBox>
            : <></>
            }
        </Box>
        {wordCount>=100 ? 
            <TextBox>
                <>
                    {children}
                </>
            </TextBox>
            : <></>
        }
    </Box>
    </>);
}