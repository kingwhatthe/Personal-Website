import { useState } from 'react'
import Box from "@mui/material/Box"
import {Typography, IconButton} from "@mui/material";
import { Link, useNavigate} from 'react-router-dom';
import { motion, rgba } from "framer-motion";
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { footer } from 'framer-motion/client';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';

const Footer = () => {
    return (
        <Box sx={{
            backgroundColor: "rgba(0,0,0,0.2)",
            p: "15px",
            width: "70%",
            margin: "0 auto",
            borderRadius: "10px",
            color: "rgba(255,255,255,0.4)"
        }}>
            <Box sx ={{
                flexWrap: "wrap",
                display: "flex",
                justifyContent: "space-between",
                gap: 1,
                alignItems: "center",
            }}>
                <Typography>
                954-706-8015
                </Typography>
                <IconButton size = "large" color="primary" aria-label="Linkedin" href = "https://www.linkedin.com/in/sabalschuster/">
                    <LinkedInIcon fontSize='large' sx={{color: "rgba(255,255,255,0.4)"}} />
                </IconButton>
                <IconButton  size = "large" color="primary" aria-label="GitHub" href = "https://github.com/kingwhatthe">
                    <GitHubIcon fontSize='large' sx={{color: "rgba(255,255,255,0.4)"}} />
                </IconButton>
                
                <Button variant="contained" startIcon={<DownloadIcon />} onClick={()=>{
                    const fileUrl = "resume.pdf";
                    const fileName = "sabal_schuster.pdf";

                    const link = document.createElement("a");
                    link.href = fileUrl;
                    link.download = fileName;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);

                }}>
                    Resume
                </Button>
                <Typography>
                    sabalschuster@ufl.edu
                </Typography>
                <Typography>
                    sabalschuster06@gmail.com
                </Typography>
            </Box>
            <Typography sx={{fontSize: "8pt", marginTop: "10px"}}>
                &copy; 2025 Sabal Schuster. All rights reserved.
            </Typography>
            
        </Box>
    );
    
}
export default Footer