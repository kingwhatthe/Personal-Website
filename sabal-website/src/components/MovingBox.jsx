import Box from "@mui/material/Box"
import { motion } from "framer-motion";
import { Post } from './Post'

//Will come from left side if left is true.
const MovingBox = ({title, date, link, image, left, children, languages}) =>{
  return (
     <Box
      component={motion.div}
      initial={{ x: left ? "100%" : "-100%", opacity: 1 }}     // Start off-screen
      whileInView={{ x: left ? "7%" : "-7%", opacity: 1 }}      // Animate when scrolled into view
      viewport={{ once: true, amount: 0.02}}  // `once` = animate only first time; `amount` = % visible before triggering
      transition={{ duration: .7, ease: "easeOut" }}
    >
      <Post title = {title} date={date} link={link} image={image} languages={languages}>
        {children}
      </Post>
    </Box>
  );
}
export default MovingBox