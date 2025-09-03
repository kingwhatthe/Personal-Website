import './Home.css'
import Box from "@mui/material/Box"
import {Typography} from "@mui/material";
import * as React from 'react';
import BasicMenu from './components/BasicMenu';
import MovingBox from './components/MovingBox';
import postInfo from './postInfo.json';
import { TextBox } from './components/Post';

const Education = ({university, gpa, gradDate, major, image, content}) => {
      
  //Used to count words to adjust post layout in case post content is too long
  const text = React.Children.toArray(content).join(" ");
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  return(<>
    <Box justifyContent="center" display="flex" gap={3}
    sx = {{
            backgroundColor: "rgba(139, 139, 141, 0.22)",
            p: 5,
            margin: "150px 0 150px 0",
            borderRadius: "30px",
            minWidth: "90%",
            flexDirection: {
                md: wordCount>=100 ? "column" : "row",
                sm: "column",
                xs: "column",
            },
    }}>
        <Box component="img" sx={{
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
            overflow: "hidden",
            objectFit: "contain",
            borderRadius:"50px",          
        }}src={image} alt="Post image"></Box>
        <Box>
            <Box>
                <Box display="flex" flexDirection="row" gap={1} flexWrap="wrap">
                    <Typography variant="h3">{university}</Typography>
                </Box>
                <Box display="flex" alignItems="flex-start" flexDirection="column" gap = {2}>
                    <Typography variant="h4">Graduation: {gradDate}</Typography>
                </Box>
                <Box display="flex" alignItems="flex-start" flexDirection="column" gap = {2}>
                    <Typography variant="h4">Major: {major}</Typography>
                </Box>
                <Box display="flex" alignItems="flex-start" flexDirection="column" gap = {2}>
                    <Typography variant="h4">GPA: {gpa}</Typography>
                </Box>
                
            </Box>
            {wordCount<100 ? 
            <TextBox>
                <>
                    {content}
                </>
            </TextBox>
            : <></>
            }
        </Box>
        {wordCount>=100 ? 
            <TextBox>
                <>
                    {content}
                </>
            </TextBox>
            : <></>
        }
    </Box>
    </>);
}

function Educate() {
  React.useEffect(() => {
    const metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", "#221e04ff");
    }
  }, []);
  //Loads from json
  const experiences = postInfo.education.experience;
  const education = postInfo.education.college;

  //Changes background color
  document.documentElement.style.background = "radial-gradient(ellipse, rgba(131, 99, 36, 0.68) 5%,rgba(34, 26, 4, 1) 95%)";
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
        <Education university={education.university} gpa={education.GPA} gradDate={education.graduation} image={education.image} major={education.major} content={education.content}/>
        {experiences?.map((post,i)=>(
          <MovingBox title = {post.title} date = {post.date} link = {post.link} image = {post.image} left={i%2!=0} languages={post.languages}> 
              {post.content ? post.content : "No Post content"}
          </MovingBox>
        ))}
    </>
  )
}

export default Educate
