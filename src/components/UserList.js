
import React from 'react';
import UserButton from './UserButton';

export default function UserList({list,isLoading,requestError,userSelect}){
    if (isLoading) {return <div>Loading data, please wait...</div>}
    else if (requestError) {return <div>{list}</div>}
    else {return <div><ul>
        {list.map((user,idx)=><UserButton key={idx} user={user} userSelect={userSelect} />)}
    </ul></div>}
}

;

