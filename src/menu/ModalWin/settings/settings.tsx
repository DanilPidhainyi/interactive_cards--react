import React, {useState} from "react";
import './settings.css'
import '../../ sharedFiles/input.css'
import '../../GrayButtons/gray_buttons.css'
import '../../ sharedFiles/checkdox.css'
import {Win} from "../../Win/win";
import {WinProps} from "../../Win/WinProps";
import {GrayButtons} from "../../GrayButtons/GrayButtons";

export const Settings: React.FC<WinProps> = props => {

    return (<>
        <Win active={props.active} setActive={props.setActive}>
            <div className="pop-up_bloc--settings">
                <h5 className="h--settings"> Реверс </h5>
                <div className="checkbox-bloc">
                    {/*<input className="checkbox" id="checkbox" type="checkbox">*/}
                    {/*    <label className="checkbox__label" htmlFor="checkbox"></label>*/}
                </div>
                <GrayButtons setActive={props.setActive}/>
            </div>
        </Win>
    </>)
}