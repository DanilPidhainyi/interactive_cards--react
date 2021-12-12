import React, {useState} from "react";
import './addDictionary.css'
import '../../ sharedFiles/input.css'
import {Win} from "../../Win/win";
import {WinProps} from "../../Win/WinProps";
import {GrayButtons} from "../../GrayButtons/GrayButtons";

export const AddDict: React.FC<WinProps> = props => {


    return (<>
        <Win active={props.active} setActive={props.setActive}>
                <div className="pop-up_bloc--add_dictionary">
                    <form className="form_input" method="get" action="#">
                        <div className="animated_word">
                            <h3 id="name_dictionary"
                                className="animated_word__text animated_word__text--name_dictionary">
                                Назва словника:</h3>
                            <label>
                                <input id="name_dictionary_input" className="form_input__input" type="text"
                                       name="text_en_plus"/>
                            </label>
                        </div>
           {/*todo тут була textera*/}
                    </form>
                    <GrayButtons setActive={props.setActive}/>
                </div>
        </Win>
    </>)
}