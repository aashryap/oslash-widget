import React from "react";
import "./index.css";

const PersonOptionComponent = ({
    option,
    isSelected=false,
    onItemClick
}) => {
    return (<div 
                key={option.value} 
                onClick={() => onItemClick(option)} 
                className={`dropdown-item-person ${isSelected && "selected"}`}
            >
                <img  src={option.imageUrl}  className="profile-image" />
                <span>{option.label}</span>
                {/* <div>check</div> */}
        </div>) 
}

export default PersonOptionComponent;
