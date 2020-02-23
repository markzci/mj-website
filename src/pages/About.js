import React from 'react';
import Omni from '../components/Omni';

function About(props) {
    return (
        <div>
            <Omni title={props.title} />
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
        </div>
    )
}

export default About;