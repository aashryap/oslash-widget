import "./index.css"
import Switch from "react-switch";
import { useState } from "react";

const Web = () => {
    return <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM4.66357 12.0548C5.41085 9.90721 6.75115 8.03728 8.48841 6.64111C9.02419 7.45932 9.94899 7.99982 11 7.99982C12.6569 7.99982 14 9.34297 14 10.9998V11.9998C14 14.209 15.7909 15.9998 18 15.9998C20.2092 15.9998 22 14.209 22 11.9998C22 10.1196 23.2973 8.54235 25.0457 8.11438C26.8856 10.2232 28 12.9814 28 15.9998C28 16.6814 27.9432 17.3497 27.8341 18.0002H25.9999C23.7908 18.0002 21.9999 19.791 21.9999 22.0002V26.3945C20.2349 27.4155 18.1855 27.9998 15.9998 27.9998V24C15.9998 21.7909 14.209 20 11.9998 20C9.79069 20 7.99983 18.2091 7.99983 16C7.99983 14.017 6.55682 12.371 4.66357 12.0548Z" fill="#6B7280"/>
    </svg>    
}

const CardHeader = () => {
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked(!checked)
    }

    return <div className="flex-justify-space-between">
                <div className="flex-justify-space-between gap-10" >
                    <Web />
                    <div>
                        <div 
                            style={{
                                    fontWeight: 400,
                                    fontSize: '16px'
                            }}>Share to web</div>
                        <div style={{ fontSize: '14px'}}>Publish and share link with anyone</div>
                    </div>
                </div>
                <div>
                    <Switch 
                        offColor="#E5E7EB"
                        checkedIcon={false}
                        uncheckedIcon={false}
                        onChange={handleChange} 
                        checked={checked} 
                    />
                </div>
        </div>
}

export default CardHeader;
