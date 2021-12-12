import React, {useState} from "react";
import './delWord.css'
import '../../ sharedFiles/input.css'
import '../../GrayButtons/gray_buttons.css'
import {Win} from "../../Win/win";
import {WinProps} from "../../Win/WinProps";
import {GrayButtons} from "../../GrayButtons/GrayButtons";

export const DelWord: React.FC<WinProps> = props => {

    return (<>
        <Win active={props.active} setActive={props.setActive}>
            <div className="pop-up_bloc--minus">
                <div className="form_input form_input--minus">
                    <h3 id="form_input__h3">Видалити: ... ?</h3>
                    <GrayButtons setActive={props.setActive}/>
                </div>
            </div>
        </Win>
        </>)
}