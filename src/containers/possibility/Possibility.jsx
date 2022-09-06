import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png'
import {motion} from "framer-motion";
function Possibility(props) {
    return (
        <div className="gpt3__possibility section__padding" id='possibility'>
            <div className="gpt3__possibility-image">
                <img src={possibilityImage} alt="possibility"/>
            </div>
            <motion.div
                className="gpt3__possibility-content"
                whileInView={{opacity: [0, 1], x: [200, 0]}}
                transition={{duration: 1}}
            >
                <h4>Request Early Access to Get Started</h4>
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <h4>Request Early Access to Get Started</h4>
            </motion.div>
        </div>
    );
}

export default Possibility;