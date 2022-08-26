import React from 'react';
import './whatgtp.css';
import {Feature} from "../../components";

function WhatGpt3(props) {
    return (
        <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
            <div className="gpt3__whatgpt3-feature">
                <Feature
                    title={'What is GPT-3'}
                    text={'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'}
                />
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Explore the library</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Feature
                    title="Chatbots"
                    text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
                />
                <Feature
                    title="Knowledgebase"
                    text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"
                />
                <Feature
                    title="Education"
                    text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"
                />
            </div>
        </div>
    );
}

export default WhatGpt3;