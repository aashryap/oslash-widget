import React from 'react';
import "./index.css";
import Dropdown from '../../common/Dropdown';
import { access } from '../../models/access';

const SharedMember = ({
    text='',
    subText='',
    onPermissionChange=() => {},
    permission
})  => {
    return <div className='shared-member-container flex-justify-space-between'>
        <div className='flex-justify-space-between gap-10'>
            <img  src={'https://images.unsplash.com/photo-1664574654529-b60630f33fdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'}  className="profile-image-2" />
            <div>
                <div className='text'>{text}</div>
                <div className='subtext'>{subText}</div>
            </div>
        </div>
        <div>
            <Dropdown 
                onChange={onPermissionChange}
                classes={{
                    dropdownContainer: 'shared-member-access-dd-container'
                }}
                placeHolder={'permission'}
                options={access}
                value={access.find((acc) => acc.value === permission )}
            />
        </div>
    </div>
}

export default SharedMember;
