import React from "react";

function BaseButton({
    onClick=()=>{},
    children,
    className,
    style={},
    classNames
}) {
    return <button style={{...style}} className={classNames} onClick={onClick}>
        {children}
    </button>
}

export default BaseButton;