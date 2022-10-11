import React from "react";
import "./card.css";

function Card({
    style={},
    classNames="",
    children,
    headerComponent,
    header = {
        component: null,
        classes: ''
    },
    footer = {
        component: null,
        classes: ''
    }
}) {
    return (
        <div className="card" style={{...style}}>
            {
                header.component !== null &&
                <div className={`card-header ${header.classes}`}>
                    { header.component }
                </div>
            }
            <div className="card-main">
                {
                    children
                }
            </div>
            {
                footer.component !== null && 
                <div className={`card-footer ${footer.classes}`}>
                    {footer.component}
                </div>
            }
      </div>
    )
}

export default Card;