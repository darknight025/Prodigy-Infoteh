import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 25,
    },
  },
};


const PDF_FILE_URL='http://localhost:5173/Nishantsurve_Resume.pdf';

const Hero = () => {

  const items=[
    'Contact',
]

  const downloadFileAtURL=(url) =>{
    const fileName=url.split("/").pop()
     const aTag = document.createElement("a");
     aTag.href=url;
     aTag.setAttribute("download",fileName)
     document.body.appendChild(aTag);
     aTag.click();
     aTag.remove();
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>NISHANT SURVE</motion.h2>
          <motion.h1 variants={textVariants}>
            Web developer & Problem Solver
          </motion.h1>

          <motion.div variants={textVariants} className="buttons">
            
            <motion.button whileHover={{ scale: 1.2 }}
              onHoverStart={e => {}}
              onHoverEnd={e => {}}
              
              
              >
              
              {items.map( item =>(
            <motion.a href={`#${item}`} key={item} 
              >{item}</motion.a>
             ))}

            </motion.button>

            <motion.button className="btn2" whileHover={{ scale: 1.2 }}
              onHoverStart={e => {}}
              onHoverEnd={e => {}}
              onClick={()=>{downloadFileAtURL(PDF_FILE_URL)}}
             
              >
           Resume/CV
           </motion.button>
           <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
          </motion.div>
       
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Creating Solutions that makes an impact.
      </motion.div>
      <motion.div   className="imageContainer">
        <motion.img src="/Portfolio_image.jpg" alt=""  
    />
      </motion.div>
    </div>
  );
};

export default Hero;