import React from 'react';
import './feature.css';
import {motion} from "framer-motion";

function Feature({title, text}) {
    return (
        <div className="gpt3__feature-container__feature">
            <div className="gpt3__feature-container__feature-title">
                <div/>
                <h1>{title}</h1>
            </div>
            <div className="gpt3__feature-container_feature-text">
                <motion.p
                    whileInView={{opacity: [0, 1], x: [100, 0]}}
                    transition={{duration: 0.5}}
                >{text}</motion.p>
            </div>
        </div>
    );
}

export default Feature;