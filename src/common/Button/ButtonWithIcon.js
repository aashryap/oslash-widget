import React from "react";
import BaseButton from "./baseButton";
import "./button.css";


function ButtonWithIcon({title="", onClick=() => {}, classNames="", style={}, IconComponent = () => null}) {
    return <BaseButton style={style} classNames={`button primary button-with-icon ${classNames}`} onClick={onClick}>
            <div>
                {title}
            </div>
            {IconComponent}
    </BaseButton>
}   

export default ButtonWithIcon;