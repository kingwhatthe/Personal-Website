import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Home.css'
import { Link } from 'react-router-dom'
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import DownloadIcon from '@mui/icons-material/Download';
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

const HomeButton = ({children}) =>{
    return(
        <Typography>
            {children}
        </Typography>
    );
}
const WaveWord = ({ children, onClick }) => {
  // Split word into letters
  const letters = children.split("");

  return (
    <Box
      component="span"
      onClick={onClick}
      sx={{
        textShadow: "5px 5px 2px rgba(0,0,0,.4)",
        display: "inline-flex",
        gap: "2px",
        fontSize: "3rem",
        fontWeight: "bold",
        cursor: "pointer",
        userSelect: "none",
        padding: "20px",
        color:"white",
      }}
    >
      {letters.map((letter, i) => (
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
      ))}
    </Box>
  );
};


function Home() {
  const [count, setCount] = useState(0)
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
          <h1 class = "name">Sabal Schuster</h1>
        </Box>
        
        <Box display="flex" gap={10} sx = {{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: {
            xs: "column",
            sm: "column", // on extra-small screens → stack vertically
            md: "row",    // on small+ screens → row layout
            },

        }}>
            <Link to="connect">
              <WaveWord>Connect</WaveWord>
            </Link>
            <Link to="create">
              <WaveWord>Create</WaveWord>
            </Link>
            <Link to="educate">
              <WaveWord>Educate</WaveWord>
            </Link>
        </Box>
        <Box sx = {{
            p: '20px',
            m: "40px",
            backgroundColor: "rgba(162, 172, 172, 0.17)",
            borderRadius: "20px"
        }}>
            <Typography>
                I'm a Computer Science student at the University of Florida with a strong background in C++, web development, and software design. I enjoy turning technical ideas into real tools, whether that's building interactive websites, developing efficient algorithms, or solving problems through research and collaboration.
                <br></br>
                <br></br>
                Recently, my team built a React-based website that visualizes the performance of Tries vs. HashMaps using real YouTube search data—combining animation, data analysis, and UI design to help content creators optimize their titles. Projects like this reflect my interest in creating useful, engaging tools that are backed by real data.
                <br></br>
                <br></br>
                Outside of coursework, I’ve also explored areas like 3D printing, teaching, and hardware testing through internships, TA positions, and research. With a near 4.0 GPA and a passion for both design and functionality, I’m always looking for opportunities to grow as a developer and work on meaningful, real-world projects.
            </Typography>
        </Box>
        
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
    </>
  )
}

export default Home
