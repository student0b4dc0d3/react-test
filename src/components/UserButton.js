
import React from 'react';

export default function UserButton({user,userSelect}){
    const handleClick=()=>{
        userSelect(user)
    };
    return <li>
        <button className="cls_user_button" onClick={handleClick}>
            {user.name.first+' '+user.name.last}
        </button>
    </li>
}

;

