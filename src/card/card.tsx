import React from "react";
import './card.css'

export const Card: React.FC = () => {

    return (
        <div className="wrap">
            <div className="card">
                <div className="front" id="front">
                    <span className="front__text ">Front</span>
                </div>
                <div className="back" id="back">
                    <span className="back__text">Back</span>
                </div>
            </div>
        </div>
    )
}

