import './Home.css'
import * as React from 'react'
import { Link } from 'react-router-dom'
import Box from "@mui/material/Box"
import { motion } from "framer-motion";
import { TextBox } from './components/Post'

const WaveWord = ({ children, onClick }) => {
  // Split word into letters
  const letters = children.split("");

  return (
    <Box
      component="span"
      onClick={onClick}
      sx={{
        textShadow: "8px 8px 5px rgba(0,0,0,.4)",
        display: "inline-flex",
        gap: "2px",
        fontSize: "5rem",
        fontWeight: "bold",
        userSelect: "none",
        padding: "20px",
        color: "white",
      }}
    >
      {letters.map((letter, i) =>
        letter === " " ? (
          <span key={i} style={{ width: ".5ch" }} />
        ) : (
          <motion.span
            key={i}
            whileHover={{ y: -6 }}
            whileTap={{ y: 6, scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
              delay: i * 0.05, // wave effect
            }}
          >
            {letter}
          </motion.span>
        )
      )}
    </Box>
  );
};

function Home() {

  const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  React.useEffect(() => {
    const metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", "#080422");
    }
  }, []);

  document.documentElement.style.background = "radial-gradient(ellipse, rgba(36, 69, 131, 0.681) 5%,rgb(8, 4, 34) 95%)"
  return (
    <>
        <Box display="flex" gap = {4} sx ={{
          flexDirection: {
            sm: "column",
            md: "row",
          },
          justifyContent: "center",
          alignItems: "center",

        }}>
          <Box component = "img" sx={{
            width: {md: "150px", sm: "300px"}, 
            height: "auto", 
            borderRadius:"50px",
            boxShadow: "7px 7px 5px rgba(0,0,0,.4)"
            }} src="/web-app-manifest-512x512.png" alt="Sabal Schuster img" />
          <WaveWord>Sabal Schuster</WaveWord>
        </Box>
        
        <Box display="flex" gap={10} sx = {{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",   
            },

        }}>
            <Link to="connect">
              <Box component = "h1" sx = {{
                color: "white",
                textShadow: isMobile ? "none" : "5px 5px 2px rgba(0,0,0,.4)",
                "&:hover": { color: "rgba(181, 181, 181, 1)" },
                textDecoration: isMobile ? "underline" : "none"
              }}>
                Connect
              </Box>
            </Link>
            <Link to="create">
              <Box component = "h1" sx = {{
                color: "white",
                textShadow: isMobile ? "none" : "5px 5px 2px rgba(0,0,0,.4)",
                "&:hover": { color: "rgba(181, 181, 181, 1)" },
                textDecoration: isMobile ? "underline" : "none"
              }}>
                Create
              </Box>
            </Link>
            <Link to="educate">
              <Box component = "h1" sx = {{
                color: "white",
                textShadow: isMobile ? "none" : "5px 5px 2px rgba(0,0,0,.4)",
                "&:hover": { color: "rgba(181, 181, 181, 1)" },
                textDecoration: isMobile ? "underline" : "none"
              }}>
                Educate
              </Box>
            </Link>
        </Box>

        {/* Content blerb */}
        <TextBox>
            Hello and welcome to sabalschuster.com! 
            My name is Sabal. I'm a Computer Engineering student at the University of Florida with a strong background in C++, web development, and software design. I enjoy turning technical ideas into real tools, whether that's building interactive websites, developing efficient algorithms, or solving problems through collaboration.
            <br></br>
            <br></br>
            To learn more about me, check out my core values by clicking on each of them.
        </TextBox>
    </>
  )
}

export default Home
