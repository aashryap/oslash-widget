import React, { useEffect, useState } from "react";
import {ButtonWithIcon} from "../../common/Button";
import { FaShareAlt } from 'react-icons/fa';
import "./index.css";
import { ShareProvider } from "./ShareContext";
import ShareCard from "./ShareCard";

function Share({}) {
    const [showShareCard, setShowShareCard] = useState(false);

    return <div>
        <ButtonWithIcon onClick={() => setShowShareCard((showShareCard) => {
            return !showShareCard;
        })} classNames="share-button" title={'Share'} IconComponent={<FaShareAlt />}/>
        {
            showShareCard &&
            <ShareProvider>
                <ShareCard />
            </ShareProvider>
        }
        
    </div>
}


export default Share;
