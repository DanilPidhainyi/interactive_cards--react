import React from "react";
import './gray_buttons.css';
import {GrayButtInterface} from "./GrayButtInterface";


export const GrayButtons: React.FC<GrayButtInterface> = ({setActive}) => {

    return (<>
        <div className="gray_button">
            <button className="gray_button__click" onClick={() => setActive(false)}>Скасувати
            </button>
            <button className="gray_button__click">OK</button>
        </div>
    </>)
}