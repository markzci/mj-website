import React from 'react';
import Omni from '../components/Omni';
import { motion } from 'framer-motion';
import image from '../assets/img/profile3.JPG';

function About(props) {
    const spring = {
        type: "spring",
        damping: 10,
        stiffness: 100
    }
    return (
        <div>
            <motion.div exit={{ opacity: 0 }} animate={{
                x: 0,
                backgroundColor: "#659999",
                boxShadow: "30px 30px 0 rgba(0, 0, 0, 0.5)",
                position: "fixed",

            }}>
                <Omni title={props.title} />
                <motion.div
                    exit={{ opacity: 0 }}
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-center d-none d-lg-block">
                        <img className="img-fluid img-profile rounded-circle mb-2" style={{ width: 245, height: 245 }} src={image} alt=""></img>
                    </span></motion.div>
                <br />
                <p>I'm Mark Jurkiewicz. I have had a lifelong interest in technology and computers. My interest
                            has taken me on a journey from building my own PC from scratch, to studying graphic
                            design, and competitive computer gaming. Through programming I am entering a new level of participation.
                    Web application development is where design and development reach the pinnacle of creative direction.</p>
                <p>
                    This direction is both challenging and rewarding when my own and my team member's contributions are
                                implemented to enhance a user's experience.
                                I look forward to the future of development and emerging technologies.
                                The learning never stops and the fire is stoked with arising challenges and projects. To be given the opportunity
                                to be part of a solution is something I am grateful for and keeps pushing me further.
                    </p>
                    <p>
                        In my spare time I enjoy playing basketball, skiing, hiking and enjoying nature.
                    </p>
                    <span className="font-weight-bolder">
                        Work Experience:
                    </span>
                    <p className="font-weight-normal">
                       - Software Developer at Netreo 2016-2020
                    </p>
                    <p className="font-weight-normal">
                       - PHP Developer I at Center for Innovative Public Health Research
                    </p>
            </motion.div>
        </div>
    )
}

export default About;