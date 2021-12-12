import React, {useState} from "react";
import './choose.css'
import '../../ sharedFiles/input.css'
import '../../GrayButtons/gray_buttons.css'
import {Win} from "../../Win/win";
import {WinProps} from "../../Win/WinProps";
import {GrayButtons} from "../../GrayButtons/GrayButtons";

export const Choose: React.FC<WinProps> = props => {

    return (<>
        <Win active={props.active} setActive={props.setActive}>
            <div className="pop-up_bloc--list_dictionary">
                <h3>Вибери словник</h3>
                <div id="list_dict" className="list_dict"></div>
                <GrayButtons setActive={props.setActive}/>
            </div>
        </Win>
    </>)
}