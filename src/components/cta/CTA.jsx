import React from 'react';
import'./cta.css';
function CTA(props) {
    return (
        <div className="gpt3__cta">
            <div className="gpt3__cta-content">
                <p>Request Early Access to Get Started</p>
                <h3>Register Today & start exploring the endless possibilities.</h3>
            </div>
            <div className="gpt3__cta-button">
                <button>Get Started</button>
            </div>
        </div>
    );
}

export default CTA;