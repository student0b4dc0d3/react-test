
import React from 'react';

export default function UserData({user}){
    return <div>
        <img src={user.picture.large} alt="" />
        <h2>{user.name.title+' '+user.name.first+' '+user.name.last}</h2>
        <br/><p>{user.email}</p>
        <br/><p>{user.cell}</p><p>{user.phone}</p>
        <br/><p>{user.location.city+', '+user.location.country}</p>
    </div>
}

;

