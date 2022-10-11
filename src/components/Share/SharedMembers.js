import React, { useEffect } from 'react';
import { useShareContext } from "./ShareContext";
import { _userToShareMember } from "../../transforms";
import SharedMember from './SharedMember';

function SharedMembers() {
    const {sharedUsers, setSharedUsers, allUsers, setAllUsers} = useShareContext();
    
    useEffect(() => {
        console.log("all users ", allUsers);
    }, [allUsers]) 

    const onPermissionChange = (val, userId) => {
        console.log(val, userId);
        // call update permission API
        let sharedUserTemp = [];
        sharedUserTemp = sharedUsers.map((su) => {
            if (su.id === userId) {
                su.permission = val.value;
            }  
            return su;
        })  
        console.log("=======", sharedUserTemp);
        setSharedUsers(sharedUserTemp);
        let allUsersTemp = [];
        allUsersTemp = allUsers.map((user) => {
            if (user.id === userId) {
                user.permission = val.value;
            }
            return user;  
        })
        setAllUsers(allUsersTemp);
    }
    
    
    return (<div style={{marginBottom: '40px'}} >
                {
                    _userToShareMember(sharedUsers).map((user) => {
                        return <SharedMember key={user.id} permission={user.permission} onPermissionChange={(val) => onPermissionChange(val, user.id)} text={user.text} subText={user.subText} />
                    })
                }
        </div>)
}

export default SharedMembers;