import React from "react";
import "./index.css";

const GroupOptionComponent = ({
    option,
    isSelected=false,
    onItemClick
}) => {
    return <div 
                key={option.value} 
                onClick={() => onItemClick(option)} 
                className={`dropdown-item-person ${isSelected && "selected"}`}
            >
                <div className="dropdown-item-legend">
                    {
                        <span>{option.label[0]}</span>
                    }
                </div>
                <span>
                    {
                        option.label
                    }
                </span>
        </div>  
}

export default GroupOptionComponent;
