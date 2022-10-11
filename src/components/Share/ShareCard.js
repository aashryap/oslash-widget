import React, { useEffect, useState } from "react";
import Card from "../../common/Card";
import "./index.css";
import Dropdown from '../../common/Dropdown';
import CardFooter from "./Footer";
import CardHeader from "./Header";
import {users, sharedData} from "../../models/users";
import { _userToDropdown, _userToShareMember } from "../../transforms";
import { useShareContext } from "./ShareContext";
import SharedMembers from "./SharedMembers";
import SearchFooterComponent from "./SearchFooterComponent";
import PersonOptionComponent from "./PersonOptionComponent";
import GroupOptionComponent from "./GroupOptionComponent";

function ShareCard({}) {
    useEffect(() => {
        // we will call APIs and set the data 
        // setting data can happen in service layer I am diretly setting from here for assignments sake
        setSharedUsers(sharedData);
        setAllUsers(users);
    }, [])

    const [selectedUsers, setSelectedUsers] = useState([]);

    const {sharedUsers, allUsers, setSharedUsers, setAllUsers} = useShareContext();

    const options = _userToDropdown(allUsers);
    
    const handleInvite = () => {
        console.log("Call Invite Api");
        let temp = [];
        for (let i=0;i<selectedUsers.length;i++) {
            for (let j=0;j<allUsers.length;j++) {
                if (selectedUsers[i].id === allUsers[j].id) {
                    temp.push(allUsers[j]);
                }
            }
        }
        console.log("TEMp ", temp);
        setSharedUsers([...sharedUsers, ...temp]);
        setSelectedUsers([]);
    }

    const onUserSelect = (data = []) => {
        console.log("Selected Users", data);
        setSelectedUsers(data);
    }

    return <Card
                style={{
                    width: '512px',
                    marginTop: '10px'
                }}
                header={{
                    component: <CardHeader />
                }}
                footer= {{
                    component: <CardFooter />,
                }}
            >
                <div>
                    <Dropdown 
                        isMulti={true}
                        placeHolder={"People emails and groups"}
                        options={options.map((option) => {
                            if (option?.group === "person") {
                                option.renderer = PersonOptionComponent;
                            } else if (option?.group === "group") {
                                option.renderer = GroupOptionComponent;
                            }
                            return option;
                        })
                        }
                        isSearchable={true}
                        enableGrouping
                        value={selectedUsers}
                        footerComponent={<SearchFooterComponent />}
                        showCaretIcon={false}
                        rightCtaProps={{
                            onClick:handleInvite,
                            text: 'Invite',
                            visible: true,
                        }}
                        onChange={onUserSelect}
                    />
                </div>
            <SharedMembers />
            </Card>
}


export default ShareCard;
