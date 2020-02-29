import React from 'react';
import Omni from '../components/Omni';
import ReactTypingEffect from 'react-typing-effect';
import { motion } from 'framer-motion';

function Home(props) {
    return(
        <div>
            <motion.div exit={{opacity:0}} animate={{
                            x: 0,
                            backgroundColor: "#2193b0",
                            boxShadow: "130px 175px 0 rgba(0, 0, 0, 0.5)",
                            position: "relative",
                            maxWidth: "100%",
                            height: '75vh'
                        }}>
            <Omni title={props.title} subTitle={props.subTitle} text={props.text}/>
            <div className='typing'>
            <ReactTypingEffect className="typingeffect" text={['Hello! This is Mark!','Thanks for stopping by.']} speed={50} eraseDelay={1000}/>
            </div>
            </motion.div>
        </div>
    )
}

export default Home;