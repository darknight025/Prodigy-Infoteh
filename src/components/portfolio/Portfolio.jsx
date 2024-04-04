import React, { useRef } from 'react'
import "./portfolio.scss";
import {motion,useScroll, useSpring, useTime, useTransform} from 'framer-motion';


const items=[
    {
        id:1,
        title:"Disney clone",
        img:"https://www.glitched.online/wp-content/uploads/2022/03/Disney_Logo.jpeg",
        desc:"• Developed a visually stunning and user-friendly Disney+ clone responsive UI by using React,Utilized the TMDB API to retrieve and showcase a diverse range of content dynamically."
    },

    {
        id:2,
        title:"Code Editor",
        img:"https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc:`• Build a real-time collaborative Editor using the React framework forinteractive UI, Build a real-time sync feature forthe code using the Socket.io ${"   "}Utilized the CodeMirror Library for styling of the code-editor.`
    },

    {
        id:3,
        title:"OpenAi Image",
        img:"https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        desc:"• Developed a web application in which users can generate images by entering the prompts, Utilized the OPENAI API to Generate images according to size as Small,Medium and Large."
    },

    {
        id:4,
        title:"Email Sender",
        img:"https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg",
        desc:"• Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam obcaecati officiis, corporis tenetur explicabo nesciunt minus, veniam accusamus quod vero corrupti ab ea. Asperiores quasi optio impedit numquam deleniti praesentium!"
    },

];

const Single =({item}) =>{
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target:ref,
  //      offset:["start start","end start"]
    });

    const y= useTransform(scrollYProgress , [0,1] , [-300,300]);

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                <img src={item.img} alt='' />
                </div>
                <motion.div className="textContainer" style={{y}}  >
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <motion.button  whileHover={{ scale: 1.2 }}
              onHoverStart={e => {}}
              onHoverEnd={e => {}}
              ><a href='https://github.com/Nishantsurve'>See Demo</a></motion.button>
                </motion.div>
            </div>
            </div>
        </section>
    )
}



const Portfolio = () => {

    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["end end", "start start"],
    });

// transitions effect

    const scaleX= useSpring(scrollYProgress, {
        stiffness:100,
        damping:30,
    });

  return (
    <div className="portfolio"  ref ={ref}>
        <div className="progress">
            <h1>Featured Projects</h1>
            <motion.div style={{scaleX}} className="progressBar">

            </motion.div>
        </div>
    {items.map(item =>(
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Portfolio;