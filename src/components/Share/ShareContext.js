import { createContext, useContext, useState } from "react";


export const ShareContext = createContext();


export const ShareProvider = (props) => {
    const [sharedUsers, setSharedUsers] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    return (
        <ShareContext.Provider value={{sharedUsers, setSharedUsers, allUsers, setAllUsers}}>
            {props.children}
        </ShareContext.Provider>
    )
}

export const useShareContext = () => useContext(ShareContext);

