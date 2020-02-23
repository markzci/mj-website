import React from 'react';
import Omni from '../components/Omni';
import ReactTypingEffect from 'react-typing-effect';

function Home(props) {
    return(
        <div>
            <ReactTypingEffect className="typingeffect" text={['Hello! This is Mark Jurkiewicz','I am a Software Developer.']} speed={50} eraseDelay={1000}/>
            <Omni title={props.title} subTitle={props.subTitle} text={props.text}/>
        </div>
    )
}

export default Home;