import { Box, Typography, Link } from "@mui/material"
import React from "react"


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

export const Post = ({children, title, date, link}) => {
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
        }}src="/sabalschuster.jpg" alt="Post image"></Box>
        <Box>
            <Box >
                <Box display="flex" justifyContent="space-between" flexDirection="row">
                    <Typography variant="h3">{title} </Typography>
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