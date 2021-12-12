import React, {useState} from "react";
import './addWord.css'
import '../../ sharedFiles/input.css'
import '../../GrayButtons/gray_buttons.css'
import {Win} from "../../Win/win";
import {WinProps} from "../../Win/WinProps";
import {GrayButtons} from "../../GrayButtons/GrayButtons";


export const AddWord: React.FC<WinProps> = props => {

    const [active, setActive] = useState(false)

    const inputClass = () => {
        return active ? "animated_word__text text_new_word_animated" : "animated_word__text"
    }

    return (<>
        <Win active={props.active} setActive={props.setActive}>
                <form className="form_input form_input--new_word" action="#">

                    <div className="animated_word">
                        <h3 id="new_word" className={inputClass()}>Нове слово</h3>
                        <label>
                            <input id="new_word_eu_text" className="form_input__input" type="text" value=""
                            onClick={() => setActive(true)}/>
                        </label>
                    </div>

                    <label>
                        <input id="new_word_uk_text" className="form_input__input" type="text" name="text_uk_plus"
                               value=""/>
                    </label>
                    <GrayButtons setActive={props.setActive}/>
                </form>
        </Win>
    </>)
}