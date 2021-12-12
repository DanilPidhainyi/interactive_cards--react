import React from "react";

export interface WinProps {
    active: Boolean
    //todo типи тут
    setActive: React.Dispatch<React.SetStateAction<boolean>>
    children?: JSX.Element | JSX.Element[];
}