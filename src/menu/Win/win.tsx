import React from "react";
import "./win.css"
import {WinProps} from "./WinProps";


export const Win:React.FC<WinProps> = ({active, setActive, children}) => {
    return (
        <div className={active ? "win active" : "win"} onClick={() => setActive(false)}>
            <div className={active ? "win__content active" : "win__content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

