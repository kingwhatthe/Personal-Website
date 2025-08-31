import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Home.css'
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import DownloadIcon from '@mui/icons-material/Download';
import Typography from "@mui/material/Typography";
import { motion, rgba } from "framer-motion";
import { radialGradient } from 'framer-motion/client'
import { Post } from './Post'

const HomeButton = ({children}) =>{
    return(
        <Typography>
            {children}
        </Typography>
    );
}
// const WaveWord = ({ children, onClick }) => {
//   // Split word into letters
//   const letters = children.split("");

//   return (
//     <Box
//       component="span"
//       onClick={onClick}
//       sx={{
//         textShadow: "5px 5px 2px rgba(0,0,0,.4)",
//         display: "inline-flex",
//         gap: "2px",
//         fontSize: "3rem",
//         fontWeight: "bold",
//         cursor: "pointer",
//         userSelect: "none",
//         padding: "20px",
//       }}
//     >
//       {letters.map((letter, i) => (
//         <motion.span
//           key={i}
//           whileHover={{ y: -6 }}
//           whileTap={{ y: 6, scale: 0.9 }}
//           transition={{
//             type: "spring",
//             stiffness: 400,
//             damping: 10,
//             delay: i * 0.05, // wave effect
//           }}
//         >
//           {letter}
//         </motion.span>
//       ))}
//     </Box>
//   );
// };


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
        
        {/* <Box display="flex" gap={10} sx = {{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: {
            xs: "column",
            sm: "column", // on extra-small screens → stack vertically
            md: "row",    // on small+ screens → row layout
            },

        }}>
            <WaveWord>Connect</WaveWord>
            <WaveWord>Create</WaveWord>
            <WaveWord>Educate</WaveWord>
        </Box> */}
         <Box
            component={motion.div}
            initial={{ x: "-100%", opacity: 1 }}     // Start off-screen
            whileInView={{ x: "-7%", opacity: 1 }}      // Animate when scrolled into view
            viewport={{ once: true, amount: 0.05}}  // `once` = animate only first time; `amount` = % visible before triggering
            transition={{ duration: .7, ease: "easeOut" }}
          >
            <Post title = "This is a post" date="8/02/2020" link="https://google.com">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tenetur odit quisquam suscipit exercitationem architecto reiciendis minus eaque, accusamus eligendi voluptas a repudiandae doloremque. Dicta nostrum cumque ullam obcaecati dolorem.
            </Post>
          </Box>
          <Box
            component={motion.div}
            initial={{ x: "100%", opacity: 1 }}     // Start off-screen
            whileInView={{ x: "7%", opacity: 1 }}      // Animate when scrolled into view
            viewport={{ once: true, amount: 0.05}}  // `once` = animate only first time; `amount` = % visible before triggering
            transition={{ duration: .7, ease: "easeOut" }}
          >
            <Post title = "This is a post" date="8/02/2020" link="https://google.com">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tenetur odit quisquam suscipit exercitationem architecto reiciendis minus eaque, accusamus eligendi voluptas a repudiandae doloremque. Dicta nostrum cumque ullam obcaecati dolorem.
            </Post>
          </Box>
          <Box
            component={motion.div}
            initial={{ x: "-100%", opacity: 1 }}     // Start off-screen
            whileInView={{ x: "-7%", opacity: 1 }}      // Animate when scrolled into view
            viewport={{ once: true, amount: 0.05}}  // `once` = animate only first time; `amount` = % visible before triggering
            transition={{ duration: .7, ease: "easeOut" }}
          >
            <Post title = "This is a post" date="8/02/2020" link="https://google.com">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tenetur odit quisquam suscipit exercitationem architecto reiciendis minus eaque, accusamus eligendi voluptas a repudiandae doloremque. Dicta nostrum cumque ullam obcaecati dolorem.
            </Post>
          </Box>
        {/* <Box sx = {{
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
        </Box> */}
        
        {/* <Button variant="contained" startIcon={<DownloadIcon />} onClick={()=>{
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
        </Button> */}
    </>
  )
}

export default Create
