import React from 'react';
import './whatgtp.css';
import {Feature} from "../../components";

function WhatGpt3(props) {
    return (
        <div className="gpt3__whatgpt3 section__margin">
            <div className="gpt3__whatgpt3-feature">
                <Feature/>
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Explore the library</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Feature/>
                <Feature/>
                <Feature/>
            </div>
        </div>
    );
}

export default WhatGpt3;