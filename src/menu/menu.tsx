import React, {useState} from "react";
import './menu.css';
import addWord from "./image/plus.png";
import delWord from "./image/minus.png";
import addDict from "./image/add_dictionary.png";
import chooseDict from "./image/choose_a_dictionary.png";
import settings from "./image/settings.png"
import {AddWord} from "./ModalWin/addWord/addWord";
import {AddDict} from "./ModalWin/addDictionary/addDictionary";
import {Choose} from "./ModalWin/choose/choose";
import {DelWord} from "./ModalWin/delWord/delWord";
import {Settings} from "./ModalWin/settings/settings";

export const Menu: React.FC = () => {

    const add_word = useState(false)
    const del_word = useState(false)
    const add_dict = useState(false)
    const chose_dict = useState(false)
    const settings_ = useState(false)

    return (<>
        <AddWord active={add_word[0]} setActive={add_word[1]}/>
        <AddDict active={add_dict[0]} setActive={add_dict[1]}/>
        <Choose active={chose_dict[0]} setActive={chose_dict[1]}/>
        <DelWord active={del_word[0]} setActive={del_word[1]}/>
        <Settings active={settings_[0]} setActive={settings_[1]}/>

        <div className="menu">
            <ul className="buttons-menu">
                <li className="buttons-menu__link buttons-menu__link--plus">
                    <button className="buttons-menu__link transparent" onClick={() => add_word[1](true)}>
                        <img src={addWord} width="45" height="45" alt={"add word"}/>
                    </button>
                </li>
                <li className="buttons-menu__link  buttons-menu__link--minus">
                    <button className="buttons-menu__link transparent" onClick={() => del_word[1](true)}>
                        <img src={delWord} width="45" height="45" alt="del word"/>
                    </button>
                </li>
                <li className="buttons-menu__link buttons-menu__link--add-dictionary">
                    <button className="buttons-menu__link transparent" onClick={() => add_dict[1](true)}>
                        <img src={addDict} width="45" height="45" alt="add dictionary"/>
                    </button>
                </li>
                <li className="buttons-menu__link buttons-menu__link--choose">
                    <button className="buttons-menu__link transparent" onClick={() => chose_dict[1](true)}>
                        <img src={chooseDict} width="45" height="45" alt="choose a dictionary"/>
                    </button>
                </li>
                <li className="buttons-menu__link buttons-menu__link--settings">
                    <button className="buttons-menu__link transparent" onClick={() => settings_[1](true)}>
                        <img src={settings} width="45" height="45" alt="settings"/>
                    </button>
                </li>
            </ul>
        </div>
        </>
    )
}